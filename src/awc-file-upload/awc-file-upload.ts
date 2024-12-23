import { CSSResult, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { SelectedFileManager } from "./managers/SelectedFileManager";
import { TextManager } from './managers/TextManager';
import { NavigationManager } from "./managers/NavigationManager";
import { UploadManager } from "./managers/UploadManager";
import { UploadEventBus, UploadEvents, EventsBus, SelectedFilesEventBus, SelectedFilesEvents, DropzoneEvents, DropzoneEventsBus, NavigationEventsBus, NavigationEvents } from "./managers/EventsBus";
import { live } from "lit/directives/live.js";
import { textManagerContext } from "./managers/TextManagerContext";
import { selectedFileManagerContext } from "./managers/SelectedFileManagerContext";
import { provide } from '@lit/context';
import { localized } from "@lit/localize";
export const awcFileUploadTag = "awc-file-upload";
@localized()
@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
  @property({ type: String, attribute: "upload-url" }) uploadUrl = "";
  @property({ type: Number, attribute: "upload-limit" }) uploadLimit = 5;
  @property({ type: Number, attribute: "max-file-size" }) maxFileSize = 300000000;
  @property({ type: Boolean, attribute: "is-external-mode" }) isExternalMode: boolean = false;
  @property({ type: Boolean, reflect: true }) dropzone = false;
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Object, attribute: "extra-data" }) extraData = {};

  @state() private _showAlert: boolean = false;

  @state() private _selectedProvider: Provider | null = null;
  @state() private _navigationManager = new NavigationManager();
  @state() private _selectedFileManager = SelectedFileManager.getInstance();
  @state() private _uploadManager = UploadManager.getInstance();
  @state() private _textManager = new TextManager(this);

  // Временное решение
  @state() private accountName: string | null = null;

  @query('awc-modal') private _modal!: HTMLElement;
  @query('awc-dialog') private _dialog!: HTMLElement;

  @provide({ context: textManagerContext }) textManager = new TextManager(this);
  @provide({ context: selectedFileManagerContext }) fileManager = this._selectedFileManager;

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (_changedProperties.has("active") && this.active) {
      if (this._modal) {
        const modalWrapper = this._modal.shadowRoot?.querySelector(".awc-modal")!;
        modalWrapper.addEventListener("click", (e: Event) => this._showAlertIfFilesSelected(e));

        const dropzone = this.shadowRoot?.querySelector("awc-file-upload-dropzone") as any;
        if (dropzone && dropzone.setModalTarget) {
          dropzone.setModalTarget(this._modal);
        }
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));

    this.addEventListener("confirm-selection", this._confirmSelection.bind(this));
    this.addEventListener("awc-file-upload-switch-mode", this._toggleUploadMode);

    this._selectedFileManager.setExtraData(this.extraData);
    this._selectedFileManager.setLimits(this.uploadLimit, this.maxFileSize);

    SelectedFilesEventBus.addEventListener(SelectedFilesEvents.FILE_SELECTION_CHANGE, () => { this._refreshSelectedFiles(); this._updateTitle(); });

    DropzoneEventsBus.addEventListener(DropzoneEvents.FILE_DROPPED, (e) => this._getDataFromDropzone(e as CustomEvent));

    UploadEventBus.addEventListener(UploadEvents.UPLOAD_ERROR, () => { this._navigationManager.setView("error"); this.requestUpdate() });
    UploadEventBus.addEventListener(UploadEvents.UPLOAD_END, () => this.close());

    EventsBus.autoDispatchToDOM(this, DropzoneEventsBus, DropzoneEvents.FILE_DROPPED);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_START);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_STATUS);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_END);

    NavigationEventsBus.addEventListener(NavigationEvents.NAVIGATION_CHANGE_VIEW, (event) => this._updateTitle());

    this._updateTitle();
    this._initialDropzoneEvents();
  }


  private _initialDropzoneEvents() {
    window.addEventListener("dragover", (e: Event) => e.preventDefault());
    window.addEventListener("drop", (e: Event) => e.preventDefault());
    // window.addEventListener("dragleave", () => this.active = false);
  }

  private _getDataFromDropzone(e: CustomEvent<File[]>) {
    const files = e.detail;

    files.forEach(file => {
      const providerFile = this._selectedFileManager.convertToProviderFile(file);
      this._selectedFileManager.addFile(providerFile, "local");
    });

    this._navigationManager.setView("selected");
    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));
    this.removeEventListener("confirm-selection", this._confirmSelection.bind(this));
    UploadEventBus.removeEventListener(SelectedFilesEvents.FILE_SELECTION_CHANGE, () => this._refreshSelectedFiles());
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
      this.requestUpdate();
    }
  }

  private _confirmSelection() {
    this._navigationManager.setView("selected");
    this.requestUpdate();
  }

  private _clearSelectedFiles() {
    this._selectedFileManager.clearFiles();
    this.requestUpdate();
  }

  private _cancel() {
    this._navigationManager.setView("main");
    this._clearSelectedFiles();
  }

  private _cancelSelectionFiles() {
    this._clearSelectedFiles()
  }

  private _logout() {
    if (this._selectedProvider?.checkLocalStorage()) {
      localStorage.removeItem(this._selectedProvider?.getProviderInfo().provider!);
    }

    this._navigationManager.setView("main");
    // Стоит ли очищать при выходе из аккаунта очистку вообще всех файлов?
    this._clearSelectedFiles();
    this.requestUpdate();
  }

  private _addMoreFiles() {
    this._navigationManager.setView('more');

    this._updateTitle();
  }


  private _showAlertIfFilesSelected(e: Event) {
    const targetModalWrapper = (e.target) as HTMLDivElement;
    if (!targetModalWrapper.classList.contains("awc-modal")) return;

    if (this._selectedFileManager.getFiles().length) {
      this._showAlert = true;
    } else {
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
  
    this.requestUpdate()
  }

  private _updateTitle() {
    const selectedProvider = this._navigationManager.selectedProvider?.getProviderInfo().name || null;

    this._textManager.updateState({
      navigationView: this._navigationManager.currentView,
      selectedProvider,
      selectedFilesCount: this._selectedFileManager.getFiles().length,
    });
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
              <awc-file-upload-home @awc-file-upload-provider-selected=${this._handleProviderSelection}>
                  <slot name="awc-file-upload-provider-yandex-disk"></slot>
                  <slot name="awc-file-upload-provider-google-drive"></slot>
              </awc-file-upload-home>
          `;
      case "more":
        return html`
                <awc-file-upload-add-more .subtitle=${this._textManager.textState.subtitle}>
                  <awc-file-upload-home @awc-file-upload-provider-selected=${this._handleProviderSelection}>
                    <slot name="awc-file-upload-provider-yandex-disk"></slot>
                    <slot name="awc-file-upload-provider-google-drive"></slot>
                  </awc-file-upload-home>
                </awc-file-upload-add-more>
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
    if (this._modal) this._modal.removeAttribute('inert');

    return html`
      <awc-modal customizable .opened=${live(this.active)} @awc-modal-close=${() => this.active = false}>
      ${hasDragAndDrop
        ? html`
            <awc-file-upload-dropzone
              .active=${this.dropzone}
            ></awc-file-upload-dropzone>
          `
        : ""}
    
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
                @click=${() => { this._showAlert = false, this.close() }}
              >
                Ок
              </awc-button>
              <awc-button
                slot="awc-dialog-button"
                background="red"
                size="large"
                variant="transparent"
                type="button"
                @click=${() => { this._showAlert = false, this.open() }}
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
        .accountName=${this.accountName!}
        .headerText=${this._textManager.textState.header}
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

    if (this._navigationManager.currentView === "main" || this._navigationManager.currentView === "auth" || this._navigationManager.currentView === "more") {
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
