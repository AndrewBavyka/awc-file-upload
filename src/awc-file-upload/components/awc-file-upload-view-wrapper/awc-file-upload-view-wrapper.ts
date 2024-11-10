import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { awcFileUploadViewWrapperStyles } from "./awc-file-upload-view-wrapper.style";

export const awcFileUploadViewWrapperTag = "awc-file-upload-view-wrapper";

@customElement(awcFileUploadViewWrapperTag)
export default class AwcFileUploadViewWrapper extends LitElement {
    
    protected render(): TemplateResult {
        return html`
             <slot></slot>
        `;
    }

    static styles?: CSSResult = awcFileUploadViewWrapperStyles;
}
