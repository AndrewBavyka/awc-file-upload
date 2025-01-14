import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, query, queryAssignedElements } from "lit/decorators.js";
import { awcFileUploadHomeStyles } from "./awc-file-upload-home.style";
import { Provider } from "../../providers/Provider";

export const awcFileUploadHomeTag = "awc-file-upload-home";

@customElement(awcFileUploadHomeTag)
export default class AwcFileUploadHome extends LitElement {
    @queryAssignedElements({ slot: "" }) private _providers!: Array<Provider>;
    
    private _onSelectedProviders(event: MouseEvent) {
        const clickedProvider = event.target as Provider;

        this.dispatchEvent(new CustomEvent("awc-file-upload-provider-selected", {
            detail: { provider: clickedProvider },
            bubbles: true,
            composed: false,
        }));

    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-file-upload-service-providers" @click=${this._onSelectedProviders}>
                <awc-file-upload-provider-local></awc-file-upload-provider-local>
                <slot></slot>
            </div>
        `;
    }

    static styles?: CSSResult = awcFileUploadHomeStyles;
}

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-provider-selected': CustomEvent;
    }
}
