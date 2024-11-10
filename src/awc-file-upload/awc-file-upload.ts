import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Provider } from "./providers/Provider";
import { awcFileUploadStyles } from "./awc-file-upload.style";

export const awcFileUploadTag = "awc-file-upload";

enum CurrentView {
    MAIN = 'main',
    AUTH = 'auth',
    FILE_LIST = 'list',
    SELECTED_FILES = 'selected'
}

@customElement(awcFileUploadTag)
export default class AwcFileUpload extends LitElement {
    @property({ type: String }) title = "Перетащите файлы сюда, загружайте или импортируйте из:";
    @state() private _currentView: CurrentView = CurrentView.MAIN;
    @state() private _selectedProvider: Provider | null = null;

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("message", this._handleAuthMessage.bind(this));
        this.addEventListener("confirm-selection", this._handleConfirmSelection.bind(this));
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("message", this._handleAuthMessage.bind(this));
        this.removeEventListener("confirm-selection", this._handleConfirmSelection.bind(this));
    }
    
    private _handleConfirmSelection() {
        this._currentView = CurrentView.SELECTED_FILES;
    }
    

    private _handleAuthMessage(event: MessageEvent) {
        // TODO: Поправить этот момент для безопасности
        // if (event.origin !== "http://localhost:3000") return;
    
        const { token } = event.data;
        if (token && this._selectedProvider) {
            this._selectedProvider.setAuthToken(token);
            this._currentView = CurrentView.FILE_LIST;
            this._updateTitle();
        }
    }
    
    private _handleProviderSelected(event: CustomEvent) {
        const provider = event.target as Provider;
        this._selectedProvider = provider;
        this._updateTitle();
    }

    private _updateTitle() {
        this.title = this._selectedProvider
            ? `Импортируйте из ${this._selectedProvider.getProviderInfo().name}`
            : "Перетащите файлы сюда, загружайте или импортируйте из:";
    }

    private _navigationView(e: Event) {
        const provider = e.target as Provider;
        this._currentView = provider.checkLocalStorage() ? CurrentView.FILE_LIST : CurrentView.AUTH;
        this._updateTitle();
    }

    private _moveBetweenScreens(currentView: CurrentView) {
        switch (currentView) {
            case CurrentView.AUTH:
                return html`<awc-file-upload-auth .provider=${this._selectedProvider}></awc-file-upload-auth>`;
            case CurrentView.FILE_LIST:
                return html`<awc-file-upload-list .provider=${this._selectedProvider}></awc-file-upload-list>`;
            case CurrentView.SELECTED_FILES:
                return html`<awc-file-upload-selected></awc-file-upload-selected>`;
            case CurrentView.MAIN:
                return html`
                    <awc-file-upload-home
                        .onProviderClick=${this._navigationView.bind(this)}
                        .onProviderSelected=${this._handleProviderSelected.bind(this)}
                    >
                        <awc-file-upload-provider-yandex-disk slot="awc-file-upload-provider-yandex-disk"></awc-file-upload-provider-yandex-disk>
                    </awc-file-upload-home>
                `;
        }
    }

    protected render(): TemplateResult {
        return html`
            <awc-modal opened>
                <div class="awc-file-upload-heading" slot="awc-modal-heading">
                    ${this._currentView !== CurrentView.MAIN ? html`
                        <button 
                            @click=${() => {
                                this._currentView = CurrentView.MAIN;
                                this._selectedProvider = null;
                                this._updateTitle();
                            }}
                            class="awc-file-upload-btn__cancel">
                                Отменить
                        </button>
                    ` : ""}
                    
                    <div class="awc-file-upload-heading__title">
                        ${this.title}   
                    </div>
                </div>

                <div class="awc-file-upload__content">
                    ${this._moveBetweenScreens(this._currentView)}
                </div>
           </awc-modal>
        `;
    }


    static styles?: CSSResult = awcFileUploadStyles;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcFileUploadTag]: AwcFileUpload;
    }
}
