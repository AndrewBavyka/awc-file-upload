import { html, LitElement, TemplateResult, CSSResult, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadFooterStyles } from "./awc-file-upload-footer.style";
import { EventDispatcher, event } from "../../../util/event";
import { UploadManager, UploadEventDetail } from "../../managers/UploadManager";
export const awcFileUploadFooterTag = "awc-file-upload-footer";
import { SelectedFileManager } from "../../managers/SelectedFileManager";

@customElement(awcFileUploadFooterTag)
export default class AwcFileUploadFooter extends LitElement {
    @property({ type: Boolean }) isSelected = false;
    @property({ type: Number }) fileCount = 0;
    @state() private _progressMap: Map<string, number> = new Map();
    @state() private _uploadManager = UploadManager.getInstance();
    @state() private _selectedFileManager = SelectedFileManager.getInstance();


    @state() private _isUploadStart = false;
    private isSwitcherChecked = false;

    @event("awc-file-upload-switch-mode") private _onChangeMode!: EventDispatcher<{ [key: string]: boolean }>;

    private _emitEvent(eventName: string) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));
    }

    connectedCallback(): void {
        super.connectedCallback();
        this._uploadManager.addEventListener("awc-file-upload-status", this._handleUploadStatus.bind(this));
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this._uploadManager.removeEventListener("awc-file-upload-status", this._handleUploadStatus.bind(this));
    }

    private _handleUploadStatus(event: CustomEvent<UploadEventDetail>) {
        const { file, status, progress } = event.detail;

        if (status === 'uploading' && progress !== undefined) {
            this._progressMap.set(file.file.name, progress);
        } else if (status === 'success' || status === 'error') {
            this._progressMap.delete(file.file.name);
        }

        this.requestUpdate();
    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        this._onChangeMode({ isExternalMode: this.isSwitcherChecked });
    }

    private _toggleLinkOrFileUploading(e: Event) {
        const target = e.target as HTMLInputElement;

        if (!target) return;

        this.isSwitcherChecked = target.checked;

        this._onChangeMode({ isExternalMode: this.isSwitcherChecked });
    }

    private _triggerUpload() {
        this._isUploadStart = true;
        this._emitEvent("upload");
    }

    protected render(): TemplateResult {
        const uploading = this._progressMap.size > 0;

        return html`
            <div class="awc-file-upload-footer">
                ${uploading
                ? html`
                        <div class="awc-file-upload-footer__progress-list">
                            ${Array.from(this._progressMap.entries()).map(([fileName, progress]) => html`
                                <awc-file-upload-progress .value=${progress}></awc-file-upload-progress>
                                <div class="awc-file-upload-footer__progress-item">
                                    <span class="awc-file-upload-footer__progress-value">Загрузка ${progress.toFixed(0)}%</span>
                                    <span class="awc-file-upload-footer__progress-info">Загружены 1 из ${this._selectedFileManager.getFiles().length}</span>
                                </div>
                            `)}
                        </div>
                    `
                : this.isSelected
                    ? html`
                            <awc-button style="width: 100%" @click=${this._triggerUpload}>
                                Загрузить ${this.fileCount > 0 ? this.fileCount : ""}
                            </awc-button>
                        `
                    : html`
                            <awc-switcher
                                @change=${this._toggleLinkOrFileUploading}
                            >Загружать как ссылки</awc-switcher>
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
