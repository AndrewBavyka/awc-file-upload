import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { FileUploadCore } from "./FileUploadCore";
import { Provider } from "./providers/Provider";

export const awcFileUploadTag = "awc-file-upload";

@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
  @property({ type: String }) title = "Перетащите файлы, вставьте, выберите файлы или импортируйте из:";
  @property({ type: Object, attribute: "extra-data" }) extraData = {};
  @property({ type: Boolean, reflect: true }) dropzone = false;
  @property({ type: String, attribute: "upload-url" }) uploadUrl = "";
  @property({ type: Boolean }) active = false;

  @state() private _fileUploadCore = new FileUploadCore(this);

  connectedCallback() {
    super.connectedCallback();
    this._fileUploadCore.initialize();

    window.addEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("message", this._handleAuthMessage as any);
  }

  private _handleAuthMessage(event: MessageEvent) {
    const { token } = event.data;
    if (token) {
      this._fileUploadCore.selectedProvider?.setAuthToken(token);
      this._fileUploadCore.navigationManager.setView("list");
      this.requestUpdate();
    }
  }

  private _refreshTitle() {
    const selectedFiles = this._fileUploadCore.selectedFileManager.getFiles();
    const currentView = this._fileUploadCore.navigationManager.currentView;

    if (selectedFiles.length > 0) {
      this.title = `${selectedFiles.length} файлов выбрано`;
    } else if (currentView !== "main") {
      this.title = `Импортируйте из ${this._fileUploadCore.selectedProvider?.getProviderInfo().name}`;
    } else {
      this.title = "Перетащите файлы сюда, загружайте или импортируйте из:";
    }
  }

  private _handleProviderSelection(event: CustomEvent) {
    const provider = event.target as Provider;

    if (!provider) return;

    this._fileUploadCore.navigationManager.setSelectedProvider(provider);
    const hasProviderToken = provider.checkLocalStorage();
    this._fileUploadCore.navigationManager.setView(hasProviderToken ? "list" : "auth");
    this._fileUploadCore.selectedProvider = provider;
  }

  private _uploadFiles() {
    if (this.uploadUrl) {
      this._fileUploadCore.uploadFiles(this.uploadUrl);
    } else {
      console.error("Не удалось получить URL для загрузки.");
    }
  }

  private _cancel() {
    this._fileUploadCore.clearFiles();
    this._fileUploadCore.navigationManager.setView("main");
    this._refreshTitle();
    this.requestUpdate();
  }

  protected render(): TemplateResult {
    return html`
      <awc-modal customizable ?opened=${this.active}>
        <div class="awc-file-upload-heading">${this._renderHeading()}</div>
        <div class="awc-file-upload-body">
        <awc-file-upload-view-wrapper>
            ${this._renderBody()}
            ${this._renderFooter()}
          </awc-file-upload-view-wrapper>
        </div>
      </awc-modal>
    `;
  }

  private _renderHeading(): TemplateResult {
    return html`
      <awc-file-upload-header
        .view=${this._fileUploadCore.navigationManager.currentView}
        .provider=${this._fileUploadCore.selectedProvider}
        .title=${this.title}
        @cancel=${this._cancel}
        @upload=${this._uploadFiles}
      ></awc-file-upload-header>
    `;
  }

  private _renderBody(): TemplateResult {
    switch (this._fileUploadCore.navigationManager.currentView) {
      case "auth":
        return html`<awc-file-upload-auth .provider=${this._fileUploadCore.selectedProvider}></awc-file-upload-auth>`;
      case "list":
        return html`<awc-file-upload-list .provider=${this._fileUploadCore.selectedProvider}></awc-file-upload-list>`;
      case "selected":
        return html`<awc-file-upload-selected></awc-file-upload-selected>`;
      case "error":
        return html`<awc-file-upload-error></awc-file-upload-error>`;
      default:
        return html`
          <awc-file-upload-home @awc-file-upload-provider-selected=${this._handleProviderSelection}>
            <slot name="awc-file-upload-provider-yandex-disk"></slot>
            <slot name="awc-file-upload-provider-google-drive"></slot>
          </awc-file-upload-home>
        `;
    }
  }

  private _renderFooter(): TemplateResult | string {
    if (this._fileUploadCore.selectedFileManager.getFiles().length === 0) return "";
    return html`
      <awc-file-upload-footer
        .isSelected=${this._fileUploadCore.navigationManager.currentView === "selected"}
        .fileCount=${this._fileUploadCore.selectedFileManager.getFiles().length}
        @cancel-selection=${this._cancel}
        @confirm-selection=${() => this._fileUploadCore.navigationManager.setView("selected")}
      ></awc-file-upload-footer>
    `;
  }

  static styles?: CSSResult = awcFileUploadStyles;
}
