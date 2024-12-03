import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadProgressStyles } from "./awc-file-upload-progress.style";

export const awcFileUploadProgress = "awc-file-upload-progress";

@customElement(awcFileUploadProgress)
export default class AwcFileUploadProgress extends LitElement {
    @property({type: Boolean}) compact = false;

    @property({type: Number}) value = 0;
    @property({type: Number}) max = 100;

    private _calculateProgress(): number {
        return Math.min(100, Math.max(0, (this.value / this.max) * 100)); // Ограничение от 0 до 100
    }

     private _renderCompactProgressBar(): TemplateResult {
        const progress = this._calculateProgress();
        const radius = 10;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        return html`
            <svg class="awc-file-upload-progress__compact" width="20" height="20" viewBox="0 0 24 24">
                <circle
                    class="awc-file-upload-progress__background"
                    cx="12"
                    cy="12"
                    r="${radius}"
                    fill="none"
                    stroke-width="2"
                ></circle>
                <circle
                    class="awc-file-upload-progress__foreground"
                    cx="12"
                    cy="12"
                    r="${radius}"
                    fill="none"
                    stroke-width="2"
                    stroke-dasharray="${circumference}"
                    stroke-dashoffset="${offset}"
                ></circle>
            </svg>
        `;
    }

    private _renderRegularProgressBar(): TemplateResult {
        return html`<awc-progress-bar size="extrasmall" value="${this.value}" max="${this.max}"></awc-progress-bar>`
    }

    protected render(): TemplateResult {
        return this.compact 
        ? this._renderCompactProgressBar()
        : this._renderRegularProgressBar();
    }

    static styles?: CSSResult = awcFileUploadProgressStyles;
}
