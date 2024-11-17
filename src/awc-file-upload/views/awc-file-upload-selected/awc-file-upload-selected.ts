import { CSSResult, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fileIcons, defaultFileIcon } from "../../components/awc-file-upload-explorer/fileIcons";
import { Provider } from "../../providers/Provider";
import { SelectedFileManager } from "../../SelectedFileManager";
import { awcFileUploadSelectedStyles } from "./awc-file-upload-selected.style";
import { ProviderFile } from "../../interfaces/ProviderFile";

export const awcFileUploadSelectedTag = "awc-file-upload-selected";

@customElement(awcFileUploadSelectedTag)
export default class AwcFileUploadSelected extends LitElement {
  @property({ type: Object }) provider: Provider | null = null;

  private formatFileSize(size: number): string {
    if (size < 1024) return `${size} B`;
    const kb = size / 1024;
    if (kb < 1024) return `${kb.toFixed(2)} KB`;
    const mb = kb / 1024;
    if (mb < 1024) return `${mb.toFixed(2)} MB`;
    const gb = mb / 1024;
    if (gb < 1024) return `${gb.toFixed(2)} GB`;
    const tb = gb / 1024;
    return `${tb.toFixed(2)} TB`;
  }

  private handleDelete(fileId: string) {
    SelectedFileManager.getInstance().removeFile(fileId);
    this.requestUpdate();

    this.dispatchEvent(
      new CustomEvent("file-selection-changed", {
        detail: {
          selectedFiles: new Set(
            SelectedFileManager.getInstance()
              .getFiles()
              .map(({ file }) => file.id)
          ),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderFileIcon(item: ProviderFile): TemplateResult {
    const fileFormat = item.name.split(".").pop()!;
    const icon = fileIcons[fileFormat] || defaultFileIcon;

    return item.thumbnail
      ? html`<img
          src="${item.thumbnail}"
          referrerpolicy="no-referrer"
          alt="${item.name}"
        />`
      : html`<span class="file-explorer__file-type">${icon}</span>`;
  }

  protected render(): TemplateResult {
    const selectedFiles = SelectedFileManager.getInstance().getFiles();

    const clearIcon = svg`
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58209 7.9963L3.2921 11.2937C2.90201 11.6847 2.90273 12.3178 3.29369 12.7079C3.68465 13.098 4.31781 13.0973 4.7079 12.7063L7.9963 9.41052L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.40893 7.99472L12.69 4.70631C13.08 4.31535 13.0793 3.68219 12.6884 3.2921C12.2974 2.90201 11.6642 2.90273 11.2742 3.29369L7.99471 6.5805L4.70711 3.29289Z" fill="#919BB6"/>
            </svg>
        `;

    return html`
      <div class="awc-file-upload-selected">
        ${selectedFiles.map(
      ({ file, providerIcon }) => html`
            <div class="awc-file-upload-selected__file">
              <div class="awc-file-upload-selected__preview">
                 ${this.renderFileIcon(file)}
                <span class="awc-file-upload-selected__provider"
                  >${providerIcon}</span
                >
              </div>
              <div class="awc-file-upload-selected__info">
                <span class="awc-file-upload-selected__name">${file.name}</span>
                <span class="awc-file-upload-selected__size"
                  >${this.formatFileSize(file.size || 0)}</span
                >
              </div>
              <div
                class="awc-file-upload-selected__delete"
                @click="${() => this.handleDelete(file.id)}"
              >
                ${clearIcon}
              </div>
            </div>
          `
    )}
      </div>
    `;
  }

  static styles?: CSSResult = awcFileUploadSelectedStyles;
}
