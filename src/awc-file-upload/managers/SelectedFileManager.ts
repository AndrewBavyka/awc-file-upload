import { SVGTemplateResult } from "lit";
import { ProviderFile } from "../interfaces/ProviderFile";
import { SelectedFile } from "../interfaces/SelectedFile";
import { EventsBus, SelectedFilesEventBus, SelectedFilesEvents } from "./EventsBus";

export class SelectedFileManager {
    private static instance: SelectedFileManager;
    private selectedFiles: Map<string, SelectedFile> = new Map();
    private extraData: Record<string, any> = {};

    private maxFileSize: number = 0;
    private uploadLimit: number = 0;

    private fileSelectionChanged() {
        EventsBus.dispatch(SelectedFilesEventBus, SelectedFilesEvents.FILE_SELECTION_CHANGE, this.getFiles());
    }

    static getInstance() {
        if (!SelectedFileManager.instance) {
            SelectedFileManager.instance = new SelectedFileManager();
        }
        return SelectedFileManager.instance;
    }

    getExtraData() {
        return this.extraData;
    }

    setExtraData(data: Record<string, any>) {
        this.extraData = { ...this.extraData, ...data };
    }

    setLimits(uploadLimit: number, maxFileSize: number) {
        this.uploadLimit = uploadLimit;
        this.maxFileSize = maxFileSize;
    }

    isFileValid(file: ProviderFile): boolean {
        return file.size! <= this.maxFileSize;
    }
    
    addFile(file: ProviderFile, provider: string, providerIcon?: SVGTemplateResult) {
        if (this.uploadLimit > 0 && this.selectedFiles.size >= this.uploadLimit) {
            console.warn("Превышено максимальное количество файлов");
            return;
        }

        if (this.maxFileSize > 0 && file.size! > this.maxFileSize) {
            console.warn(`Файл ${file.name} превышает максимальный размер ${this.maxFileSize} байт`);
            return;
        }

        if (!this.selectedFiles.has(file.id)) {
            this.selectedFiles.set(file.id, { file, provider, providerIcon });
        }

        this.fileSelectionChanged();
    }

    removeFile(fileId: string) {
        if (this.selectedFiles.delete(fileId)) {
            this.fileSelectionChanged();
        }
    }

    clearFiles() {
        if (this.selectedFiles.size > 0) {
            this.selectedFiles.clear();
            this.fileSelectionChanged();
        }
    }

    getFiles(): SelectedFile[] {
        return Array.from(this.selectedFiles.values());
    }

    getFile(fileId: string): SelectedFile | undefined {
        return this.selectedFiles.get(fileId);
    }

    setExternalMode(isExternalMode: boolean) {
        this.selectedFiles.forEach((selectedFile) => {
            if(selectedFile.provider === "local") return;

            const { file } = selectedFile;
            file.fileSource = isExternalMode ? "fileExternal" : "file";
        });

        this.fileSelectionChanged();
    }

    convertToProviderFile(file: File) {
        const isImage = file.type.startsWith("image/");
       
        return {
            id: file.name + Date.now().toString(),
            name: file.name,
            isFolder: false,
            isPublicFolder: false,
            icon: "",
            requestPath: "",
            modifiedDate: new Date().toISOString(),
            size: file.size,
            mimeType: file.type,
            file: file,
            thumbnail: isImage ? URL.createObjectURL(file) : "",
            fileExternal: "",
        };
    }
}