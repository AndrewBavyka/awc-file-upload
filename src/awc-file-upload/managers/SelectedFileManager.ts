import { SVGTemplateResult } from "lit";
import { ProviderFile } from "../interfaces/ProviderFile";
import { SelectedFile } from "../interfaces/SelectedFile";

export class SelectedFileManager extends EventTarget {
    private static instance: SelectedFileManager;
    private selectedFiles: Map<string, SelectedFile> = new Map();
    private extraData: Record<string, any> = {};

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

    getExtraData() {
        return this.extraData;
    }

    setExtraData(data: Record<string, any>) {
        this.extraData = { ...this.extraData, ...data };
    }

    addFile(file: ProviderFile, provider: string, providerIcon: SVGTemplateResult) {
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
            const { file } = selectedFile;
            file.fileSource = isExternalMode ? "fileExternal" : "file";
        });

        this.fileSelectionChanged();
    }
}

declare global {
    interface HTMLElementEventMap {
      'file-selection-changed': CustomEvent<SelectedFile[]>;
    }
  }
  