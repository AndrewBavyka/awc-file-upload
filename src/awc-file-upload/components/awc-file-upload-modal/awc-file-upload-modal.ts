import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

export const awcFileUploadModalTag = "awc-file-upload-modal";

@customElement(awcFileUploadModalTag)
export default class AwcFileUploadModal extends LitElement {



    protected render(): TemplateResult {
        return html`
            <div class="awc-file-upload">
                <div></div>


            </div>
        `
    }
}