import { ReactiveController, ReactiveControllerHost } from "lit";
import { SelectedFileManager } from "./managers/SelectedFileManager";
import { NavigationManager } from "./managers/NavigationManager";
import { UploadManager } from "./managers/UploadManager";
import { Provider } from "./providers/Provider";
import {
    UploadEventBus,
    UploadEvents,
    SelectedFilesEventBus,
    SelectedFilesEvents,
    DropzoneEvents,
    DropzoneEventsBus,
} from "./managers/EventsBus";

export class FileUploadCore implements ReactiveController {
    private _host: ReactiveControllerHost;
    private _selectedFileManager = SelectedFileManager.getInstance();
    private _navigationManager = new NavigationManager();
    private _uploadManager = UploadManager.getInstance();
    private _selectedProvider: Provider | null = null;
    private _isExternalMode = false;

    constructor(host: ReactiveControllerHost) {
        (this._host = host).addController(this);
    }

    get selectedFileManager() {
        return this._selectedFileManager;
    }

    get navigationManager() {
        return this._navigationManager;
    }

    get selectedProvider() {
        return this._selectedProvider;
    }

    set selectedProvider(provider: Provider | null) {
        this._selectedProvider = provider;
        this._host.requestUpdate();
    }

    get isExternalMode() {
        return this._isExternalMode;
    }

    set isExternalMode(value: boolean) {
        this._isExternalMode = value;
        this._host.requestUpdate();
    }

    initialize() {
        this._selectedFileManager.clearFiles();
        this._subscribeToEvents();
    }

    uploadFiles(uploadUrl: string) {
        if (uploadUrl) {
            this._uploadManager.setUploadUrl(uploadUrl);
            this._uploadManager.uploadSelectedFiles().catch(console.error);
        } else {
            console.error("Upload URL is not set.");
        }
    }

    clearFiles() {
        this._selectedFileManager.clearFiles();
        this._host.requestUpdate();
    }

    private _subscribeToEvents() {
        SelectedFilesEventBus.addEventListener(SelectedFilesEvents.FILE_SELECTION_CHANGE, () => {
            this._host.requestUpdate();
        });

        DropzoneEventsBus.addEventListener(DropzoneEvents.FILE_DROPPED, (event: Event) => {
            const customEvent = event as CustomEvent<File[]>;
            customEvent.detail.forEach((file) => {
                const providerFile = this._selectedFileManager.convertToProviderFile(file);
                this._selectedFileManager.addFile(providerFile, "local");
            });
            this._navigationManager.setView("selected");
            this._host.requestUpdate();
        });

        UploadEventBus.addEventListener(UploadEvents.UPLOAD_ERROR, () => {
            this._navigationManager.setView("error");
            this._host.requestUpdate();
        });

        UploadEventBus.addEventListener(UploadEvents.UPLOAD_END, () => {
            this._navigationManager.setView("main");
            this._host.requestUpdate();
        });
    }

    hostConnected(): void { }
    hostDisconnected(): void { }
}