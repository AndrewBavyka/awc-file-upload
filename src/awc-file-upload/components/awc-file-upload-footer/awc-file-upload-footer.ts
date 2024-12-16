import { html, LitElement, TemplateResult, CSSResult, PropertyValues, svg } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadFooterStyles } from "./awc-file-upload-footer.style";
import { EventDispatcher, event } from "../../../util/event";
import { UploadManager, UploadProgressEventDetail, UploadStatusEventDetail } from "../../managers/UploadManager";
import { SelectedFileManager } from "../../managers/SelectedFileManager";
import { UploadEventBus, UploadEvents } from "../../managers/EventsBus";

export const awcFileUploadFooterTag = "awc-file-upload-footer";

@customElement(awcFileUploadFooterTag)
export default class AwcFileUploadFooter extends LitElement {
    @property({ type: Boolean }) isSelected = false;
    @property({ type: Number }) fileCount = 0;
    @state() private _progressMap: Map<string, number> = new Map();
    @state() private _uploadManager = UploadManager.getInstance();
    @state() private _selectedFileManager = SelectedFileManager.getInstance();

    @state() private _uploadedCount: number = 0;
    @state() private _isUploadStart = false;
    @state() private _isSwitcherChecked:boolean = false;

    @event("awc-file-upload-switch-mode") private _onChangeMode!: EventDispatcher<{ [key: string]: boolean }>;

    private _emitEvent(eventName: string) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));
    }

    connectedCallback(): void {
        super.connectedCallback();

        this._loadSwitcherState();
        UploadEventBus.addEventListener(UploadEvents.UPLOAD_STATUS, (event) => this._handleUploadStatus(event as CustomEvent<UploadStatusEventDetail>));
        UploadEventBus.addEventListener(UploadEvents.UPLOAD_PROGRESS, (event) => this._handleUploadProgress(event as CustomEvent<UploadProgressEventDetail>));
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        UploadEventBus.removeEventListener(UploadEvents.UPLOAD_STATUS, (event) => this._handleUploadStatus(event as CustomEvent<UploadStatusEventDetail>));
        UploadEventBus.removeEventListener(UploadEvents.UPLOAD_PROGRESS, (event) => this._handleUploadProgress(event as CustomEvent<UploadProgressEventDetail>));
    }

    private _handleUploadStatus(event: CustomEvent<UploadStatusEventDetail>) {
        const { file, status } = event.detail;

        if (status === "success") {
            this._progressMap.delete(file.file.name);
            this._uploadedCount++;
        } else if (status === "error") {
            this._progressMap.delete(file.file.name);
        }
        if (this._progressMap.size === 0) {
            this._isUploadStart = false;
        }

        this.requestUpdate();
    }

    private _handleUploadProgress(event: CustomEvent<UploadProgressEventDetail>) {
        const { file, progress } = event.detail;

        if (progress !== undefined) {
            this._progressMap.set(file.file.name, progress);
            this.requestUpdate();
        }
    }

    private _getOverallProgress(): number {
        const totalFiles = this._selectedFileManager.getFiles().length;
        if (totalFiles === 0) return 0;

        const uploadingProgress = Array.from(this._progressMap.values()).reduce((sum, progress) => sum + progress, 0);
        const completedProgress = this._uploadedCount * 100;

        return (uploadingProgress + completedProgress) / totalFiles;
    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        this._onChangeMode({ isExternalMode: this._isSwitcherChecked });
    }

    private _loadSwitcherState() {
        const savedState = localStorage.getItem("isSwitcherChecked");
        this._isSwitcherChecked = savedState === "true";
    }
    
    private _saveSwitcherState() {
        localStorage.setItem("isSwitcherChecked", String(this._isSwitcherChecked));
    }

    private _toggleLinkOrFileUploading(e: Event) {
        const target = e.target as HTMLInputElement;
    
        if (!target) return;
    
        this._isSwitcherChecked = target.checked;
    
        this._saveSwitcherState();
        this._onChangeMode({ isExternalMode: this._isSwitcherChecked });
       
        if(!this._isSwitcherChecked) {
            const files = this._selectedFileManager.getFiles();
            files.forEach(file => {
                const isExternalFileMathesSize = this._selectedFileManager.checkFileSize(file.file);
                if(isExternalFileMathesSize){
                    return this._selectedFileManager.removeFile(file.file.id);
                }
            })
        }
    }

    private _triggerUpload() {
        this._isUploadStart = true;
        this._emitEvent("upload");
    }

    private _cancelAllUploads(): void {
        this._uploadManager.cancelAllUploads();
        this._progressMap.clear();
        this._isUploadStart = false;

        this.requestUpdate();
    }

    protected render(): TemplateResult {
        const cancelIcon = svg`
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#919BB6"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L8.58235 9.99657L6.29183 12.294C5.9019 12.6851 5.90284 13.3182 6.29395 13.7082C6.68506 14.0981 7.31823 14.0972 7.70817 13.706L9.99657 11.4108L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L11.4087 9.99445L13.6902 7.70605C14.0802 7.31494 14.0792 6.68177 13.6881 6.29184C13.297 5.9019 12.6638 5.90284 12.2739 6.29395L9.99445 8.58023L7.70711 6.29289Z" fill="white"/>
            </svg>
        `;

        const uploading = this._progressMap.size > 0;
        const overallProgress = this._getOverallProgress();

        return html`
            <div class="awc-file-upload-footer">
                ${uploading
                ? html` ${Array.from(this._progressMap.entries()).map(([fileName, progress]) => html`
                        <awc-file-upload-progress .value=${overallProgress}></awc-file-upload-progress>
                        <div class="awc-file-upload-footer__progress-item">
                            <span class="awc-file-upload-footer__progress-value">Загрузка ${overallProgress.toFixed(0)}%</span>
                            <span class="awc-file-upload-footer__progress-info">Загружены ${this._uploadedCount} из ${this._selectedFileManager.getFiles().length}</span>
                        </div>
                        <button 
                            tabindex="0" 
                            type="button" 
                            class="awc-file-upload-footer__progress-button" 
                            @click=${this._cancelAllUploads}
                        > 
                            ${cancelIcon}
                        </button>
                        `)}
                    `
                : this.isSelected
                    ? html`
                            <awc-button style="width: 100%" @click=${this._triggerUpload}>
                                Загрузить ${this.fileCount > 0 ? this.fileCount : ""}
                            </awc-button>
                        `
                    : html`
                            <awc-switcher ?checked=${this._isSwitcherChecked} @change=${this._toggleLinkOrFileUploading} >Загружать как ссылки</awc-switcher>
                             ${this._selectedFileManager.getFiles().length ? html`
                                <div class="awc-file-upload-footer__buttons">
                                    <awc-button
                                        background="gray"
                                        size="regular"
                                        variant="transparent"
                                        type="button"
                                        @click=${() => this._emitEvent("cancel-selection")}
                                    >
                                        Отменить
                                    </awc-button>
                                    <awc-button 
                                        @click=${() => this._emitEvent("confirm-selection")}
                                    >
                                        Выбрать ${this.fileCount > 0 ? this.fileCount : ""}
                                    </awc-button>
                                </div>
                             ` : ""}
                    `
            }
            </div>
        `;
    }


    static styles?: CSSResult = awcFileUploadFooterStyles;
}

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-switch-mode': CustomEvent;
    }
}
