import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadRestrictionsStyles } from "./awc-file-upload-restrictions.style";
import { msg, str, localized } from "@lit/localize";
import { formatFileSize } from "../../../util/fileSizeConverter";

@localized()
@customElement('awc-file-upload-restrictions')
export class AwcFileUploadRestrictions extends LitElement {
    @property({ type: Number }) maxFilesCount: number = 0;
    @property({ type: Number }) maxFileSize: number = 0;

    protected render(): TemplateResult {
        return html`<div class="awc-file-upload-restrictions">
            ${msg(str`Up to ${this.maxFilesCount} files, ${formatFileSize(this.maxFileSize, true)}`)}
        </div>`;
    }
    
    static styles: CSSResult = awcFileUploadRestrictionsStyles;
}