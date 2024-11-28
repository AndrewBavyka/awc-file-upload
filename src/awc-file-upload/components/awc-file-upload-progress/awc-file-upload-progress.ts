import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadProgressStyles } from "./awc-file-upload-progress.style";

export const awcFileUploadProgress = "awc-file-upload-progress";

@customElement(awcFileUploadProgress)
export default class AwcFileUploadProgress extends LitElement {
    @property({type: Boolean}) isCompact = false;

    @property({type: String}) value = "";
    @property({type: String}) max = "100";

    private _renderCompactProgressBar(): TemplateResult {
        return html`<div class="awc-file-upload-progress__compact">${this.value}</div>`
    }

    private _renderRegularProgressBar(): TemplateResult {
        return html`<awc-progress-bar size="extrasmall" .value="${this.value}" max="${this.max}"></awc-progress-bar>`
    }

    protected render(): TemplateResult {
        return this.isCompact 
        ? this._renderCompactProgressBar()
        : this._renderRegularProgressBar();
    }

    static styles?: CSSResult = awcFileUploadProgressStyles;
}
