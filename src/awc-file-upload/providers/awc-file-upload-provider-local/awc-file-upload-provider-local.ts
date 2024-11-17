import { html, LitElement, svg, CSSResult, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { awcFileUploadProviderStyles } from "../styles/awc-file-upload-provider.style";
import { SelectedFileManager } from "../../SelectedFileManager";
import { ProviderFile } from "../../interfaces/ProviderFile";

export const awcFileUploadProviderLocalTag = "awc-file-upload-provider-local";

@customElement(awcFileUploadProviderLocalTag)
export default class AwcFileUploadProviderLocal extends LitElement {
    static styles: CSSResult = awcFileUploadProviderStyles;

    private awcFileUploadLocalIcon = svg`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_49562_424750)">
        <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="#2275D7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9729 21.1522H9.86294L8.75494 16.0652H23.2189L21.9729 21.1522ZM9.93494 11.3702H13.8929L14.7789 12.8142C14.8407 12.913 14.9271 12.994 15.0297 13.0494C15.1322 13.1048 15.2474 13.1326 15.3639 13.1302H21.8699V14.5002H9.93494V11.3702ZM24.8329 14.8102C24.7602 14.7154 24.6671 14.6384 24.5604 14.5847C24.4537 14.531 24.3363 14.5021 24.2169 14.5002H23.2389V12.3742C23.2389 11.9952 22.9639 11.7612 22.5859 11.7612H15.7499L14.8639 10.3162C14.8021 10.2173 14.7157 10.1363 14.6132 10.0809C14.5106 10.0255 14.3955 9.99766 14.2789 10.0002H9.23194C8.85394 10.0002 8.56494 10.2092 8.56494 10.5872V14.5002H7.78294C7.66514 14.5022 7.54927 14.5304 7.44376 14.5828C7.33824 14.6352 7.24573 14.7105 7.17294 14.8032C7.09962 14.8953 7.04768 15.0026 7.02087 15.1172C6.99407 15.2319 6.99307 15.3511 7.01794 15.4662L8.46794 22.0992C8.54594 22.4592 8.86394 22.7172 9.23194 22.7172H22.5859C22.9459 22.7172 23.2599 22.4712 23.3459 22.1222L24.9769 15.4862C25.0052 15.3701 25.0069 15.2491 24.982 15.1322C24.9571 15.0153 24.9061 14.9046 24.8329 14.8102Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_49562_424750">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>`;

    @state() private selectedFileManager = SelectedFileManager.getInstance();
   
    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    convertToProviderFile(file: File): ProviderFile {
        return {
            id: file.name + Date.now().toString(),
            name: file.name,
            isFolder: false,
            publicFolder: "",
            publicFile: "",
            icon: "",
            requestPath: "",
            modifiedDate: new Date().toISOString(),
            size: file.size,
            mimeType: file.type,
            file: URL.createObjectURL(file),
            thumbnail: "",
            linkType: "uploadedFile"
        };
    }


    private _onChange(e: Event) {
        const target = e.target as HTMLInputElement | null;
        const files = target?.files;

        if (files && files[0]) {
            const file = files[0];
            const providerFile = this.convertToProviderFile(file);

            this.selectedFileManager.addFile(providerFile, 'local', this.awcFileUploadLocalIcon);

            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const previewImage = e.target?.result as string;
                    this.selectedFileManager.setFilePreview(providerFile, previewImage);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    protected render(): TemplateResult {
        return html`
      <label tabindex="0" class="awc-file-upload-provider-local--input" for="upload">
        ${this.awcFileUploadLocalIcon}    
        Мое устройство
      </label>
      <input @change="${this._onChange}" type="file" id="upload" hidden />

      <style>
        ${AwcFileUploadProviderLocal.styles.cssText}
      </style>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [awcFileUploadProviderLocalTag]: AwcFileUploadProviderLocal;
    }
}
