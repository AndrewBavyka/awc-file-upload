import { LitElement, html, TemplateResult, CSSResult, svg, PropertyValues } from "lit";
import anime from "animejs";
import { customElement, property, state } from "lit/decorators.js";
import { Provider } from "../../providers/Provider";
import { ProviderFile } from "../../interfaces/ProviderFile";
import { RequestOptions } from "../../interfaces/ProviderInfo";
import { awcFileUploadExplorerStyles } from "./awc-file-upload-explorer.style";
import { SelectedFileManager } from "../../managers/SelectedFileManager";
import { fileIcons, defaultFileIcon } from "./fileIcons";
import { formatFileSize } from "../../../util/fileSizeConverter";
import { SelectedFilesEventBus, SelectedFilesEvents } from "../../managers/EventsBus";
import { CacheManager } from "../../managers/CacheManager";

export const awcFileUploadExplorer = "awc-file-upload-explorer";

@customElement(awcFileUploadExplorer)
export default class AwcFileUploadExplorer extends LitElement {
  @property({ type: Object }) provider: Provider | null = null;

  @state() private currentPath = "/";
  @state() private items: ProviderFile[] = [];
  @state() private offset = 0;
  @state() private limit = 20;
  @state() private allItemsLoaded = false;
  @state() private isLoading = false;
  @state() private errorMessage: string | null = null;
  @state() private isGridView = false;

  @state() private _selectedFileManager = SelectedFileManager.getInstance();

  private cacheManager = new CacheManager();
  private abortController: AbortController | null = null;

  private static folderIcon = svg`
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.744 3.0325C13.136 2.3675 12.32 2 11.472 2H3.2C1.44 2 0.016 3.575 0.016 5.5L0 26.5C0 28.425 1.44 30 3.2 30H28.8C30.56 30 32 28.425 32 26.5V9.5C32 7.575 30.56 6 28.8 6H16L13.744 3.0325Z" fill="#FBC332"/>
        </svg>
    `;

  private static publicFolderIcon = svg`
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.744 3.0325C13.136 2.3675 12.32 2 11.472 2H3.2C1.44 2 0.016 3.575 0.016 5.5L0 26.5C0 28.425 1.44 30 3.2 30H28.8C30.56 30 32 28.425 32 26.5V9.5C32 7.575 30.56 6 28.8 6H16L13.744 3.0325Z" fill="#FED34A"/>
            <g opacity="0.5">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM8 19.9987C8 17.7896 9.79086 15.9987 12 15.9987C13.0941 15.9987 14.0856 16.438 14.8078 17.1498C13.2404 18.2335 12.1724 19.9882 12.019 21.9987H9.26316C8.56554 21.9987 8 21.4332 8 20.7355V19.9987Z" fill="#AB4C00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 16C19.8807 16 21 14.8807 21 13.5C21 12.1193 19.8807 11 18.5 11C17.1193 11 16 12.1193 16 13.5C16 14.8807 17.1193 16 18.5 16ZM18.5 17C15.4624 17 13 19.4624 13 22.5V22.6667C13 23.403 13.597 24 14.3333 24H22.6667C23.403 24 24 23.403 24 22.6667V22.5C24 19.4624 21.5376 17 18.5 17Z" fill="#AB4C00"/>
            </g>
        </svg>
    `;

  async connectedCallback() {
    super.connectedCallback();

    this.loadViewMode();
    await this.loadItems(this.currentPath, true);
    SelectedFilesEventBus.addEventListener(SelectedFilesEvents.FILE_SELECTION_CHANGE, () => this.requestUpdate())
  }

  private loadViewMode() {
    const providerName = this.provider?.getProviderInfo().provider || "";
    const savedViewMode = localStorage.getItem(`awc-file-explorer-${providerName}`);

    this.isGridView = savedViewMode === "grid";
  }

  private saveViewMode() {
    const providerName = this.provider?.getProviderInfo().provider || "";

    localStorage.setItem(`awc-file-explorer-${providerName}`, this.isGridView ? "grid" : "list");
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (_changedProperties.has("isGridView")) {
      this.animateViewToggle();
    }
  }

  private animateViewToggle() {
    const container = this.shadowRoot!.querySelector(".file-explorer__body")! as HTMLDivElement;
    const items = Array.from(container.querySelectorAll(".file-explorer__item")) as HTMLElement[];

    anime({
      targets: items,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutExpo',
      delay: anime.stagger(30),
      complete: () => {
        items.forEach(item => {
          item.style.transform = '';
          item.style.opacity = '';
        });
      }
    });
  }

  private toggleView() {
    this.isGridView = !this.isGridView;
    this.animateViewToggle();
    this.saveViewMode();
  }

  private currentRequestId: number = 0;

  private async loadItems(path: string, reset: boolean = false) {
    const requestId = ++this.currentRequestId;

    this.abortPreviousRequest();

    const { signal } = (this.abortController = new AbortController());

    if (reset) {
      const cachedItems = this.cacheManager.getAll(path);
      if (cachedItems.length) {
        this.initializeWithCachedItems(cachedItems);
        return;
      }
      this.resetItems();
    } else if (this.loadCachedItems(path)) {
      return;
    }

    await this.fetchItemsFromProvider(path, signal, requestId);
  }

