import { CSSResult, html, LitElement, PropertyValues, svg, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { fileIcons, defaultFileIcon } from "../../awc-file-upload/components/awc-file-upload-explorer/fileIcons";
import { providerIcons } from "../provider-icons";
import { AwcFileDisplayType } from "../awc-file";
import { awcFileItemStyles } from "./awc-file-item.style";
import { formatFileSize } from "../../util/fileSizeConverter";
import { EventDispatcher, event } from "../../util/event";

export const awcFileItemTag = "awc-file-item";

interface FileDetails {
  id: string;
  name: string;
  format: string;
  thumbnail: string;
  localFile: string;
  externalFileLink: string;
  size: number;
  date: string;
  provider: string;
  private: boolean;
}

@customElement(awcFileItemTag)
export default class AwcFileItem extends LitElement {
  @property({ type: String, reflect: true }) view: AwcFileDisplayType =
    "list_block";
  @property({ type: String, reflect: true }) provider = "";
  @property({ type: String }) id = "";
  @property({ type: String }) thumbnail = "";
  @property({ type: String }) name = "";
  @property({ type: String }) date = "";
  @property({ type: String }) format = "";
  @property({ type: String, attribute: "local-file" }) localFile = "";
  @property({ type: String, attribute: "external-file-link" })
  externalFileLink = "";
  @property({ type: Number }) size = 0;
  @property({ type: Boolean, attribute: "private" }) private = false;
  @property({ type: Boolean, attribute: "show-private" }) showPrivate = false;
  @property({ type: Boolean, attribute: "show-download" }) showDownload = true;

  @property({ type: String }) iconPreview = fileIcons;
  @property({ type: String }) iconProvider = providerIcons;

  @property({ type: Boolean }) dropdownActive = false;

  @event("awc-file-download")
  private _onDownloadEvent!: EventDispatcher<FileDetails>;
  @event("awc-file-private")
  private _onPrivateEvent!: EventDispatcher<FileDetails>;
  @event("awc-file-delete")
  private _onDeleteEvent!: EventDispatcher<FileDetails>;

  @state() isHoveredButtons: boolean = false;
  @state() privateModeAvailable: boolean = false;
  @query('awc-dropdown') private activeDropdown!: any;

  private downloadIcon = svg`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C8.55228 0 9 0.447715 9 1V7.58579L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L8.70711 10.7071C8.31658 11.0976 7.68342 11.0976 7.29289 10.7071L3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289C3.68342 4.90237 4.31658 4.90237 4.70711 5.29289L7 7.58579V1C7 0.447715 7.44772 0 8 0ZM1 10C1.55228 10 2 10.4477 2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V11C0 10.4477 0.447715 10 1 10Z" fill="#919BB6"/>
        </svg>
    `;

  private lockIcon = svg`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C6.89543 2 6 2.89543 6 4V6H10V4C10 2.89543 9.10457 2 8 2ZM12 6V4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4V6H3.75C2.23122 6 1 7.23122 1 8.75V13.25C1 14.7688 2.23122 16 3.75 16H12.25C13.7688 16 15 14.7688 15 13.25V8.75C15 7.23122 13.7688 6 12.25 6H12ZM3.75 8C3.33579 8 3 8.33579 3 8.75V13.25C3 13.6642 3.33579 14 3.75 14H12.25C12.6642 14 13 13.6642 13 13.25V8.75C13 8.33579 12.6642 8 12.25 8H11H5H3.75Z" fill="#919BB6"/>
        </svg>
    `;

  private unlockIcon = svg`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25147 2.26099C4.94431 0.875305 6.36059 0 7.90983 0C10.1688 0 12 1.83123 12 4.09017V6H12.25C13.7688 6 15 7.23122 15 8.75V13.25C15 14.7688 13.7688 16 12.25 16H3.75C2.23122 16 1 14.7688 1 13.25V8.75C1 7.23122 2.23122 6 3.75 6H5H10V4.09017C10 2.9358 9.0642 2 7.90983 2C7.11813 2 6.39438 2.4473 6.04033 3.15542L5.89443 3.44721C5.64744 3.94119 5.04676 4.14142 4.55279 3.89443C4.05881 3.64744 3.85858 3.04676 4.10557 2.55279L4.25147 2.26099ZM3.75 8C3.33579 8 3 8.33579 3 8.75V13.25C3 13.6642 3.33579 14 3.75 14H12.25C12.6642 14 13 13.6642 13 13.25V8.75C13 8.33579 12.6642 8 12.25 8H11H5H3.75Z" fill="#919BB6"/>
        </svg>
    `;

  private trashIcon = svg`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3L10 3V2H6V3ZM12 3V2C12 0.89543 11.1046 0 10 0H6C4.89543 0 4 0.89543 4 2V3L2 3C1.44772 3 1 3.44772 1 4C1 4.55226 1.44768 4.99996 1.99993 5C1.99997 5.03289 2.00162 5.06609 2.00496 5.0995L2.91491 14.199C3.01715 15.2214 3.87748 16 4.90499 16H11.095C12.1225 16 12.9828 15.2214 13.0851 14.199L13.995 5.0995C13.9984 5.06609 14 5.03289 14.0001 5C14.5523 4.99996 15 4.55226 15 4C15 3.44772 14.5523 3 14 3L12 3ZM11 5H5H4.00499L4.90499 14L11.095 14L11.995 5L11 5Z" fill="#919BB6"/>
        </svg>
    `;

  private _getFileDetails(): FileDetails {
    return {
      id: this.id,
      name: this.name,
      format: this.format,
      thumbnail: this.thumbnail,
      localFile: this.localFile,
      externalFileLink: this.externalFileLink,
      size: this.size,
      date: this.date,
      provider: this.provider,
      private: this.private,
    };
  }

  private _setIconByFormat(format: string) {
    const icon = fileIcons[format] || defaultFileIcon;
    return icon;
  }

  private _convertingFileSize(size: number): string {
    return formatFileSize(size, true, "ru");
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (_changedProperties.has("private")) {
      this.privateModeAvailable = this.hasAttribute("private");
    }
  }

  private _buildDropdownGridItem(): TemplateResult {
    const dotsIcon = svg`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2498 7C13.2498 7.69036 12.6901 8.25 11.9998 8.25C11.3094 8.25 10.7498 7.69036 10.7498 7C10.7498 6.30964 11.3094 5.75 11.9998 5.75C12.6901 5.75 13.2498 6.30964 13.2498 7ZM13.25 12C13.25 12.6904 12.6903 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6903 10.75 13.25 11.3096 13.25 12ZM11.9998 18.25C12.6901 18.25 13.2498 17.6904 13.2498 17C13.2498 16.3096 12.6901 15.75 11.9998 15.75C11.3094 15.75 10.7498 16.3096 10.7498 17C10.7498 17.6904 11.3094 18.25 11.9998 18.25Z" fill="#919BB6"/>
            </svg>       
        `;

    return html`
    <awc-dropdown ?visible=${this.dropdownActive} class="awc-file-item__dropdown" width="210">
        <awc-dropdown-group ?divider=${this.showDownload && !this.externalFileLink || this.showPrivate}>
          ${this.showDownload && !this.externalFileLink
          ? html`
                <awc-dropdown-item @click=${(e: Event) => this._triggerDownloadEvent(e)}>
                  ${this.downloadIcon} Скачать
                </awc-dropdown-item>
              `
          : ""}
          ${this.showPrivate
          ? html`
                <awc-dropdown-item @click=${this._togglePrivateMode}>
                  ${this._getPrivateModeIcon()} ${this._getPrivateModeText()}
                </awc-dropdown-item>
              `
          : ""}
        </awc-dropdown-group>
        <awc-dropdown-item @click=${this._triggerDeleteEvent}>
          ${this.trashIcon} Удалить
        </awc-dropdown-item>
        <awc-icon-button @click=${this._handleDropdownToggle} slot="awc-dropdown-toggle">
          ${dotsIcon}
        </awc-icon-button>
      </awc-dropdown>
    `;
  }

  private _triggerDownloadEvent(e: Event) {
    e.stopPropagation();

    window.open(this.localFile, "_self", "noopener,noreferrer");
    this._onDownloadEvent(this._getFileDetails());
    this.activeDropdown.close();
  }

  private _triggerDeleteEvent(e: Event) {
    e.stopPropagation();

    this._onDeleteEvent(this._getFileDetails());
    this.activeDropdown.close();
  }

  private _togglePrivateMode(e: Event) {
    e.stopPropagation();

    this.private = !this.private;
    this._onPrivateEvent(this._getFileDetails());
  }

  private _getPrivateModeIcon(): TemplateResult {
    return this.private ? this.lockIcon : this.unlockIcon;
  }

  private _getPrivateModeText(): string {
    return this.private ? "Закрыть доступ" : "Открыть доступ";
  }

  private _openExternalLink(e: Event) {
    if (this.externalFileLink) {
      window.open(this.externalFileLink, "_blank", "noopener,noreferrer");
    }
  }

  private _handleDropdownToggle(e: Event) {
    e.stopPropagation();

    this.dropdownActive = true;
    this.dropdownActive ? this.activeDropdown.open() : this.activeDropdown.close();

    this.dispatchEvent(new CustomEvent('awc-dropdown-toggle', {
      detail: this,
      bubbles: true,
      composed: true
    }));
  }

  private _renderGridItem(): TemplateResult {
    return html`
      <div class="awc-file-item__preview" @click=${this._openExternalLink}>
        ${this.thumbnail
        ? html`<img
              class="awc-file-item__image"
              src="${this.thumbnail}"
              alt=${this.name}
            />`
        : html`<span class="awc-file-item__icon"
              >${this._setIconByFormat(this.format)}</span
            >`}
        ${this._buildDropdownGridItem()}
      </div>
      <div class="awc-file-item__info">
        <p class="awc-file-item__name" title="${this.name}">${this.name}</p>
        <div class="awc-file-item__subinfo">
          <span class="awc-file-item__size"
            >${this._convertingFileSize(this.size)}</span
          >
          <span class="awc-file-item__type">${this.format}</span>
          <span class="awc-file-item__provider"
            >${this.provider ? this.iconProvider[this.provider] : ""}</span
          >
        </div>
      </div>
    `;
  }

  private _renderListItem(): TemplateResult {
    return html`
      <div class="awc-file-item__preview">
        ${this.thumbnail
        ? html`<img
              class="awc-file-item__image"
              src="${this.thumbnail}"
              alt=${this.name}
            />`
        : html`<span class="awc-file-item__icon"
              >${this._setIconByFormat(this.format)}</span
            >`}
      </div>
      <div class="awc-file-item__info">
        <div class="awc-file-item__name" title="${this.name}">
          <p class="awc-file-item__text">${this.name}</p>
          <span class="awc-file-item__provider"
            >${this.provider ? this.iconProvider[this.provider] : ""}</span
          >
        </div>
        <div class="awc-file-item__subinfo">
          <span class="awc-file-item__size"
            >${this._convertingFileSize(this.size)}</span
          >
          <span class="awc-file-item__date">${this.date}</span>

          ${this.isHoveredButtons ? this._buildHoverButtons() : ""}
        </div>
      </div>
    `;
  }

  private _renderListBlockItem(): TemplateResult {
    return html`
      <div class="awc-file-item__preview">
        ${this.thumbnail
        ? html`<img
              class="awc-file-item__image"
              src="${this.thumbnail}"
              alt=${this.name}
            />`
        : html`<span class="awc-file-item__icon"
              >${this._setIconByFormat(this.format)}</span
            >`}
      </div>
      <div class="awc-file-item__info">
        <p class="awc-file-item__name" title="${this.name}">${this.name}</p>
        <div class="awc-file-item__subinfo">
          <span class="awc-file-item__size"
            >${this._convertingFileSize(this.size)}</span
          >
          <span class="awc-file-item__type">${this.format}</span>
          <span class="awc-file-item__provider"
            >${this.provider ? this.iconProvider[this.provider] : ""}</span
          >
        </div>
      </div>

      ${this.isHoveredButtons ? this._buildHoverButtons() : ""}
    `;
  }

  private _buildHoverButtons(): TemplateResult {
    return html`
      <div class="awc-file-item__buttons">
        ${this.showPrivate
        ? html`
              <awc-icon-button @click=${this._togglePrivateMode}>
                ${this._getPrivateModeIcon()}
              </awc-icon-button>
            `
        : ""}
        ${this.showDownload && !this.externalFileLink
        ? html`
              <awc-icon-button @click=${this._triggerDownloadEvent}>
                ${this.downloadIcon}
              </awc-icon-button>
            `
        : ""}
        <awc-icon-button @click=${this._triggerDeleteEvent}>
          ${this.trashIcon}
        </awc-icon-button>
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener(
      "mouseenter",
      (e: MouseEvent) => (this.isHoveredButtons = true)
    );
    this.addEventListener(
      "mouseleave",
      (e: MouseEvent) => (this.isHoveredButtons = false)
    );

    if (
      (this.view === "list" || this.view === "list_block") &&
      this.externalFileLink
    ) {
      this.addEventListener("click", this._openExternalLink);
    }
  }

  disconnectedCalback(): void {
    super.disconnectedCallback();

    this.removeEventListener(
      "mouseenter",
      (e: MouseEvent) => (this.isHoveredButtons = true)
    );
    this.removeEventListener(
      "mouseleave",
      (e: MouseEvent) => (this.isHoveredButtons = false)
    );
  }

  protected render(): TemplateResult {
    this._renderGridItem();
    switch (this.view) {
      case "grid":
        return this._renderGridItem();
      case "list_block":
        return this._renderListBlockItem();
      case "list":
        return this._renderListItem();
      default:
        return html`<div>Invalid view type</div>`;
    }
  }

  static styles?: CSSResult = awcFileItemStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    [awcFileItemTag]: AwcFileItem;
  }
}
