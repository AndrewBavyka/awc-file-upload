import { SelectedFileManager } from "./managers/SelectedFileManager";
import { NavigationManager } from "./managers/NavigationManager";
import { UploadManager } from "./managers/UploadManager";
import { Provider } from "./providers/Provider";

export class FileUploadCore {
    private _selectedFileManager: SelectedFileManager;
    private _navigationManager: NavigationManager;
    private _uploadManager: UploadManager | null = null;
    private _isExternalMode: boolean = false;
    private _selectedProvider: Provider | null = null;

    constructor(
        private _uploadUrl: string,
        private _extraData: any = {},
        private _dropzone:boolean = false,
    ) {
        this._selectedFileManager = SelectedFileManager.getInstance();
        this._navigationManager = new NavigationManager();
        this._selectedFileManager.setExtraData(_extraData);
    }

    // Включение или отключение внешнего режима
    setExternalMode(isExternal: boolean) {
        this._isExternalMode = isExternal;
        this._selectedFileManager.setExternalMode(isExternal);
    }

    // Работа с выбором файлов
    handleFilesDropped(files: File[]) {
        files.forEach(file => {
            const providerFile = this._selectedFileManager.convertToProviderFile(file);
            this._selectedFileManager.addFile(providerFile, "local");
        });

        this._navigationManager.setView("selected");
        this.updateTitle();
    }

    chooseProvider(provider: Provider) {
        if (!provider) return;

        this._selectedProvider = provider;
        this._navigationManager.setSelectedProvider(this._selectedProvider);
        const hasProviderToken = this._selectedProvider.checkLocalStorage();
        this._navigationManager.setView(hasProviderToken ? "list" : "auth");
    }

    // Работа с авторизацией и токенами
    handleAuthMessage(token: string) {
        if (token && this._selectedProvider) {
            this._selectedProvider.setAuthToken(token);
            this._navigationManager.setView("list");
            this.updateTitle();
        }
    }

    // Обновление заголовка
    updateTitle() {
        const selectedFiles = this._selectedFileManager.getFiles();
        const currentView = this._navigationManager.currentView;

        if (selectedFiles.length > 0) {
            return `${selectedFiles.length} файлов выбрано`;
        } else if (currentView !== "main") {
            return `Импортируйте из ${this._selectedProvider?.getProviderInfo().name}`;
        } else {
            return "Перетащите файлы сюда, загружайте или импортируйте из:";
        }
    }

    // Начало загрузки файлов
    startUpload() {
        if (this._uploadUrl) {
            this._uploadManager = new UploadManager(this._uploadUrl);
            this._uploadManager.uploadSelectedFiles().catch((error) => {
                console.error("Ошибка при загрузке файлов:", error);
            });
        } else {
            console.error("Не удалось получить URL для загрузки.");
        }
    }

    // Обновление представления файлов
    refreshSelectedFiles() {
        if (this._selectedFileManager.getFiles().length === 0 && this._navigationManager.currentView === "selected") {
            this._navigationManager.setView("main");
        }
    }

    // Выход
    logout() {
        if (this._selectedProvider?.checkLocalStorage()) {
            localStorage.removeItem(this._selectedProvider?.getProviderInfo().provider!);
        }

        this._navigationManager.setView("main");
        this.updateTitle();
        this._selectedFileManager.clearFiles();
    }
}