  private async fetchItemsFromProvider(path: string, signal: AbortSignal, requestId: number) {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      const options: RequestOptions = {
        qs: { offset: this.offset.toString(), limit: this.limit.toString() },
        signal,
      };

      // Делаем запрос только если идентификатор текущего запроса совпадает
      if (requestId !== this.currentRequestId) {
        return;
      }

      const { items: newItems, nextPagePath } = await this.provider!.list(
        path,
        options
      );

      if (requestId !== this.currentRequestId) {
        return;
      }

      this.cacheManager.set(path, this.offset, newItems);
      this.items = [...this.items, ...newItems];
      this.offset += newItems.length;
      this.allItemsLoaded = !nextPagePath;
    } catch (error) {
      console.error("Error loading items:", error);
      this.errorMessage = `Error: ${(error as Error).message}`;
    } finally {
      this.isLoading = false;
      this.abortController = null;
    }
  }

  private abortPreviousRequest() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  private initializeWithCachedItems(cachedItems: ProviderFile[]) {
    this.items = [...cachedItems];
    this.offset = cachedItems.length;
    this.allItemsLoaded = cachedItems.length > 0 && cachedItems.length % this.limit !== 0;
  }

  private resetItems() {
    this.items = [];
    this.offset = 0;
    this.allItemsLoaded = false;
  }

  private loadCachedItems(path: string): boolean {
    const cachedItems = this.cacheManager.get(path, this.offset);
    if (cachedItems.length) {
      this.items = [...this.items, ...cachedItems];
      this.offset += cachedItems.length;
      this.allItemsLoaded = cachedItems.length < this.limit;

      return true;
    }

    return false;
  }

  private handleScroll() {

    if (this.errorMessage) return;

    const scrollContainer = this.shadowRoot?.querySelector(".file-explorer__body");

    if (!scrollContainer) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    if (
      scrollTop + clientHeight
      >= scrollHeight - 5
      && !this.isLoading
      && !this.allItemsLoaded
    ) {
      this.loadItems(this.currentPath);
    }
  }

  private navigateTo(item: ProviderFile) {
    if (item.isFolder) {
      this.currentPath = item.requestPath;
      this.loadItems(this.currentPath, true);
      this._moveScroolTop();
    } else {
      this.toggleFileSelection(item);
    }
  }

  private onBreadcrumbClick(event: CustomEvent) {
    this._moveScroolTop();

    this.currentPath = event.detail.path;
    this.loadItems(decodeURIComponent(this.currentPath), true);
  }

  private getPathArray(): string[] {
    const currentPathDecoded = decodeURIComponent(
      this.currentPath.replace(/\+/g, " ")
    );
    return currentPathDecoded.split("/").filter(Boolean);
  }

  private toggleFileSelection(file: ProviderFile) {
    const updatedSelectedFiles = new Set(this._selectedFileManager.getFiles().map((f) => f.file.id));

    if (updatedSelectedFiles.has(file.id)) {
      this._selectedFileManager.removeFile(file.id);
      updatedSelectedFiles.delete(file.id);
    } else {
      this._selectedFileManager.addFile(
        file,
        this.provider?.getProviderInfo().provider || "Unknown",
        this.provider?.getProviderInfo().icon!
      );

      updatedSelectedFiles.add(file.id);
    }

    this.requestUpdate();
  }

  private _moveScroolTop(): void {
    const scrollContainer = this.shadowRoot?.querySelector(".file-explorer__body");
    scrollContainer?.scrollTo(0, 0);
  }

  private renderListItems(): TemplateResult[] {
    const folderArrowIcon = svg`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 4.29289C6.90237 4.68342 6.90237 5.31658 7.29289 5.70711L11.5858 10L7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289L8.70711 4.29289C8.31658 3.90237 7.68342 3.90237 7.29289 4.29289Z" fill="#919BB6"/>
      </svg>
    `;

    return this.items.map((item) => {
      const isSelected = this._selectedFileManager.getFile(item.id);
      const formattedSize = item.isFolder ? '' : formatFileSize(item.size!, true, 'ru');
      const isDisabled = !this._selectedFileManager.isFileValid(item);

      return html`
        <div
          class="file-explorer__item file-explorer__item--list
          ${item.isFolder ? "folder" : "file"} 
          ${isSelected ? "file-explorer__item--selected" : ""}
          ${isDisabled ? "file-explorer__item--disabled" : ""}"
          @click="${() => this.navigateTo(item)}"
        >
          ${item.isFolder
          ? html`${folderArrowIcon}`
          : html`
              <awc-checkbox
                  tabindex="${isDisabled ? -1 : 0}"
                  ?checked="${!!isSelected}"
                  @change="${() => this.toggleFileSelection(item)}"
                  @click="${(e: Event) => e.stopPropagation()}"
                ></awc-checkbox>
              `}
          <div class="file-explorer__icon ${item.isFolder ? "folder" : "file"}">
            ${item.isFolder
          ? this.renderFolderIcon(item.isPublicFolder)
          : this.renderFileIcon(item)}
          </div>
          <span class="file-explorer__name">${item.name}</span>
          <span class="file-explorer__size">${formattedSize}</span>
        </div>
      `;
    });
  }

  private renderGridItems(): TemplateResult[] {
    return this.items.map((item) => {
      const isSelected = this._selectedFileManager.getFile(item.id);
      const isDisabled = !this._selectedFileManager.isFileValid(item);

      return html`
        <div
          class="file-explorer__item file-explorer__item--grid ${item.isFolder ? "folder" : "file"} 
          ${isSelected ? "file-explorer__item--selected" : ""}
          ${isDisabled ? "file-explorer__item--disabled" : ""}"
          @click="${() => this.navigateTo(item)}"
        >
          <div class="file-explorer__item--card">
            ${item.isFolder
          ? ""
          : html`
                <awc-checkbox
                  ?checked="${isSelected}"
                  @change="${() => this.toggleFileSelection(item)}"
                  @click="${(e: Event) => e.stopPropagation()}"
                ></awc-checkbox>

                `}
            <div
              class="file-explorer__icon ${item.thumbnail
          ? ""
          : item.isFolder
            ? "folder"
            : "file"}"
            >
            ${item.isFolder
          ? this.renderFolderIcon(item.isPublicFolder)
          : this.renderFileIcon(item)}
            </div>
          </div>
          <span class="file-explorer__name">${item.name}</span>
        </div>
      `;
    });
  }

  private renderFolderIcon(isPublicFolder: boolean): TemplateResult {
    return isPublicFolder
      ? AwcFileUploadExplorer.publicFolderIcon
      : AwcFileUploadExplorer.folderIcon;
  }

  private renderFileIcon(item: ProviderFile): TemplateResult {
    const fileFormat = item.name.split(".").pop()!;
    const icon = fileIcons[fileFormat] || defaultFileIcon;

    return item.thumbnail
      ? html`<img
          src="${item.thumbnail}"
          referrerpolicy="no-referrer"
          class="file-explorer__thumbnail"
          alt="${item.name}"
        />`
      : html`<span class="file-explorer__file-type">${icon}</span>`;
  }

  protected render(): TemplateResult {
    const gridIcon = svg`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6H9V9H6L6 6ZM4 6C4 4.89543 4.89543 4 6 4H9C10.1046 4 11 4.89543 11 6V9C11 10.1046 10.1046 11 9 11H6C4.89543 11 4 10.1046 4 9V6ZM15 6H18V9H15V6ZM13 6C13 4.89543 13.8954 4 15 4H18C19.1046 4 20 4.89543 20 6V9C20 10.1046 19.1046 11 18 11H15C13.8954 11 13 10.1046 13 9V6ZM18 18H15V15H18V18ZM15 20C13.8954 20 13 19.1046 13 18V15C13 13.8954 13.8954 13 15 13H18C19.1046 13 20 13.8954 20 15V18C20 19.1046 19.1046 20 18 20H15ZM6 15H9V18H6L6 15ZM4 15C4 13.8954 4.89543 13 6 13H9C10.1046 13 11 13.89543 11 15V18C11 19.1046 10.1046 20 9 20H6C4.89543 20 4 19.1046 4 18V15Z" fill="#919BB6"/>
            </svg>
        `;

    const listIcon = svg`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7ZM10 5C9.44772 5 9 5.4477 9 6C9 6.5523 9.44772 7 10 7H19C19.5523 7 20 6.5523 20 6C20 5.4477 19.5523 5 19 5H10ZM10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H10ZM9 18C9 17.4477 9.44772 17 10 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H10C9.44772 19 9 18.5523 9 18ZM6 12C6 12.5523 5.5523 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.5523 11 6 11.4477 6 12ZM5 19C5.5523 19 6 18.5523 6 18C6 17.4477 5.5523 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.4477 19 5 19Z" fill="#919BB6"/>
            </svg>
        `;

    return html`
      

      <div class="file-explorer__header">
        <awc-file-upload-breadcrumbs
          .path="${this.getPathArray()}"
          .rootName="${this.provider?.getProviderInfo().name || ""}"
          .rootIcon="${this.provider?.getProviderInfo().icon || ""}"
          @breadcrumb-click="${this.onBreadcrumbClick}"
        >
        </awc-file-upload-breadcrumbs>
        
        <awc-icon-button size="32" class="file-explorer__view-toggle" @click="${this.toggleView}">
          ${this.isGridView ? listIcon : gridIcon}
        </awc-icon-button>
      </div>

      <div class="file-explorer__body" @scroll="${this.handleScroll}">
          <div class="file-explorer__content ${this.isGridView ? "file-explorer__content--grid" : "file-explorer__content--list"}">
            ${this.isGridView ? this.renderGridItems() : this.renderListItems()}
            ${this.isLoading ? html`<div class="file-explorer__loading"> <awc-spinner size="l" variant="primary"></awc-spinner></div>` : ""}
            ${this.errorMessage ? html`<awc-file-upload-error></awc-file-upload-error>` : ""}
          </div>
      </div>
    `;
  }

  static styles: CSSResult = awcFileUploadExplorerStyles;
}
