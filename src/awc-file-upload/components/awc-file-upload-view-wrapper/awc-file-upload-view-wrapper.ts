import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { awcFileUploadViewWrapperStyles } from "./awc-file-upload-view-wrapper.style";

export const awcFileUploadViewWrapperTag = "awc-file-upload-view-wrapper";

@customElement(awcFileUploadViewWrapperTag)
export default class AwcFileUploadViewWrapper extends LitElement {
    protected render(): TemplateResult {
        return html`
          <slot @awc-file-upload-change-view=${this._handleChangeView}></slot>
        `;
    }

    private _handleChangeView(event: CustomEvent) {
        console.log("View changed:", event.detail);
    }

    static styles?: CSSResult = awcFileUploadViewWrapperStyles;
}
