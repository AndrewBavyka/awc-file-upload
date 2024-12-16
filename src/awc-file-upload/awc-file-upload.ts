import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { SelectedFileManager } from "./managers/SelectedFileManager";
import { NavigationManager } from "./managers/NavigationManager";
import { UploadManager } from "./managers/UploadManager";
import { UploadEventBus, UploadEvents, EventsBus, SelectedFilesEventBus, SelectedFilesEvents, DropzoneEvents, DropzoneEventsBus } from "./managers/EventsBus";
import { live } from "lit/directives/live.js";

export const awcFileUploadTag = "awc-file-upload";

@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
  @property({ type: String }) title = "Перетащите файлы, вставьте, выберите файлы или импортируйте из:";
  @property({ type: Object, attribute: "extra-data" }) extraData = {};
  @property({ type: Boolean, reflect: true }) dropzone = false;
  @property({ type: String, attribute: "upload-url" }) uploadUrl = "";

  @property({ type: Number, attribute: "upload-limit" }) uploadLimit = 5;
  @property({ type: Number, attribute: "max-file-size" }) maxFileSize = 300000000;

  @property({ type: Boolean, reflect: true }) active = false;
  @property({type: Boolean, attribute: "is-external-mode"}) isExternalMode: boolean = false;


  @state() private _selectedProvider: Provider | null = null;
  @state() private _navigationManager = new NavigationManager();
  @state() private _selectedFileManager = SelectedFileManager.getInstance();
  @state() private _uploadManager = UploadManager.getInstance();

  // Временное решение
  @state() private accountName: string | null = null;

  @query('awc-modal') private _modal!: HTMLElement;
  @query('awc-dialog') private _dialog!: HTMLElement;


  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));

    this.addEventListener("confirm-selection", this._confirmSelection.bind(this));
    this.addEventListener("awc-file-upload-switch-mode", this._toggleUploadMode);

    this._selectedFileManager.setExtraData(this.extraData);
    this._selectedFileManager.setLimits(this.uploadLimit, this.maxFileSize);

    SelectedFilesEventBus.addEventListener(SelectedFilesEvents.FILE_SELECTION_CHANGE, () => this._refreshSelectedFiles());
    DropzoneEventsBus.addEventListener(DropzoneEvents.FILE_DROPPED, (e) => this._handleFilesDropped(e as CustomEvent));

    UploadEventBus.addEventListener(UploadEvents.UPLOAD_ERROR, () => { this._navigationManager.setView("error"); this.requestUpdate() });
    UploadEventBus.addEventListener(UploadEvents.UPLOAD_END, () => this.close());

    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_START);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_STATUS);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_END);

    this._initialDropzoneEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));
    this.removeEventListener("confirm-selection", this._confirmSelection.bind(this));
    UploadEventBus.removeEventListener(SelectedFilesEvents.FILE_SELECTION_CHANGE, () => this._refreshSelectedFiles());
  }

  // Dropzone
  // TODO: Перенести часть логики в компонент awc-file-upload-dropzone.
  private _handleFilesDropped(event: CustomEvent<File[]>) {
    const files = event.detail;
    const manager = SelectedFileManager.getInstance();

    files.forEach(file => {
      const providerFile = manager.convertToProviderFile(file);
      manager.addFile(providerFile, "local");
    });

    this._navigationManager.setView("selected");
    this._updateTitle();
    this.requestUpdate();
  }

  private _initialDropzoneEvents() {
    document.addEventListener("DOMContentLoaded", () => {
      const modalContent = this._modal.shadowRoot?.querySelector(".awc-modal-container")!;
      const modalWrapper = this._modal.shadowRoot?.querySelector(".awc-modal")!;

      modalWrapper.addEventListener("click", (e: Event) => this._showAlertIfFilesSelected(e))

      modalContent.addEventListener("dragenter", () => this.dropzone = true);
      modalContent.addEventListener("dragover", () => this.dropzone = false);
      modalWrapper.addEventListener("dragover", () => this.dropzone = false);

      modalContent.addEventListener("drop", () => this.dropzone = false);

      window.addEventListener("dragover", (e: Event) => e.preventDefault());
      window.addEventListener("drop", (e: Event) => e.preventDefault());
      window.addEventListener("dragleave", () => this.dropzone = false);
    });
  }

  private _toggleUploadMode(event: CustomEvent) {
    this.isExternalMode = event.detail.isExternalMode;
    this._selectedFileManager.setExternalMode(this.isExternalMode);
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

  private _addMoreFiles() {
    this._navigationManager.setView('main');
    this._updateTitle();
    this.requestUpdate();
  }

  @state() private _showAlert:boolean = false;

  private _showAlertIfFilesSelected(e: Event) {
    const targetModalWrapper = (e.target) as HTMLDivElement;
    if(!targetModalWrapper.classList.contains("awc-modal")) return;

    if (this._selectedFileManager.getFiles().length) {
      this._showAlert = true;
    }else{
      this._showAlert = false;
    }
  }

  private _handleProviderSelection(event: CustomEvent) {
    const provider = event.target as Provider;

    if (!provider) return;

    this._navigationManager.setSelectedProvider(provider);
    const hasProviderToken = provider.checkLocalStorage();
    this._navigationManager.setView(hasProviderToken ? "list" : "auth");
    this._selectedProvider = provider;
    this._updateTitle();
    this.requestUpdate();
  }

  private _uploadFiles() {
    if (this.uploadUrl) {
      this._uploadManager.setUploadUrl(this.uploadUrl);
      this._uploadManager.uploadSelectedFiles().catch((error) => {
        console.error("Ошибка при загрузке файлов:", error);
      });
    } else {
      console.error("Не удалось получить URL для загрузки.");
    }
  }

  private _refreshSelectedFiles() {
    if (this._selectedFileManager.getFiles().length === 0 && this._navigationManager.currentView === "selected") {
      this._navigationManager.setView("main");
    }

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

  private _getViewTemplate() {
    switch (this._navigationManager.currentView) {
      case "auth":
        return html`<awc-file-upload-auth .provider=${this._selectedProvider}></awc-file-upload-auth>`;
      case "list":
        return html`<awc-file-upload-list .provider=${this._selectedProvider}></awc-file-upload-list>`;
      case "selected":
        return html`<awc-file-upload-selected></awc-file-upload-selected>`;
      case "error":
        return html`<awc-file-upload-error></awc-file-upload-error>`;
      case "main":
        return html`
              <awc-file-upload-home @awc-file-upload-provider-selected=${this._handleProviderSelection}
              >
                  <slot name="awc-file-upload-provider-yandex-disk"></slot>
                  <slot name="awc-file-upload-provider-google-drive"></slot>
              </awc-file-upload-home>
          `;
    }
  }

  close(): void {
    this.active = false;
    this._navigationManager.setView('main');
    this._selectedFileManager.clearFiles();
  }

  open(): void {
    this.active = true;
  }

  protected render(): TemplateResult {
    const hasDragAndDrop = this._navigationManager.currentView !== "list" || "auth";
    // TODO: Из за awc-alert который в shadowDom не может чистить
    if(this._modal)  this._modal.removeAttribute('inert');
   
    return html`
      <awc-modal customizable ?opened=${live(this.active)}>
        ${hasDragAndDrop ? html`<awc-file-upload-dropzone ?active=${this.dropzone}></awc-file-upload-dropzone>` : ''}
    
        <div class="awc-file-upload-heading">
          ${this._renderHeading()}
        </div>
        <div class="awc-file-upload-body">
          <awc-file-upload-view-wrapper .navigationManager=${this._navigationManager}>
            ${this._getViewTemplate()}
            ${this._renderFooter()}
          </awc-file-upload-view-wrapper>
        </div>
      </awc-modal>

      ${this._showAlert ? html`
          <awc-dialog
              ?opened=${this._showAlert}
              @awc-dialog-close=${() => console.log('close')}
              variant="info"
              heading="Есть несохранённые данные"
              description="Внесенные изменения не сохранятся"
            >
              <awc-button
                slot="awc-dialog-button"
                background="blue"
                size="large"
                variant="primary"
                type="button"
                 @click=${() => {this._showAlert = false, this.close()}}
              >
                Ок
              </awc-button>
              <awc-button
                slot="awc-dialog-button"
                background="red"
                size="large"
                variant="transparent"
                type="button"
                @click=${() => {this._showAlert = false, this.open()}}
              >
                Отменить
              </awc-button>
            </awc-dialog>
      ` : ""}
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
        @add-more-files=${() => this._addMoreFiles()}
        @logout=${() => {
        this._logout();
        this._clearSelectedFiles();
      }}
      ></awc-file-upload-header>
    `;
  }

  private _renderFooter(): TemplateResult | string {
    const selectedFilesCount = this._selectedFileManager.getFiles().length;

    if (this._navigationManager.currentView === "main" || this._navigationManager.currentView === "auth") {
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
