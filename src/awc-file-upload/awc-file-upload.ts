import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { SelectedFile } from "./interfaces/SelectedFile";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { SelectedFileManager } from "./managers/SelectedFileManager";
import { NavigationManager } from "./managers/NavigationManager";
import { UploadManager } from "./managers/UploadManager";

export const awcFileUploadTag = "awc-file-upload";

@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
  @property({ type: String }) title = "Перетащите файлы, вставьте, выберите файлы или импортируйте из:";

  @state() private _selectedProvider: Provider | null = null;
  @state() private _navigationManager = new NavigationManager();
  @state() private _selectedFileManager = SelectedFileManager.getInstance();
  @state() private _uploadManager: UploadManager | null = null;

  // Временное решение
  @state() private accountName: string | null = null;
  @state() private _isExternalMode: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("message", this._handleAuthMessage.bind(this));

    this.addEventListener("confirm-selection", this._confirmSelection.bind(this));
    this.addEventListener("awc-file-upload-switch-mode", this._toggleUploadMode);

    this._selectedFileManager.addEventListener("file-selection-changed", (e) => this._refreshSelectedFiles(e as CustomEvent<SelectedFile[]>));
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("message", this._handleAuthMessage.bind(this));

    this.removeEventListener("confirm-selection", this._confirmSelection.bind(this));

    this._selectedFileManager.removeEventListener("file-selection-changed", (e) => this._refreshSelectedFiles(e as CustomEvent<SelectedFile[]>));
  }

  private _toggleUploadMode(event: CustomEvent) {
    this._isExternalMode = event.detail.isExternalMode;
    this._selectedFileManager.setExternalMode(this._isExternalMode);
  }

  private _handleAuthMessage(event: MessageEvent) {
    const { token } = event.data;

    if (token && this._selectedProvider) {
      this._selectedProvider.setAuthToken(token);
      this._navigationManager.setView("list");
      this._updateTitle();
      this.requestUpdate();
    }
  }

  private _confirmSelection() {
    this._navigationManager.setView("selected");
    this.title = `${this._selectedFileManager.getFiles().length} файлов выбрано`;
    this.requestUpdate();
  }

  private _clearSelectedFiles() {
    this._selectedFileManager.clearFiles();
  }

  private _cancel() {
    this._navigationManager.setView("main");
    this._clearSelectedFiles();
    this._updateTitle();
    this.requestUpdate();
  }

  private _cancelSelectionFiles() {
    this._clearSelectedFiles()
    this._updateTitle();
  }

  private _logout() {
    if (this._selectedProvider?.checkLocalStorage()) {
      localStorage.removeItem(this._selectedProvider?.getProviderInfo().provider!);
    }

    this._navigationManager.setView("main");
    this._updateTitle();
    // Стоит ли очищать при выходе из аккаунта очистку вообще всех файлов?
    this._clearSelectedFiles();
    this.requestUpdate();
  }

  private async _handleProviderSelection(event: CustomEvent) {
    const provider = event.target as Provider;

    if (!provider) return;

    const hasProviderToken = provider.checkLocalStorage();
    this._navigationManager.setView(hasProviderToken ? "list" : "auth");
    this._selectedProvider = provider;
    this._updateTitle();
  }

  private _uploadFiles() {
    const files = this._selectedFileManager.getFiles();
    console.log("Файлы для загрузки:", files);

    const uploadUrl = "http://localhost:3000/upload";

    if (uploadUrl) {
      this._uploadManager = new UploadManager(uploadUrl);
      this._uploadManager.uploadSelectedFiles().catch((error) => {
        console.error("Ошибка при загрузке файлов:", error);
      });
    } else {
      console.error("Не удалось получить URL для загрузки.");
    }

  }

  private _refreshSelectedFiles(e: CustomEvent<SelectedFile[]>) {
    this._updateTitle();
  }

  private _updateTitle() {
    const selectedFiles = this._selectedFileManager.getFiles();
    const currentView = this._navigationManager.currentView;

    if (selectedFiles.length > 0) {
      this.title = `${selectedFiles.length} файлов выбрано`;
    } else if (currentView !== "main") {
      this.title = `Импортируйте из ${this._selectedProvider?.getProviderInfo().name}`;
    } else {
      this.title = "Перетащите файлы сюда, загружайте или импортируйте из:";
    }
  }

  private _renderView() {
    switch (this._navigationManager.currentView) {
      case "auth":
        return html`<awc-file-upload-auth .provider=${this._selectedProvider}></awc-file-upload-auth>`;
      case "list":
        return html`<awc-file-upload-list .provider=${this._selectedProvider}></awc-file-upload-list>`;
      case "selected":
        return html`<awc-file-upload-selected .isExternalMode=${this._isExternalMode}></awc-file-upload-selected>`;
      case "main":
        return html`
          <awc-file-upload-home
            .onProviderSelected=${this._handleProviderSelection.bind(this)}
          >
            <awc-file-upload-provider-yandex-disk slot="awc-file-upload-provider-yandex-disk"></awc-file-upload-provider-yandex-disk>
          </awc-file-upload-home>
        `;
    }
  }

  protected render(): TemplateResult {
    return html`
      <awc-modal customizable opened>
        <div class="awc-file-upload-heading">
          ${this._renderHeading()}
        </div>
        <div class="awc-file-upload-content">
          ${this._renderView()}

          <div class="awc-file-upload-footer">
          ${this._renderFooter()}
        </div>
        </div>
        
      </awc-modal>
    `;
  }

  private async _loadUserInfo() {
    return this.accountName = await this._selectedProvider?.getUsername()!;
  }

  private _renderHeading(): TemplateResult {
    this._loadUserInfo();

    return html`
      <awc-file-upload-header
        .view=${this._navigationManager.currentView}
        .provider=${this._selectedProvider}
        .title=${this.title}
        .accountName=${this.accountName!}
        @cancel=${this._cancel}
        @add-more-files=${() => { }}
        @logout=${() => {
        this._logout();
        this._clearSelectedFiles();
      }}
      ></awc-file-upload-header>
    `;
  }

  private _renderFooter(): TemplateResult | string {
    const selectedFilesCount = this._selectedFileManager.getFiles().length;

    if (selectedFilesCount === 0 || this._navigationManager.currentView === "main" || this._navigationManager.currentView === "auth") {
      return "";
    }

    return html`
      <awc-file-upload-footer
        .isSelected=${this._navigationManager.currentView === "selected"}
        .fileCount=${selectedFilesCount}
        @cancel-selection=${this._cancelSelectionFiles}
        @confirm-selection=${this._confirmSelection}
        @upload=${this._uploadFiles}
      ></awc-file-upload-footer>
    `;
  }

  static styles?: CSSResult = awcFileUploadStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    [awcFileUploadTag]: AwcFileUpload;
  }
}
