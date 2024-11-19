import { html, LitElement, TemplateResult, CSSResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadFooterStyles } from "./awc-file-upload-footer.style";
import { SelectedFileManager } from "../../SelectedFileManager";

export const awcFileUploadFooterTag = "awc-file-upload-footer";

@customElement(awcFileUploadFooterTag)
export default class AwcFileUploadFooter extends LitElement {
    @property({ type: Boolean }) isSelected = false;
    @property({ type: Number }) fileCount = 0;

    @state() private isSwitcherChecked = false;

    private _emitEvent(eventName: string) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));
    }

    private _toggleLinkOrFileUploading(e: Event) {
        const target = (e.target as any);

        if (!target) return;

        this.isSwitcherChecked = target.checked;

        SelectedFileManager.getInstance().setUploadAsLink(this.isSwitcherChecked);
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-file-upload-footer">
                ${this.isSelected
                ? html`
                        <awc-button  style="width: 100%"  @click=${() => this._emitEvent("upload")}>
                            Загрузить ${this.fileCount > 0 ? this.fileCount : ""}
                        </awc-button>
                    `
                : html`
                         <awc-switcher
                            @change=${this._toggleLinkOrFileUploading}
                         > Загружать как ссылки</awc-switcher>
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
