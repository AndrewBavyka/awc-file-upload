import { CSSResult, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { awcFileUploadStyles } from "./awc-file-upload.style";
import { TextManager } from './managers/TextManager';
import { NavigationManager } from "./managers/NavigationManager";
import { UploadManager } from "./managers/UploadManager";
import { UploadEventBus, UploadEvents, EventsBus, DropzoneEvents, DropzoneEventsBus, NavigationEventsBus, NavigationEvents } from "./managers/EventsBus";
import { live } from "lit/directives/live.js";
import { textManagerContext } from "./managers/TextManagerContext";
import { provide } from '@lit/context';
import { localized } from "@lit/localize";
import { setLocale } from "./generated/localization";
import { clearSelectedFiles, getAllSelectedFiles, selectedFilesStore, setExtraDataForComponent, setFileLimits, getExtraDataForComponent, updateStoreState, isUploadLimit, isLocalProviderWithFiles, setLastActiveProvider } from "./managers/SelectedFilesStore";
import AwcFileUploadProviderLocal from "./providers/awc-file-upload-provider-local/awc-file-upload-provider-local";
import AwcFileUploadDropZone from "./providers/awc-file-upload-provider-local/awc-file-upload-dropzone/awc-file-upload-dropzone";
import { allLocales } from "./generated/locale-codes";

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
  @property({ type: String, attribute: "locale" }) locale = "en";

  @state() private _showAlert: boolean = false;
  @state() private _selectedProvider: Provider | null = null;
  @state() private _navigationManager = new NavigationManager();
  @state() private _uploadManager = UploadManager.getInstance();
  @state() private _textManager = new TextManager(this);
  @state() private accountName: string | null = null;

  @query('awc-modal') private _modal!: HTMLElement;

  @provide({ context: textManagerContext }) textManager = new TextManager(this);

  private _isUploadLimit: boolean = false;

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (_changedProperties.has("locale")) {
      if (allLocales.includes(this.locale)) {
        setLocale(this.locale).then(() => {
          this.textManager = new TextManager(this);
          this.requestUpdate();
        });
      }
    }

    if (_changedProperties.has("active") && this.active) {
      if (this._modal) {
        const modalWrapper = this._modal.shadowRoot?.querySelector(".awc-modal")!;
        modalWrapper.addEventListener("click", (e: Event) => this._showAlertIfFilesSelected(e));

        const dropzone = this.shadowRoot?.querySelector("awc-file-upload-dropzone") as AwcFileUploadDropZone;

        if (dropzone && dropzone.setModalTarget) {
          dropzone.setModalTarget(this._modal);
        }
      }
    }

    if (_changedProperties.has('extraData')) {
      setExtraDataForComponent(this.componentId, this.extraData);
    }
  }

  private componentId: string;

  constructor() {
    super();
    this.componentId = `awc-file-upload-${Math.random().toString(36).substr(2, 9)}`;
  }

  async connectedCallback() {
    super.connectedCallback();

    if (this.locale && allLocales.includes(this.locale)) {
      await setLocale(this.locale);
      this.requestUpdate();
    }

    window.addEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));

    NavigationEventsBus.addEventListener(NavigationEvents.NAVIGATION_CHANGE_VIEW, (event) => this._updateTitle());

    UploadEventBus.addEventListener(UploadEvents.UPLOAD_ERROR, () => { this._navigationManager.setView("error"); this.requestUpdate() });
    UploadEventBus.addEventListener(UploadEvents.UPLOAD_END, () => this.close());

    EventsBus.autoDispatchToDOM(this, DropzoneEventsBus, DropzoneEvents.FILE_DROPPED);

    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_START);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_STATUS);
    EventsBus.autoDispatchToDOM(this, UploadEventBus, UploadEvents.UPLOAD_END);

    selectedFilesStore.subscribe(() => {
      this._refreshSelectedFiles();
      this._updateTitle();
      this._isUploadLimit = isUploadLimit();

      if (isLocalProviderWithFiles()) {
        this._navigationManager.setView('selected');
      }
    });

    this._updateTitle();
    setExtraDataForComponent(this.componentId, this.extraData);
    setFileLimits(this.uploadLimit, this.maxFileSize);
  }

  setCustomFileData(files: File[] | FileList) {
    if(!this.active) return;

    const filesArray = Array.isArray(files) ? files : Array.from(files);

    filesArray.forEach(file => {
        const localProvider = new AwcFileUploadProviderLocal();
        localProvider.processFile(file);
    });

    this._navigationManager.setView('selected');
  }

  private _uploadFiles() {
    if (this.uploadUrl) {
        this._uploadManager.setUploadUrl(this.uploadUrl);
        this._uploadManager.setExtraData(getExtraDataForComponent(this.componentId));   
        this._uploadManager.setFiles(getAllSelectedFiles());
        this._uploadManager.startUpload(this.componentId).catch((error) => {
            console.error("Error while downloading files:", error);
        });
    } else {
        console.error("Failed to obtain download URL.");
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("message", (e: MessageEvent) => this._handleAuthMessage(e));
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
    // Мега костыль, но правит баг с тем что если выбрать файлы а потом переключить глобальное состояние то оно не применятся.
    updateStoreState(true);
    this._navigationManager.setView("selected");
    this.requestUpdate();
  }

  private _cancel() {
    const hasFiles = getAllSelectedFiles().length > 0;
    const currentView = this._navigationManager.currentView;
    const hasVisitedMore = this._navigationManager.viewHistory.includes("more");

    if (!hasVisitedMore) {
      this._clearSelectedFiles();
      this._navigationManager.reset();
      return;
    }

    if (currentView === "list") {
      if (hasFiles) {
        this._navigationManager.setView("selected");
      } else {
        this._navigationManager.goBack();
      }
    } else if (currentView === "selected") {
      this._clearSelectedFiles();
      this._navigationManager.reset();
    } else {
      this._clearSelectedFiles();
      this._navigationManager.reset();
    }
  }

  private _backward() {
    this._navigationManager.setView("selected");
  }

  private _clearSelectedFiles(): void {
    clearSelectedFiles();
  }

  private _cancelSelectionFiles() {
    this._clearSelectedFiles();
    this.requestUpdate();
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

    if (getAllSelectedFiles().length) {
      this._showAlert = true;
    } else {
      this._showAlert = false;
    }
  }

  private _handleProviderSelection(event: CustomEvent) {
    const provider = event.detail.provider as Provider;
    if (!provider) return;

    const isLocalProvider = provider.provider === 'local';

    setLastActiveProvider(provider.provider);

    if(isLocalProvider) {
      this._selectedProvider = provider;
    }else{
      this._navigationManager.setSelectedProvider(provider);
      const hasProviderToken = provider.checkLocalStorage();
      this._navigationManager.setView(hasProviderToken ? "list" : "auth");
      this._selectedProvider = provider;
      this.requestUpdate();
    }
  }
 
  private _refreshSelectedFiles() {
    if (getAllSelectedFiles().length === 0 && this._navigationManager.currentView === "selected") {
      this._navigationManager.setView("main");
    }
    this.requestUpdate()
  }

  private _updateTitle() {
    const selectedProvider = this._navigationManager.selectedProvider?.getProviderInfo().name || null;

    this._textManager.updateState({
      navigationView: this._navigationManager.currentView,
      selectedProvider,
      selectedFilesCount: getAllSelectedFiles().length,
    });
  }

  private _getViewTemplate() {
    switch (this._navigationManager.currentView) {
      case "auth":
        return html`<awc-file-upload-auth .provider=${this._selectedProvider}></awc-file-upload-auth>`;
      case "list":
        return html`<awc-file-upload-list  .currentLang=${this.locale} .currentView=${this._navigationManager.currentView} .viewHistory=${this._navigationManager.viewHistory} .provider=${this._selectedProvider}></awc-file-upload-list>`;
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
                <awc-file-upload-add-more .subtitle=${this._textManager.textState.subtitle} @awc-file-upload-provider-selected=${this._handleProviderSelection}>
                  <awc-file-upload-home>
                    <slot name="awc-file-upload-provider-yandex-disk"></slot>
                    <slot name="awc-file-upload-provider-google-drive"></slot>
                  </awc-file-upload-home>
                </awc-file-upload-add-more>
            `;
    }
  }

  // TODO: Сделать дружеское закрытие, сейчас есть проблемы с всплытием события из-за чего срабатывает некорректно
  private _frendlyClosing(e: CustomEvent): void {
    this.active = false;

    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close(): void {
    this.active = false;
    this._navigationManager.setView('main');
    this._clearSelectedFiles();
  }

  open(): void {
    this.active = true;
  }

  protected render(): TemplateResult {
    const hasDragAndDrop = this._navigationManager.currentView !== "list" || "auth";
    // TODO: Из за awc-alert который в shadowDom не может чистить
    if (this._modal) this._modal.removeAttribute('inert');

    return html`
      <awc-modal customizable .opened=${live(this.active)} @awc-modal-close=${(e: CustomEvent) => this.active = false}>
        <div class="awc-file-upload-wrapper">
          <div class="awc-file-upload-heading">
            ${this._renderHeading()}
          </div>
          <div class="awc-file-upload-body">
            <awc-file-upload-view-wrapper .navigationManager=${this._navigationManager}>
              ${this._getViewTemplate()}
            </awc-file-upload-view-wrapper>
          </div>
          ${this._renderFooter()}
        </div>


        ${hasDragAndDrop
        ? html`
            <awc-file-upload-dropzone
              .active=${this.dropzone}
            ></awc-file-upload-dropzone>
          `
        : ""}

        <awc-file-upload-toast></awc-file-upload-toast>
      </awc-modal>

      ${this._showAlert ? html`
          <awc-dialog
              ?opened=${this._showAlert}
              variant="info"
              .heading=${this.textManager?.textState.dialog.heading}
              .description=${this.textManager?.textState.dialog.description}
            >
              <awc-button
                slot="awc-dialog-button"
                background="blue"
                size="large"
                variant="primary"
                type="button"
                @click=${() => { this._showAlert = false, this.close()}}
              >
                ${this.textManager?.textState.dialog.buttons.ok}
              </awc-button>
              <awc-button
                slot="awc-dialog-button"
                background="red"
                size="large"
                variant="transparent"
                type="button"
                @click=${() => { this._showAlert = false, this.open() }}
              >
                ${this.textManager?.textState.dialog.buttons.cancel}
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
        .isUploadLimit=${this._isUploadLimit}
        .provider=${this._selectedProvider}
        .accountName=${this.accountName!}
        .headerText=${this._textManager.textState.header}
        @cancel=${this._cancel}
        @backward=${this._backward}
        @add-more-files=${() => this._addMoreFiles()}
        @logout=${() => {
        this._logout();
        this._clearSelectedFiles();
      }}
      ></awc-file-upload-header>
    `;
  }

  private _renderFooter(): TemplateResult | string {
    if (this._navigationManager.currentView === "main" || this._navigationManager.currentView === "auth" || this._navigationManager.currentView === "more") {
      return "";
    }

    return html`
      <awc-file-upload-footer
        .currentView=${this._navigationManager.currentView}
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
