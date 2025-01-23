import { CSSResult, html, svg, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AwcFileUploadDropzoneStyles } from "./awc-file-upload-dropzone.style";
import AwcFileUploadProviderLocal from "../awc-file-upload-provider-local";
import { setLastActiveProvider } from "../../../managers/SelectedFilesStore";
import { TextManager } from "../../../managers/TextManager";
import { textManagerContext } from "../../../managers/TextManagerContext";
import { consume } from '@lit/context';

export const awcFileUploadDropzone = "awc-file-upload-dropzone";

@customElement(awcFileUploadDropzone)
export default class AwcFileUploadDropZone extends AwcFileUploadProviderLocal {
    @consume({ context: textManagerContext }) textManager?: TextManager;
    @property({ type: Boolean, reflect: true }) active = false;
   
   

    connectedCallback(): void {
        super.connectedCallback();
        

        this.addEventListener("dragenter", this._onDragEnter);
        this.addEventListener("dragleave", this._onDragLeave);
        this.addEventListener("dragover", this._onDragOver);
        this.addEventListener("drop", this._onDrop);
    }

    private _addModalContentEvent(modalContent: HTMLElement) {
        modalContent.addEventListener("dragenter", () => this.active = true);
        modalContent.addEventListener("dragover", () => this.active = false);
        modalContent.addEventListener("drop", () => this.active = false);
    }

    private _addModalWrapperEvent(modalWrapper: HTMLElement) {
        modalWrapper.addEventListener("dragover", () => this.active = false);
    }

    setModalTarget(target: HTMLElement) {
        if (!target) return;

        const modalContent = target.shadowRoot?.querySelector(".awc-modal-container") as HTMLElement;
        const modalWrapper = target.shadowRoot?.querySelector(".awc-modal")! as HTMLElement;

        this._addModalContentEvent(modalContent);
        this._addModalWrapperEvent(modalWrapper)
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
            setLastActiveProvider(this.provider);

            Array.from(files).forEach((file) => {
                this.processFile(file);
            });
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
                        <p>${this.textManager?.textState.dropzone.header}</p>
                </div>
            </div>
        `;
    }

    static styles: CSSResult = AwcFileUploadDropzoneStyles;
}