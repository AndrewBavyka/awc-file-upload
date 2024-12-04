import axios, { AxiosResponse, AxiosError, AxiosProgressEvent } from 'axios';
import { SelectedFile } from '../interfaces/SelectedFile';
import { SelectedFileManager } from './SelectedFileManager';
import {EventsBus,UploadEventBus, UploadEvents } from './EventsBus';

type UploadStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface UploadEventDetail {
    file: SelectedFile;
    status: UploadStatus;
    progress?: number;
    error?: string;
}

export class UploadManager {
    private static instance: UploadManager | null = null;
    private uploadUrl: string = '';
    private queue: SelectedFile[] = [];
    private isUploading: boolean = false;
    private masterAbortController: AbortController | null = null;

    public static getInstance(): UploadManager {
        if (!UploadManager.instance) {
            UploadManager.instance = new UploadManager();
        }
        return UploadManager.instance;
    }

    public setUploadUrl(uploadUrl: string): void {
        this.uploadUrl = uploadUrl;
    }

    private _dispatchStatus(file: SelectedFile, status: UploadStatus, progress?: number, error?: string): void {
        EventsBus.dispatch(UploadEventBus, UploadEvents.UPLOAD_STATUS, { file, status, progress, error });
    }

    private _dispatchError(error: Error): void {
        EventsBus.dispatch(UploadEventBus, UploadEvents.UPLOAD_ERROR, error);
    }

    private _dispatchStart(): void {
        EventsBus.dispatch(UploadEventBus, UploadEvents.UPLOAD_START);
    }

    private _dispatchEnd(): void {
        EventsBus.dispatch(UploadEventBus, UploadEvents.UPLOAD_END);
    }

    private _addFile(file: SelectedFile): void {
        this.queue.push(file);
        this._dispatchStatus(file, 'pending');
    }

    private async uploadLocalFile(selectedFile: SelectedFile, signal: AbortSignal): Promise<void> {
        const { provider, file } = selectedFile;

        if (!(file.file instanceof File)) {
            console.error('Объект не является локальным файлом:', file);
            return;
        }

        const formData = new FormData();
        formData.append(provider, file.file, file.name);

        const extraData = SelectedFileManager.getInstance().getExtraData();
        for (const key in extraData) {
            formData.append(key, extraData[key]);
        }

        try {
            this._dispatchStatus(selectedFile, 'uploading', 0);

            await axios.post(this.uploadUrl, formData, {
                signal,
                timeout: 100000,
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const progress = (progressEvent.loaded / progressEvent.total!) * 100;
                        this._dispatchStatus(selectedFile, 'uploading', progress);
                    }
                },
            });

            this._dispatchStatus(selectedFile, 'success', 100);
        } catch (error) {
            const errorMessage = signal.aborted
                ? 'Отмена загрузки'
                : error instanceof AxiosError
                    ? error.message
                    : 'Неизвестная ошибка';

            this._dispatchStatus(selectedFile, 'error', undefined, errorMessage);
            this._dispatchError(new Error(errorMessage));
            console.error(`Ошибка при загрузке файла "${file.name}":`, errorMessage);
        }
    }

    private async uploadCloudProviderFile(selectedFile: SelectedFile): Promise<void> {
        const { provider, file } = selectedFile;
        const extraData = SelectedFileManager.getInstance().getExtraData();

        if (!file.fileExternal || !file.file) {
            console.error('Нет URL для загрузки удаленного файла:', file);
            return;
        }

        try {
            this._dispatchStatus(selectedFile, 'uploading', 0);

            await axios.post(this.uploadUrl, { provider, file, extraData }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            this._dispatchStatus(selectedFile, 'success', 100);
        } catch (error: unknown) {
            const errorMessage = error instanceof AxiosError ? error.message : 'Неизвестная ошибка';
            this._dispatchStatus(selectedFile, 'error', undefined, errorMessage);
            this._dispatchError(new Error(errorMessage));
            console.error(`Ошибка при загрузке файла "${file.name}":`, errorMessage);
        }
    }

    public cancelAllUploads(): void {
        if (this.masterAbortController) {
            this.masterAbortController.abort();
            console.log('Все загрузки отменены.');
            this.masterAbortController = null;
        }
    }

    private async uploadFile(selectedFile: SelectedFile, signal: AbortSignal): Promise<void> {
        if (selectedFile.file.file instanceof File) {
            await this.uploadLocalFile(selectedFile, signal);
        } else {
            await this.uploadCloudProviderFile(selectedFile);
        }
    }

    async startUpload(): Promise<void> {
        if (this.isUploading) {
            console.log('Загрузка уже в процессе');
            return;
        }

        this.isUploading = true;
        this.masterAbortController = new AbortController();
        this._dispatchStart();

        try {
            for (const selectedFile of this.queue) {
                await this.uploadFile(selectedFile, this.masterAbortController.signal);
            }
        } catch (error) {
            if (!this.masterAbortController.signal.aborted) {
                this._dispatchError(new Error('Ошибка во время загрузки'));
            }
            console.error('Ошибка во время загрузки:', error);
        } finally {
            this.isUploading = false;
            this.masterAbortController = null;
            this._dispatchEnd();
        }
    }

    async uploadSelectedFiles(): Promise<void> {
        const selectedFileManager = SelectedFileManager.getInstance();
        const selectedFiles = selectedFileManager.getFiles();

        if (selectedFiles.length === 0) {
            console.log('Нет выбранных файлов для загрузки.');
            return;
        }

        for (const selectedFile of selectedFiles) {
            this._addFile(selectedFile);
        }

        await this.startUpload();
    }
}
