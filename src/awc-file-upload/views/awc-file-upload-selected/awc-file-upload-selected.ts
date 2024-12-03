import { CSSResult, html, LitElement, PropertyValues, svg, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fileIcons, defaultFileIcon } from "../../components/awc-file-upload-explorer/fileIcons";
import { Provider } from "../../providers/Provider";
import { SelectedFileManager } from "../../managers/SelectedFileManager";
import { awcFileUploadSelectedStyles } from "./awc-file-upload-selected.style";
import { ProviderFile } from "../../interfaces/ProviderFile";
import { EventDispatcher, event } from "../../../util/event";
import { formatFileSize } from "../../../util/fileSizeConverter";
import { UploadManager, UploadEventDetail } from "../../managers/UploadManager";

export const awcFileUploadSelectedTag = "awc-file-upload-selected";

@customElement(awcFileUploadSelectedTag)
export default class AwcFileUploadSelected extends LitElement {
  @property({ type: Object }) provider: Provider | null = null;

  @state() isExternalMode: boolean = false;
  @state() private _selectedFileManager = SelectedFileManager.getInstance();
  @state() private _uploadManager = UploadManager.getInstance();

  @state() _linkType: ProviderFile | null = null;
  @state() private _uploadStatus: { [fileId: string]: { status: string; progress?: number } } = {};


  @event("file-selection-changed") private _onFileSelectionCnanged!: EventDispatcher<{ selectedFiles: string[] }>;

  private _formatFileSize(file: ProviderFile): string {
    if (file.fileSource === "fileExternal") return "0 B";

    return formatFileSize(file.size!, true, 'ru');
  }

  private handleDelete(fileId: string) {
    this._selectedFileManager.removeFile(fileId);
    this._onFileSelectionCnanged({ selectedFiles: this._selectedFileManager.getFiles().map(({ file }) => file.id) });
    this.requestUpdate();
  }

  private toggleFileMode(fileId: string) {
    const selectedFile = this._selectedFileManager.getFile(fileId);
    if (!selectedFile) return;

    const { file } = selectedFile;
    const isExternal = file.fileSource === "fileExternal";

    file.fileSource = isExternal ? "file" : "fileExternal";
    this._linkType = file;
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();

    this._selectedFileManager.addEventListener("file-selection-changed", () => this.requestUpdate());
    this._uploadManager.addEventListener("awc-file-upload-status", (event) => this._handleUploadStatus(event as CustomEvent<UploadEventDetail>));
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._selectedFileManager.removeEventListener("file-selection-changed", () => this.requestUpdate());
    this._uploadManager.removeEventListener("awc-file-upload-status", (event) => this._handleUploadStatus(event as CustomEvent<UploadEventDetail>));
  }

  private _handleUploadStatus(event: CustomEvent) {
    const { file, status, progress } = event.detail;
    this._uploadStatus[file.file.id] = { status, progress };
    this.requestUpdate();
  }

  private renderFileIcon(item: ProviderFile): TemplateResult {
    const fileFormat = item.name.split(".").pop()!;
    const icon = fileIcons[fileFormat] || defaultFileIcon;

    return item.thumbnail
      ? html`<img src="${item.thumbnail}" referrerpolicy="no-referrer" alt="${item.name}" />`
      : html`<span class="awc-file-upload-selected__preview__icon">${icon}</span>`;
  }

  private getFileIcon(file: ProviderFile): TemplateResult {
    const isLinkFile = svg`
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 4.23858 2.23858 2 5 2H6C6.55228 2 7 2.44772 7 3C7 3.55228 6.55228 4 6 4H5C3.34315 4 2 5.34315 2 7V9C2 10.6569 3.34315 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C2.23858 14 0 11.7614 0 9V7ZM4 8C4 7.44772 4.44772 7 5 7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H5C4.44772 9 4 8.55228 4 8ZM11 2C13.7614 2 16 4.23858 16 7V9C16 11.7614 13.7614 14 11 14H10C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12H11C12.6569 12 14 10.6569 14 9V7C14 5.34315 12.6569 4 11 4H10C9.44772 4 9 3.55228 9 3C9 2.44772 9.44772 2 10 2H11Z" fill="#919BB6"/>
        </g>
      </svg>
    `;
    const isUploadFile = svg`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 4.29289C14.0976 4.68342 14.0976 5.31658 13.7071 5.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L7 9.58579L12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289Z" fill="#919BB6"/>
        </g>
      </svg>
    `;

    return this.isExternalMode
      ? (file.fileSource === "fileExternal" ? isLinkFile : isUploadFile)
      : (file.fileSource === "file" ? isUploadFile : isLinkFile);
  }

  protected render(): TemplateResult {
    const clearIcon = svg`
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58209 7.9963L3.2921 11.2937C2.90201 11.6847 2.90273 12.3178 3.29369 12.7079C3.68465 13.098 4.31781 13.0973 4.7079 12.7063L7.9963 9.41052L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.40893 7.99472L12.69 4.70631C13.08 4.31535 13.0793 3.68219 12.6884 3.2921C12.2974 2.90201 11.6642 2.90273 11.2742 3.29369L7.99471 6.5805L4.70711 3.29289Z" fill="#919BB6"/>
      </svg>
    `;

    const successIcon = svg`
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_52628_2439)">
      <rect width="20" height="20" rx="10" fill="#35D3AC"/>
      <path d="M6 10L8.97585 13L15 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_52628_2439">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    `;

    return html`
      <div class="awc-file-upload-selected">
            ${this._selectedFileManager.getFiles().map(({ file, providerIcon, provider }) => {
                const uploadStatus = this._uploadStatus[file.id] || { status: 'pending' };
                const isUploading = uploadStatus.status === 'uploading';
                const isSuccess = uploadStatus.status === 'success';
                const progress = uploadStatus.progress || 0;

                return html`
                    <div class="awc-file-upload-selected__file">
                        <div class="awc-file-upload-selected__preview">
                            ${this.renderFileIcon(file)}
                            <span class="awc-file-upload-selected__provider">
                                ${provider !== "local" ? providerIcon : ""}
                            </span>
                        </div>
                        <div class="awc-file-upload-selected__info">
                            <span title=${file.name} class="awc-file-upload-selected__name">${file.name}</span>
                            <div class="awc-file-upload-selected__description">
                                <span class="awc-file-upload-selected__size">${this._formatFileSize(file)}</span>
                                ${provider !== 'local' ? html`
                                    <awc-icon-button size="20" class="awc-file-upload-selected__type" @click="${() => this.toggleFileMode(file.id)}">
                                        ${this.getFileIcon(file)}
                                    </awc-icon-button>` : ""}
                            </div>
                        </div>

                        ${isUploading 
                                    ? html`<awc-file-upload-progress compact .value=${progress}></awc-file-upload-progress>`
                                    : isSuccess
                                    ? html`<div class="awc-file-upload-selected__success">${successIcon}</div>`
                                    : html`<awc-icon-button size="20" class="awc-file-upload-selected__delete" @click="${() => this.handleDelete(file.id)}">
                            ${clearIcon}
                        </awc-icon-button>`}
                    </div>
                `;
            })}
        </div>
    `;
  }

  static styles?: CSSResult = awcFileUploadSelectedStyles;
}
