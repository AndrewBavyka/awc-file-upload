import { LitElement, html, TemplateResult, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadNotificationStyle } from "./awc-file-upload-notification.style";
import { str, msg, localized } from "@lit/localize";

type NotificationType = 'fileSizeLimit' | 'fileUploadLimit';

@localized()
@customElement("awc-file-upload-notification")
export class AwcFileUploadNotification extends LitElement {
    @property({ type: String }) type: NotificationType = 'fileSizeLimit';
    @property({ type: Number }) duration: number = 3000;

    @property({ type: Number }) maxFilesCount: number = 0;
    @property({ type: Number }) maxFileSize: number = 0;

    private timeoutId?: number;

    protected render(): TemplateResult {
        const notificationText = this.type === 'fileSizeLimit' 
        ? msg(str`Unable to upload to storage - file is going to be ${this.maxFileSize}`) 
        : msg(str`You can upload up to ${this.maxFilesCount} files at once`);


        return html`
        <div class="awc-file-upload-notification">
            ${notificationText}
        </div>`;
    }

    showNotification() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.style.display = 'block';
        requestAnimationFrame(() => {
            this.classList.add('visible');
        });

        this.timeoutId = window.setTimeout(() => {
            this.hideNotification();
        }, this.duration);
    }

    hideNotification() {
        this.classList.remove('visible');
        setTimeout(() => {
            this.style.display = 'none';
        }, 300);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    static styles?: CSSResult = awcFileUploadNotificationStyle;
}