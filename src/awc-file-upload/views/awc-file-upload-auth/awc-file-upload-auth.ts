import { html, LitElement, TemplateResult, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Provider } from "../../providers/Provider";
import { awcFileUploadAuthStyles } from "./awc-file-upload-auth.style";
import { TextManager } from "../../managers/TextManager";
import { textManagerContext } from "../../managers/TextManagerContext";
import { consume } from "@lit/context";

export const awcFileUploadAuthTag = "awc-file-upload-auth"

@customElement(awcFileUploadAuthTag)
export default class AwcFileUploadAuth extends LitElement {
    @property({ type: Object }) provider: Provider | null = null;

    @consume({ context: textManagerContext }) textManager?: TextManager;

    private _triggerAuth() {
        this.provider?.login();
    }

    protected render(): TemplateResult {
        return html`
            <awc-file-upload-view-wrapper>
                <awc-stack  
                    flex-direction="column"
                    align-items="center"
                    gap="l"
                    justify-content="center">
                    
                    <div class="awc-auth-view__icon">
                    ${this.provider?.icon}
                    </div>
                    <p class="awc-auth-view__description">
                        Пожалуйста, авторизуйтесь в ${this.provider?.getProviderInfo().name}, затем выберите файлы
                    
                    </p>
                    <awc-button @click=${this._triggerAuth}>
                       ${this.textManager?.textState.emptyState.auth.button} ${this.provider?.getProviderInfo().name}
                    </awc-button>
                </awc-stack>
            </awc-file-upload-view-wrapper>
        `;
    }

    static styles?: CSSResult = awcFileUploadAuthStyles;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcFileUploadAuthTag]: AwcFileUploadAuth;
    }
}
