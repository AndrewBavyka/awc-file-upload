import axios, { AxiosResponse, AxiosError, AxiosProgressEvent } from 'axios';
import { SelectedFileManager, SelectedFile } from './SelectedFileManager';

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

    async uploadFile(selectedFile: SelectedFile): Promise<void> {
        const { provider, file } = selectedFile;
    
        const fileData = {
            provider: provider,
            name: file.name,
            mimeType: file.mimeType,
            size: file.size,
            modifiedDate: file.modifiedDate,
            file: file,
        };
    
        try {
            const response: AxiosResponse = await axios.post(this.uploadUrl, fileData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const progress = (progressEvent.loaded / progressEvent.total!) * 100;
                        console.log(`Загрузка файла "${file.name}": ${progress.toFixed(2)}%`);
                    }
                },
            });
    
            console.log(`Файл "${file.name}" успешно загружен!`, response);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error(`Ошибка при загрузке файла "${file.name}":`, error);
            } else {
                console.error('Неизвестная ошибка при загрузке файла:', error);
            }
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

