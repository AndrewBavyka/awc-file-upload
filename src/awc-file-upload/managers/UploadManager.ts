import axios, { AxiosResponse, AxiosError, AxiosProgressEvent } from 'axios';
import { SelectedFile } from '../interfaces/SelectedFile';
import { SelectedFileManager } from './SelectedFileManager';
import { EventDispatcher, event } from '../../util/event';

type UploadStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface UploadEventDetail {
    file: SelectedFile;
    status: UploadStatus;
    progress?: number;
    error?: string;
}

export class UploadManager extends EventTarget {
    @event('awc-file-upload-status') private _onUploadStatus!: EventDispatcher<UploadEventDetail>;

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

    private _addFile(file: SelectedFile): void {
        this.queue.push(file);
        this._onUploadStatus({ file, status: 'pending' });
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
            this._onUploadStatus({ file: selectedFile, status: 'uploading', progress: 0 });

            const response: AxiosResponse = await axios.post(this.uploadUrl, formData, {
                signal,
                timeout: 100000,
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const progress = (progressEvent.loaded / progressEvent.total!) * 100;
                        this._onUploadStatus({ file: selectedFile, status: 'uploading', progress });
                    }
                },
            });

            this._onUploadStatus({ file: selectedFile, status: 'success', progress: 100 });
        } catch (error) {
            if (signal.aborted) {
                this._onUploadStatus({ file: selectedFile, status: 'error', error: 'Отмена загрузки' });
                console.log(`Загрузка файла "${file.name}" отменена.`);
            } else {
                const errorMessage = error instanceof AxiosError ? error.message : 'Неизвестная ошибка';
                this._onUploadStatus({ file: selectedFile, status: 'error', error: errorMessage });
                console.error(`Ошибка при загрузке локального файла "${file.name}":`, errorMessage);
            }
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
            this._onUploadStatus({ file: selectedFile, status: 'uploading', progress: 0 });

            const response: AxiosResponse = await axios.post(this.uploadUrl, {
                provider,
                file,
                extraData,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            this._onUploadStatus({ file: selectedFile, status: 'success', progress: 100 });
            console.log(`Удаленный файл "${file.name}" успешно загружен!`, response.data);
        } catch (error: unknown) {
            const errorMessage = error instanceof AxiosError ? error.message : 'Неизвестная ошибка';
            this._onUploadStatus({ file: selectedFile, status: 'error', error: errorMessage });
            console.error(`Ошибка при загрузке удаленного файла "${file.name}":`, errorMessage);
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
        const { file } = selectedFile;

        if (file.file instanceof File) {
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

        try {
            for (const selectedFile of this.queue) {
                await this.uploadFile(selectedFile, this.masterAbortController.signal);
            }
            console.log('Все файлы загружены!');
        } catch (error) {
            if (this.masterAbortController.signal.aborted) {
                console.log('Загрузка была прервана.');
            } else {
                console.error('Ошибка во время загрузки:', error);
            }
        } finally {
            this.isUploading = false;
            this.masterAbortController = null;
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

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-status': CustomEvent<UploadEventDetail>;
    }
}
