import { SVGTemplateResult } from "lit";
import { ProviderFile } from "./interfaces/ProviderFile";

export interface SelectedFile {
    file: ProviderFile;
    provider: string;
    providerIcon: SVGTemplateResult;
    preview?: string;
}

export class SelectedFileManager extends EventTarget {
    private static instance: SelectedFileManager;
    private selectedFiles: Map<string, SelectedFile> = new Map();

    private _uploadAsLink: boolean = false;

    private fileSelectionChanged() {
        const event = new CustomEvent("file-selection-changed", {
            detail: this.getFiles(),
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    }

    static getInstance() {
        if (!SelectedFileManager.instance) {
            SelectedFileManager.instance = new SelectedFileManager();
        }
        return SelectedFileManager.instance;
    }

    addFile(file: ProviderFile, provider: string, providerIcon: SVGTemplateResult) {
        if (!this.selectedFiles.has(file.id)) {
            this.selectedFiles.set(file.id, { file, provider, providerIcon });
            this.fileSelectionChanged();
        }
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

    isSelected(fileId: string): boolean {
        return this.selectedFiles.has(fileId);
    }

    setUploadAsLink(value: boolean): void {
        console.log(value)
        this._uploadAsLink = value;
    }
      
    getUploadAsLink(): boolean {
        return this._uploadAsLink;
    }

    setFilePreview(file: ProviderFile, preview: string) {
        const selectedFile = this.selectedFiles.get(file.id);
        if (selectedFile) {
            // Assuming you want to store the preview as part of the selected file
            selectedFile.preview = preview;
            this.fileSelectionChanged();
        }
    }
    
}
