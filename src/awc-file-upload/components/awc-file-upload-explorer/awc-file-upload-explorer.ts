import { LitElement, html, TemplateResult, CSSResult, svg } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Provider } from "../../providers/Provider";
import { ProviderFile } from "../../interfaces/ProviderFile";
import { RequestOptions } from "../../interfaces/ProviderInfo";
import { awcFileUploadExplorerStyles } from "./awc-file-upload-explorer.style";
import { SelectedFileManager } from "../../SelectedFileManager";

export const awcFileUploadExplorer = "awc-file-upload-explorer";

@customElement(awcFileUploadExplorer)
export default class AwcFileUploadExplorer extends LitElement {
    @property({ type: Object }) provider: Provider | null = null;

    @state() private currentPath: string = '/';
    @state() private items: ProviderFile[] = [];
    @state() private selectedFiles: Set<string> = new Set();
    @state() private offset: number = 0;
    @state() private limit: number = 20;
    @state() private allItemsLoaded: boolean = false;
    @state() private isLoading: boolean = false;
    @state() private errorMessage: string | null = null;
    @state() private isGridView: boolean = false;
    @state() private fileExplorerViewKey: string = "";

    private static folderIcon = svg`
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.744 3.0325C13.136 2.3675 12.32 2 11.472 2H3.2C1.44 2 0.016 3.575 0.016 5.5L0 26.5C0 28.425 1.44 30 3.2 30H28.8C30.56 30 32 28.425 32 26.5V9.5C32 7.575 30.56 6 28.8 6H16L13.744 3.0325Z" fill="#FBC332"/>
        </svg>
    `;

    async connectedCallback() {
        super.connectedCallback();
        this.loadViewMode();

        await this.loadItems(this.currentPath, true);
    }

    private loadViewMode() {
        this.fileExplorerViewKey = `awc-file-explorer-${this.provider?.getProviderInfo().provider}`;
        const savedViewMode = localStorage.getItem(this.fileExplorerViewKey);
        this.isGridView = savedViewMode === 'grid';
    }

    private saveViewMode() {
        localStorage.setItem(this.fileExplorerViewKey, this.isGridView ? 'grid' : 'list');
    }

    private async loadItems(path: string, reset: boolean = false) {
        if (!this.provider || this.isLoading) return;

        this.isLoading = true;
        this.errorMessage = null;

        try {
            if (reset) {
                this.items = [];
                this.offset = 0;
                this.allItemsLoaded = false;
            }

            const options: RequestOptions = {
                qs: { offset: this.offset.toString(), limit: this.limit.toString() },
            };

            const { items: newItems, username: username, nextPagePath: nextPagePath } = await this.provider.list(path, options);

            console.log(newItems)


            this.items = [...this.items, ...newItems];
            this.offset += this.limit;

            if (!nextPagePath) {
                this.allItemsLoaded = true;
            }
        } catch (error) {
            console.error("Error loading items:", error);
            this.errorMessage = `Error: ${(error as Error).message}`;
        } finally {
            this.isLoading = false;
        }
    }

    private handleScroll() {
        const scrollContainer = this.shadowRoot?.querySelector('.file-explorer__content');

        if (!scrollContainer) return;

        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        // Временно не работает c (&& !this.isLoading && !this.allItemsLoaded)
        if (scrollTop + clientHeight >= scrollHeight - 5 && !this.isLoading && !this.allItemsLoaded) {
            this.loadItems(this.currentPath);
        }
    }

    private navigateTo(item: ProviderFile) {
        if (item.isFolder) {
            this.currentPath = item.requestPath;
            this.loadItems(this.currentPath, true);
        } else {
            this.toggleFileSelection(item);
        }
    }


    private toggleFileSelection(file: ProviderFile) {
        const manager = SelectedFileManager.getInstance();
        const updatedSelectedFiles = new Set(this.selectedFiles);
    
        if (updatedSelectedFiles.has(file.id)) {
            manager.removeFile(file.id);
            updatedSelectedFiles.delete(file.id);
        } else {
            manager.addFile(file, this.provider?.getProviderInfo().provider || 'Unknown', this.provider?.getProviderInfo().icon!);
            updatedSelectedFiles.add(file.id);
        }
    
        this.selectedFiles = updatedSelectedFiles;
        
        this.dispatchEvent(new CustomEvent("file-selection-changed", {
            detail: { selectedFiles: updatedSelectedFiles },
            bubbles: true,
            composed: true
        }));
        
        this.requestUpdate();
    }

    private toggleView() {
        this.isGridView = !this.isGridView;
        this.saveViewMode();
    }

    private onBreadcrumbClick(event: CustomEvent) {
        this.currentPath = event.detail.path;
        this.loadItems(this.currentPath, true);
    }

    private getPathArray(): string[] {
        return this.currentPath.split('/').filter(Boolean);
    }

