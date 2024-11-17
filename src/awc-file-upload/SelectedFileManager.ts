import { SVGTemplateResult } from "lit";
import { ProviderFile } from "./interfaces/ProviderFile";
import { EventDispatcher, event } from "../util/event";

export class SelectedFileManager {
    private static instance: SelectedFileManager;
    private selectedFiles: Map<string, { file: ProviderFile, provider: string, providerIcon: SVGTemplateResult }> = new Map();

    @event("file-selection-changed") private _fileSelectionChanged!: EventDispatcher<{}>;

    static getInstance() {
        if (!SelectedFileManager.instance) {
            SelectedFileManager.instance = new SelectedFileManager();
        }
        return SelectedFileManager.instance;
    }

    addFile(file: ProviderFile, provider: string, providerIcon: SVGTemplateResult) {
        this.selectedFiles.set(file.id, { file, provider, providerIcon });
    }

    removeFile(fileId: string) {
        this.selectedFiles.delete(fileId);
    }

    getFiles() {
        return Array.from(this.selectedFiles.values());
    }

    clearFiles() {
        this.selectedFiles.clear();
    }
}
