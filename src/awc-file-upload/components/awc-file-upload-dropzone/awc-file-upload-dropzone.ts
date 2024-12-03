import { CSSResult, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { AwcFileUploadDropzoneStyles } from "./awc-file-upload-dropzone.style";
import { EventDispatcher, event } from "../../../util/event";

export const awcFileUploadDropzone = "awc-file-upload-dropzone";

@customElement(awcFileUploadDropzone)
export default class AwcFileUploadDropZone extends LitElement {
    @property({ type: String }) title = "Перетащите файлы сюда";
    @property({ type: Boolean, reflect: true }) active = false;

    @event('awc-file-upload-dropped') private _onFileDropped!:EventDispatcher<File[]>

    connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener("dragenter", this._onDragEnter);
        this.addEventListener("dragleave", this._onDragLeave);
        this.addEventListener("dragover", this._onDragOver);
        this.addEventListener("drop", this._onDrop);
    }

    private _onDragEnter(event: DragEvent): void {
        event.preventDefault();
        this.active = true;
    }

    private _onDragLeave(event: DragEvent): void {
        event.preventDefault();
        this.active = false;    
    }

    private _onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
    }

    private _onDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.active = false;

        const files = event.dataTransfer?.files as FileList;
        if (files && files.length > 0) {
            const fileList = Array.from(files);
            this._onFileDropped(fileList);
        }
    }

    protected render(): TemplateResult {
        const uploadIcon = svg`
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87868 32.1213C8.05025 33.2929 9.94975 33.2929 11.1213 32.1213L24 19.2426L36.8787 32.1213C38.0503 33.2929 39.9497 33.2929 41.1213 32.1213C42.2929 30.9497 42.2929 29.0503 41.1213 27.8787L26.1213 12.8787C24.9497 11.7071 23.0503 11.7071 21.8787 12.8787L6.87868 27.8787C5.70711 29.0503 5.70711 30.9497 6.87868 32.1213Z" fill="#919BB6"/>
            </svg>
        `;

        return html`
            <div class="awc-file-upload-dropzone">
                <div class="awc-file-upload-dropzone__info">
                        ${uploadIcon}
                        <p>${this.title}</p>
                </div>
            </div>
        `;
    }

    static styles?: CSSResult = AwcFileUploadDropzoneStyles;
}

declare global {
    interface HTMLElementEventMap {
      'awc-file-upload-dropped': CustomEvent<File[]>;
    }
  }
  