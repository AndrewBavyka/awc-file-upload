import axios, { AxiosResponse, AxiosError, AxiosProgressEvent } from 'axios';
import { SelectedFile } from '../interfaces/SelectedFile';
import { SelectedFileManager } from './SelectedFileManager';

export class UploadManager {
    private uploadUrl: string;
    private queue: SelectedFile[] = [];
    private isUploading: boolean = false;

    constructor(uploadUrl: string) {
        this.uploadUrl = uploadUrl;
    }

    addFile(file: SelectedFile): void {
        this.queue.push(file);
    }

    private async uploadLocalFile(selectedFile: SelectedFile): Promise<void> {
        const { provider, file } = selectedFile;

        if (!(file.file instanceof File)) {
            console.error('Объект не является локальным файлом:', file);
            return;
        }

        const formData = new FormData();

        formData.append(provider, file.file, file.name);

        try {
            const response: AxiosResponse = await axios.post(this.uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const progress = (progressEvent.loaded / progressEvent.total!) * 100;
                        console.log(`Загрузка локального файла "${file.name}": ${progress.toFixed(2)}%`);
                    }
                },
            });

            console.log(`Локальный файл "${file.name}" успешно загружен!`, response.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error(`Ошибка при загрузке локального файла "${file.name}":`, error.message);
            } else {
                console.error('Неизвестная ошибка при загрузке локального файла:', error);
            }
        }
    }

    private async uploadCloudProviderFile(selectedFile: SelectedFile): Promise<void> {
        const { provider, file } = selectedFile;
    
        if (!file.fileExternal || !file.file) {
            console.error('Нет URL для загрузки удаленного файла:', file);
            return;
        }

        try {
            const response: AxiosResponse = await axios.post(this.uploadUrl, {provider, file } , {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log(`Удаленный файл "${file.name}" успешно загружен!`, response.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error(`Ошибка при загрузке удаленного файла "${file.name}":`, error.message);
            } else {
                console.error('Неизвестная ошибка при загрузке удаленного файла:', error);
            }
        }
    }
    

    private async uploadFile(selectedFile: SelectedFile): Promise<void> {
        const {file } = selectedFile;

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
