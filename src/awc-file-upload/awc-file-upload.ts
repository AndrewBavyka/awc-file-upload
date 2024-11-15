import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { ProviderFile } from "./interfaces/ProviderFile";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { SelectedFileManager } from "./SelectedFileManager";
import { NavigationManager } from "./views/NavigationManager";

export const awcFileUploadTag = "awc-file-upload";

@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
  @property({ type: String }) title = "Перетащите файлы сюда, загружайте или импортируйте из:";

  @state() private _selectedProvider: Provider | null = null;
  @state() private _navigationManager = new NavigationManager();
  @state() private _selectedFileManager = SelectedFileManager.getInstance();

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("message", this._handleAuthMessage.bind(this));
    this.addEventListener("confirm-selection", this._handleConfirmSelection.bind(this));
    this.addEventListener("file-selection-changed", this._updateSelectedFiles);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("message", this._handleAuthMessage.bind(this));
    this.removeEventListener("confirm-selection", this._handleConfirmSelection.bind(this));
  }

  private _updateSelectedFiles() {
    console.log("file-selection-changed")
    this._updateTitle();
    this.requestUpdate();
  }

  private _handleConfirmSelection() {
    this._navigationManager.setView("selected");
    this.title = `${this._selectedFileManager.getFiles().length} файлов выбрано`;

    this.requestUpdate();
  }

  private _handleAuthMessage(event: MessageEvent) {
    const { token } = event.data;

    if (token && this._selectedProvider) {
      this._selectedProvider.setAuthToken(token);
      this._navigationManager.setView("list");
      this._updateTitle();
    }
  }

  private _handleProviderSelected(event: CustomEvent) {
    const provider = event.target as Provider;

    if (!provider) return;

    const hasProviderToken = provider.checkLocalStorage();
    this._navigationManager.setView(hasProviderToken ? "list" : "auth");
    this._selectedProvider = provider;
    this._updateTitle();
  }

  private _updateTitle() {
    const selectedFiles = this._selectedFileManager.getFiles();

    if (selectedFiles.length > 0) {
      this.title = `${selectedFiles.length} файлов выбрано`;
    } else if (this._selectedProvider) {
      this.title = `Импортируйте из ${this._selectedProvider.getProviderInfo().name}`;
    } else {
      this.title = "Перетащите файлы сюда, загружайте или импортируйте из:";
    }

    this.requestUpdate();
  }

  private _moveBetweenScreens() {
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
            .onProviderSelected=${this._handleProviderSelected.bind(this)}
          >
            <awc-file-upload-provider-yandex-disk slot="awc-file-upload-provider-yandex-disk"></awc-file-upload-provider-yandex-disk>
          </awc-file-upload-home>
        `;
    }
  }

  private _clearSelectedFiles() {
    this._selectedFileManager.getFiles().forEach(({ file }: { file: ProviderFile }) => {
      this._selectedFileManager.removeFile(file.id);
    });

    this._updateSelectedFiles()
  }

  private _handleUpload() {
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

  protected render(): TemplateResult {
    return html`
      <awc-modal opened>
        <div class="awc-file-upload-heading" slot="awc-modal-heading">
            ${this._renderHeading()}
            <div class="awc-file-upload-heading__title">${this.title}</div>
        </div>
  
        <div class="awc-file-upload__content">
          ${this._renderCurrentScreen()}
          ${this._renderFooter()}
        </div>
      </awc-modal>
    `;
  }

  private _renderCurrentScreen(): TemplateResult {
    return this._moveBetweenScreens();
  }

  private _renderHeading(): TemplateResult | string {
    if (this._navigationManager.currentView === "main") return "";

    return html`
      <button
        @click=${() => {
        this._navigationManager.setView("main");
        this._selectedProvider = null;
        this._clearSelectedFiles()
      }} 
        class="awc-file-upload-btn__cancel">
          Отменить
        </button>
    `
  }

  private _renderFooter(): TemplateResult | string {
    if (this._navigationManager.currentView === "main" || this._navigationManager.currentView === "auth") {
      return "";
    }

    return html`
      <div class="file-explorer__footer">
        <div class="file-explorer__user-info">
          <button
            @click=${this._handleLogout}
            class="awc-file-upload-btn__logout"
          >
            Выйти
          </button>
        </div>
        <div class="file-explorer__buttons">
          ${this._renderFooterButtons()}
        </div>
      </div>
    `;
  }

  private _renderFooterButtons(): TemplateResult {
    if (this._navigationManager.currentView === "selected") {
      return html`
        <awc-button @click=${this._handleUpload}>
          Загрузить
          ${this._selectedFileManager.getFiles().length > 0
          ? `${this._selectedFileManager.getFiles().length}`
          : ""}
        </awc-button>
      `;
    }

    return html`
      <awc-button
        background="gray"
        size="regular"
        variant="transparent"
        type="button"
        @click=${this._handleCancelSelection}
      >
        Отменить
      </awc-button>
      <awc-button @click=${this._handleConfirmSelection}>
        Выбрать
        ${this._selectedFileManager.getFiles().length > 0
        ? `${this._selectedFileManager.getFiles().length}`
        : ""}
      </awc-button>
    `;
  }

  private _handleLogout(): void {
    this._navigationManager.setView("main");
    this._selectedProvider = null;
    this._clearSelectedFiles();
  }

  private _handleCancelSelection(): void {
    this._clearSelectedFiles();
  }

  static styles?: CSSResult = awcFileUploadStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    [awcFileUploadTag]: AwcFileUpload;
  }
}
