import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { awcFileUploadHomeStyles } from "./awc-file-upload-home.style";

export const awcFileUploadHomeTag = "awc-file-upload-home";

@customElement(awcFileUploadHomeTag)
export default class AwcFileUploadHome extends LitElement {
    protected render(): TemplateResult {
        return html`
            <div class="awc-file-upload-service-providers">
                <awc-file-upload-provider-local></awc-file-upload-provider-local>
                <slot></slot>
            </div>
        `;
    }

    static styles?: CSSResult = awcFileUploadHomeStyles;
}
