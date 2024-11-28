import axios, { AxiosResponse, AxiosError, AxiosProgressEvent } from 'axios';
import { SelectedFile } from '../interfaces/SelectedFile';
import { SelectedFileManager } from './SelectedFileManager';

type UploadStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface UploadEventDetail {
    file: SelectedFile;
    status: UploadStatus;
    progress?: number;
    error?: string;
}

export class UploadManager extends EventTarget {
    private uploadUrl: string;
    private queue: SelectedFile[] = [];
    private isUploading: boolean = false;

    constructor(uploadUrl: string) {
        super();
        this.uploadUrl = uploadUrl;
    }

    addFile(file: SelectedFile): void {
        this.queue.push(file);
        this.dispatchEvent(new CustomEvent<UploadEventDetail>('awc-file-upload-status', {
            detail: {
                file,
                status: 'pending',
            },
        }));
    }

    private dispatchUploadEvent(file: SelectedFile, status: UploadStatus, progress?: number, error?: string): void {
        this.dispatchEvent(new CustomEvent<UploadEventDetail>('upload-status', {
            detail: { file, status, progress, error },
        }));
    }

    private async uploadLocalFile(selectedFile: SelectedFile): Promise<void> {
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
            this.dispatchUploadEvent(selectedFile, 'uploading', 0);

            const response: AxiosResponse = await axios.post(this.uploadUrl, formData, {
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const progress = (progressEvent.loaded / progressEvent.total!) * 100;
                        this.dispatchUploadEvent(selectedFile, 'uploading', progress);
                        console.log(`Загрузка локального файла "${file.name}": ${progress.toFixed(2)}%`);
                    }
                },
            });

            this.dispatchUploadEvent(selectedFile, 'success', 100);
            console.log(`Локальный файл "${file.name}" успешно загружен!`, response.data);
        } catch (error: unknown) {
            const errorMessage = error instanceof AxiosError ? error.message : 'Неизвестная ошибка';
            this.dispatchUploadEvent(selectedFile, 'error', undefined, errorMessage);
            console.error(`Ошибка при загрузке локального файла "${file.name}":`, errorMessage);
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
            this.dispatchUploadEvent(selectedFile, 'uploading', 0);

            const response: AxiosResponse = await axios.post(this.uploadUrl, {
                provider,
                file,
                extraData,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            this.dispatchUploadEvent(selectedFile, 'success', 100);
            console.log(`Удаленный файл "${file.name}" успешно загружен!`, response.data);
        } catch (error: unknown) {
            const errorMessage = error instanceof AxiosError ? error.message : 'Неизвестная ошибка';
            this.dispatchUploadEvent(selectedFile, 'error', undefined, errorMessage);
            console.error(`Ошибка при загрузке удаленного файла "${file.name}":`, errorMessage);
        }
    }

    private async uploadFile(selectedFile: SelectedFile): Promise<void> {
        const { file } = selectedFile;

        if (file.file instanceof File) {
            await this.uploadLocalFile(selectedFile);
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

        for (const selectedFile of this.queue) {
            await this.uploadFile(selectedFile);
        }

        console.log('Все файлы загружены!');
        this.isUploading = false;
    }

    async uploadSelectedFiles(): Promise<void> {
        const selectedFileManager = SelectedFileManager.getInstance();
        const selectedFiles = selectedFileManager.getFiles();

        if (selectedFiles.length === 0) {
            console.log('Нет выбранных файлов для загрузки.');
            return;
        }

        for (const selectedFile of selectedFiles) {
            this.addFile(selectedFile);
        }

        await this.startUpload();
    }
}

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-status': CustomEvent<UploadEventDetail>;
    }
}