    private renderListItems(): TemplateResult[] {
        return this.items.map(item => html`
           <div class="file-explorer__item file-explorer__item--list ${item.isFolder ? 'folder' : 'file'} ${this.selectedFiles.has(item.id) ? 'file-explorer__item--selected' : ''}"
                @click="${() => this.navigateTo(item)}">
                <awc-checkbox 
                    ?checked="${this.selectedFiles.has(item.id)}"
                    @click="${(e: Event) => { e.stopPropagation(); this.toggleFileSelection(item); }}">
                </awc-checkbox>
                <div class="file-explorer__icon ${item.isFolder ? 'folder' : 'file'}">
                    ${item.isFolder ? AwcFileUploadExplorer.folderIcon : this.renderFileIcon(item)}
                </div>
                <span class="file-explorer__name">${item.name}</span>
            </div>
        `);
    }

    private renderGridItems(): TemplateResult[] {
        return this.items.map(item => html`
            <div class="file-explorer__item file-explorer__item--grid ${item.isFolder ? 'folder' : 'file'} ${this.selectedFiles.has(item.id) ? 'file-explorer__item--selected' : ''}"
                 @click="${() => this.navigateTo(item)}">
                <div class="file-explorer__item--card">
                    <awc-checkbox 
                        ?checked="${this.selectedFiles.has(item.id)}" 
                        @click="${(e: Event) => { e.stopPropagation(); this.toggleFileSelection(item); }}">
                    </awc-checkbox>
                    <div class="file-explorer__icon ${item.thumbnail ? "" : item.isFolder ? 'folder' : 'file'}">
                        ${item.isFolder ? AwcFileUploadExplorer.folderIcon : this.renderFileIcon(item)}
                    </div>
                </div>
                <span class="file-explorer__name">${item.name}</span>
            </div>
        `);
    }


    private renderFileIcon(item: ProviderFile): TemplateResult {
        const getFileFormat = item.name.split('.').pop();

        const zipIcon = svg`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="3" fill="#3761E9"/>
                <path d="M10.0972 18.306H13.2052V20H7.67524V18.796L10.6292 14.694H7.81524V13H13.0652V14.204L10.0972 18.306ZM15.4261 12.16C15.1274 12.16 14.8661 12.0527 14.6421 11.838C14.4274 11.614 14.3201 11.3527 14.3201 11.054C14.3201 10.7553 14.4274 10.494 14.6421 10.27C14.8661 10.046 15.1274 9.934 15.4261 9.934C15.7341 9.934 15.9954 10.046 16.2101 10.27C16.4341 10.494 16.5461 10.7553 16.5461 11.054C16.5461 11.3527 16.4341 11.614 16.2101 11.838C15.9954 12.0527 15.7341 12.16 15.4261 12.16ZM14.5301 20V13H16.3361V20H14.5301ZM22.0631 12.804C23.0058 12.804 23.8084 13.1633 24.4711 13.882C25.1431 14.5913 25.4791 15.464 25.4791 16.5C25.4791 17.536 25.1431 18.4133 24.4711 19.132C23.8084 19.8413 23.0058 20.196 22.0631 20.196C21.0831 20.196 20.3271 19.8553 19.7951 19.174V22.8H17.9891V13H19.7951V13.826C20.3271 13.1447 21.0831 12.804 22.0631 12.804ZM20.3411 17.928C20.7051 18.292 21.1671 18.474 21.7271 18.474C22.2871 18.474 22.7491 18.292 23.1131 17.928C23.4864 17.5547 23.6731 17.0787 23.6731 16.5C23.6731 15.9213 23.4864 15.45 23.1131 15.086C22.7491 14.7127 22.2871 14.526 21.7271 14.526C21.1671 14.526 20.7051 14.7127 20.3411 15.086C19.9771 15.45 19.7951 15.9213 19.7951 16.5C19.7951 17.0787 19.9771 17.5547 20.3411 17.928Z" fill="white"/>
            </svg>
        `;

        return item.thumbnail
            ? html`<img src="${item.thumbnail}"  referrerpolicy="no-referrer" class="file-explorer__thumbnail" alt="${item.name}">`
            : html`<span class="file-explorer__file-type">${getFileFormat === "zip" ? zipIcon : ""}</span>`;
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
                    .rootName="${this.provider?.getProviderInfo().name || ''}"
                    .rootIcon="${this.provider?.getProviderInfo().icon || ''}"
                    @breadcrumb-click="${this.onBreadcrumbClick}">
                </awc-file-upload-breadcrumbs>

                <div class="file-explorer__view-toggle" @click="${this.toggleView}">
                    ${this.isGridView ? listIcon : gridIcon}
                </div>
            </div>
            
            <div class="file-explorer__content ${this.isGridView ? 'file-explorer__content--grid' : 'file-explorer__content--list'}" @scroll="${this.handleScroll}">
                ${this.isGridView ? this.renderGridItems() : this.renderListItems()}
                ${this.isLoading ? html`<div class="file-explorer__loading"><awc-spinner size="l" variant="primary"></awc-spinner></div>` : ''}
                ${this.errorMessage ? html`<div class="file-explorer__error">${this.errorMessage}</div>` : ''}
            </div>
        `;
    }

    static styles: CSSResult = awcFileUploadExplorerStyles;
}
