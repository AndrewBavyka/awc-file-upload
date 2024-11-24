import { html, LitElement, TemplateResult, CSSResult, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadFooterStyles } from "./awc-file-upload-footer.style";
import {EventDispatcher, event } from "../../../util/event";

export const awcFileUploadFooterTag = "awc-file-upload-footer";

@customElement(awcFileUploadFooterTag)
export default class AwcFileUploadFooter extends LitElement {
    @property({ type: Boolean }) isSelected = false;
    @property({ type: Number }) fileCount = 0;

    private isSwitcherChecked = false;

    @event("awc-file-upload-switch-mode") private _onChangeMode!: EventDispatcher<{[key: string]: boolean}>;

    private _emitEvent(eventName: string) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));
    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        this._onChangeMode({isExternalMode : this.isSwitcherChecked });
    }

    private _toggleLinkOrFileUploading(e: Event) {
        const target = e.target as HTMLInputElement;

        if (!target) return;

        this.isSwitcherChecked = target.checked;

        this._onChangeMode({isExternalMode : this.isSwitcherChecked });
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

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-switch-mode': CustomEvent;
    }
}
