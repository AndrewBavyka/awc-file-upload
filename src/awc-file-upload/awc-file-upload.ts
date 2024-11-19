import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { SelectedFileManager } from "./SelectedFileManager";
import { NavigationManager } from "./views/NavigationManager";

export const awcFileUploadTag = "awc-file-upload";

@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
  @property({ type: String }) title = "Перетащите файлы, вставьте, выберите файлы или импортируйте из:";

  @state() private _selectedProvider: Provider | null = null;
  @state() private _navigationManager = new NavigationManager();
  @state() private _selectedFileManager = SelectedFileManager.getInstance();
  // Временное решение
  @state() private accountName: string | null = null;


  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this._handleAuthMessage.bind(this));
    this.addEventListener("confirm-selection", this._confirmSelection.bind(this));
    this._selectedFileManager.addEventListener("file-selection-changed", this._refreshSelectedFiles.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("message", this._handleAuthMessage.bind(this));
    this.removeEventListener("confirm-selection", this._confirmSelection.bind(this));
    this._selectedFileManager.removeEventListener("file-selection-changed", this._refreshSelectedFiles.bind(this));
  }
  
  private _handleAuthMessage(event: MessageEvent) {
    const { token } = event.data;

    if (token && this._selectedProvider) {
      this._selectedProvider.setAuthToken(token);
      this._navigationManager.setView("list");
      this._updateTitle();
    }
  }

  private _confirmSelection() {
    this._navigationManager.setView("selected");
    this.title = `${this._selectedFileManager.getFiles().length} файлов выбрано`;
    this.requestUpdate();
  }

  private _cancelSelection() {
    this._clearSelectedFiles();
  }

  private async _handleProviderSelection(event: CustomEvent) {
    const provider = event.target as Provider;

    if (!provider) return;

    const hasProviderToken = provider.checkLocalStorage();
    this._navigationManager.setView(hasProviderToken ? "list" : "auth");
    this._selectedProvider = provider;
    this._updateTitle();
    await this._getUserInfo();
  }

  private _uploadFiles() {
    const files = this._selectedFileManager.getFiles();
    console.log("Файлы для загрузки:", files);

    this.dispatchEvent(
      new CustomEvent("upload", {
        detail: { files },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _clearSelectedFiles() {
    this._selectedFileManager.clearFiles();
    this._navigationManager.setView("main");
    this._refreshSelectedFiles();
  }

  private _refreshSelectedFiles() {
    this._updateTitle();
    this.requestUpdate();
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

    this.requestUpdate();
  }

  private _renderView() {
    switch (this._navigationManager.currentView) {
      case "auth":
        return html`<awc-file-upload-auth .provider=${this._selectedProvider}></awc-file-upload-auth>`;
      case "list":
        return html`<awc-file-upload-list .provider=${this._selectedProvider}></awc-file-upload-list>`;
      case "selected":
        return html`<awc-file-upload-selected></awc-file-upload-selected>`;
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
      <awc-modal opened>
        <div class="awc-file-upload-heading" slot="awc-modal-heading">
          ${this._renderHeading()}
        </div>
        <div class="awc-file-upload-content">
          ${this._renderView()}
        </div>
        <div class="awc-file-upload-footer" slot="awc-modal-description">
          ${this._renderFooter()}
        </div>
      </awc-modal>
    `;
  }

  private async _getUserInfo() {
    if (this._selectedProvider) {
      try {
        const userInfo = await this._selectedProvider.getProviderInfo().list("/", {});
        this.accountName = userInfo.username || '';
      } catch (error) {
        this.accountName = ''; 
      }
    }
  }
  
  private _renderHeading(): TemplateResult {
    return html`
      <awc-file-upload-header
        slot="awc-modal-heading"
        .view=${this._navigationManager.currentView}
        .provider=${this._selectedProvider}
        .title=${this.title}
        .accountName=${this.accountName!}
        @cancel-selection=${this._cancelSelection}
        @add-more-files=${() => { }}
        @logout=${() => {
        this._selectedProvider?.logout();
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
        slot="awc-modal-description"
        .isSelected=${this._navigationManager.currentView === "selected"}
        .fileCount=${selectedFilesCount}
        @cancel-selection=${this._cancelSelection}
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
