import { html, svg, CSSResult, TemplateResult, SVGTemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { awcFileUploadProviderStyles } from "../styles/awc-file-upload-provider.style";
import { SelectedFileManager } from "../../managers/SelectedFileManager";
import { ProviderFile } from "../../interfaces/ProviderFile";
import { Provider } from "../Provider";

export const awcFileUploadProviderLocalTag = "awc-file-upload-provider-local";

@customElement(awcFileUploadProviderLocalTag)
export default class AwcFileUploadProviderLocal extends Provider {
  name = "Моё устройство";
  provider = "local";

  get icon(): SVGTemplateResult {
    return svg`
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_51489_9204)">
              <rect width="32" height="32" rx="16" fill="#3761E9"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3897 9.11736C14.242 9.03874 14.077 8.99841 13.9098 9.00005L13.9 9.00014V9.0001H10C9.46295 9.0001 9 9.46305 9 10.0001V21.0001C9 21.5371 9.46295 22.0001 10 22.0001H21.711C21.8756 22.0001 22.0297 21.919 22.123 21.7834L25.7759 16.4701C25.9127 16.271 25.7702 16.0001 25.5287 16.0001H24H15.9553C15.8045 16.0001 15.6617 16.0682 15.5668 16.1854L12.7771 19.6295C12.4294 20.0587 11.7997 20.1248 11.3706 19.7772C10.9414 19.4295 10.8753 18.7998 11.2229 18.3707L14.0127 14.9265C14.4874 14.3405 15.2012 14.0001 15.9553 14.0001H23V12.7501C23 12.3359 22.6642 12.0001 22.25 12.0001H18.07L18.0698 12.0001C17.5732 12 17.0843 11.8766 16.6471 11.641C16.2117 11.4064 15.8411 11.0678 15.5683 10.6553L14.7612 9.45957L14.7547 9.45008L14.7548 9.45005C14.6628 9.31036 14.5373 9.19597 14.3897 9.11736ZM25 14.0001H25.5287C27.3806 14.0001 28.4731 16.0771 27.424 17.6031L23.7711 22.9164C23.3047 23.5948 22.5342 24.0001 21.711 24.0001H10C8.35838 24.0001 7 22.6417 7 21.0001V10.0001C7 8.35848 8.35838 7.0001 10 7.0001H13.8956C14.3955 6.99609 14.8885 7.11707 15.3297 7.35207C15.7708 7.58694 16.1461 7.92822 16.4217 8.3449L17.2288 9.54062L17.2352 9.55006L17.2352 9.5501C17.3262 9.68836 17.4502 9.80186 17.5959 9.8804C17.7416 9.95891 17.9045 10 18.07 10.0001C18.0701 10.0001 18.0701 10.0001 18.0702 10.0001H22.25C23.7688 10.0001 25 11.2313 25 12.7501V14.0001Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_51489_9204">
              <rect width="32" height="32" fill="white"/>
              </clipPath>
              </defs>
          </svg>
      `;
  }

  @state() private selectedFileManager = SelectedFileManager.getInstance();
  
  private _onChange(e: Event): void {
    const target = e.target as HTMLInputElement | null;
    const files = target?.files;

    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => this._processFile(file));

    this.dispatchEvent(new CustomEvent("confirm-selection", { bubbles: true, composed: true }));
  }

  convertToProviderFile(file: File): ProviderFile {
    const isImage = file.type.startsWith("image/");
    
    return {
      id: file.name + Date.now().toString(),
      name: file.name,
      isFolder: false,
      isPublicFolder: false,
      icon: "",
      requestPath: "",
      modifiedDate: new Date().toISOString(),
      size: file.size,
      mimeType: file.type,
      file: file,
      thumbnail: isImage ? URL.createObjectURL(file) : "",
      fileExternal: ""
    };
  }

  private _processFile(file: File): void {
    const providerFile = this.convertToProviderFile(file);
    this.selectedFileManager.addFile(providerFile, 'local', this.icon);

    if (file.type.startsWith("image/")) {
      this._generateImagePreview(file, providerFile);
    }
  }

  private _generateImagePreview(file: File, providerFile: ProviderFile): void {
    const reader = new FileReader();

    reader.onload = () => this.selectedFileManager.addFile(providerFile, this.provider, this.icon);
    reader.readAsDataURL(file);
  }

  protected render(): TemplateResult {
    return html`
      <label tabindex="0" class="awc-file-upload-provider-local--input" for="upload">
        ${this.icon}    
        ${this.name}
      </label>
      <input @change="${this._onChange}" multiple type="file" id="upload" hidden />

      <style>
        ${AwcFileUploadProviderLocal.styles.cssText}
      </style>
    `;
  }

  static styles: CSSResult = awcFileUploadProviderStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    [awcFileUploadProviderLocalTag]: AwcFileUploadProviderLocal;
  }
}
