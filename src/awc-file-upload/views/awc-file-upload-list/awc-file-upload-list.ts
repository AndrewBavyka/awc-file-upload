import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Provider } from "../../providers/Provider";

export const awcFileUploadListTag = "awc-file-upload-list"

@customElement(awcFileUploadListTag)
export default class AwcFileUploadList extends LitElement {
    @property({ type: Object }) provider: Provider | null = null;

    protected render(): TemplateResult {
        return html`
            <awc-file-upload-explorer .provider=${this.provider}></awc-file-upload-explorer>
            <awc-attach-view-wrapper>
                
            </awc-attach-view-wrapper>
        `;
    }
}