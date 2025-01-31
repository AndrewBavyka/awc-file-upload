import { CSSResult, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { awcFileUploadHeaderStyles } from "./awc-file-upload-header.style";
import { CurrentView } from "../../managers/NavigationManager";
import { TextManager } from "../../managers/TextManager";
import { textManagerContext } from "../../managers/TextManagerContext";

export const awcFileUploadHeaderTag = "awc-file-upload-header";

@customElement(awcFileUploadHeaderTag)
export default class AwcFileUploadHeader extends LitElement {
    @property({ type: String }) view: CurrentView = "main";
    @property({ type: String }) accountName = "";
    @property({ type: String }) headerText = "";

    @consume({ context: textManagerContext, subscribe: true }) 
    textManager?: TextManager;

    @state() isUploadLimit: boolean = false;

    private _handleCancel() {
        this.dispatchEvent(new CustomEvent("cancel", { bubbles: true, composed: true }));
    }

    private _handleBackward() {
        this.dispatchEvent(new CustomEvent("backward", { bubbles: true, composed: true }));
    }

    private _handleAddMore() {
        this.dispatchEvent(new CustomEvent("add-more-files", { bubbles: true, composed: true }));
    }

    private _handleLogout() {
        this.dispatchEvent(new CustomEvent("logout", { bubbles: true, composed: true }));
    }

    private get _accountIconSvg() {
        return svg`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.57765 15.4438 4.00131 13.7464 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="#919BB6"/>
            </svg>
        `;
    }

    private _renderCurrentHeader(): TemplateResult {
        switch (this.view) {
            case "main":
                return html`
                <div class="awc-file-upload-heading__title awc-file-upload-heading__title--main">${this.headerText}</div>
            `;
            case "selected":
                return html`
                <button class="awc-file-upload-btn__cancel" @click=${this._handleCancel}>${this.textManager?.textState.buttonTexts.cancel}</button>
                <div class="awc-file-upload-heading__title">${this.headerText}</div>
                ${this.isUploadLimit ? html` <button class="awc-file-upload-btn__add-more" @click=${this._handleAddMore}>${this.textManager?.textState.buttonTexts.addMoreFiles}</button>` : ""}
            `;
            case "list":
                return html`
                    <button class="awc-file-upload-btn__cancel" @click=${this._handleCancel}>${this.textManager?.textState.buttonTexts.cancel}</button>
                    <div class="awc-file-upload-heading__title">${this.headerText}</div>
                    <awc-dropdown position="bottom-end" width="180">
                        <awc-dropdown-group .label=${this.accountName}>
                            <awc-dropdown-item @click=${this._handleLogout}>${this.textManager?.textState.buttonTexts.logout}</awc-dropdown-item>
                        </awc-dropdown-group>
                        <awc-icon-button size="32" slot="awc-dropdown-toggle" class="awc-file-upload-heading__account">
                            ${this._accountIconSvg}
                        </awc-icon-button>
                    </awc-dropdown>
            `;
            case "more":
                return html`
                   <button class="awc-file-upload-btn__cancel" @click=${this._handleBackward}>${this.textManager?.textState.buttonTexts.backward}</button>
                   <div class="awc-file-upload-heading__title awc-file-upload-heading__title--auth">${this.headerText}</div>
            `;
            default:
                return html`
                    <button class="awc-file-upload-btn__cancel" @click=${this._handleCancel}>${this.textManager?.textState.buttonTexts.cancel}</button>
                    <div class="awc-file-upload-heading__title awc-file-upload-heading__title--auth">${this.headerText}</div>
            `;
        }
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-file-upload-header awc-file-upload-header--${this.view}">
                ${this._renderCurrentHeader()}
            </div>
        `;
    }

    static styles?: CSSResult = awcFileUploadHeaderStyles;
}
