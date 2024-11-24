import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadHomeStyles } from "./awc-file-upload-home.style";

export const awcFileUploadHomeTag = "awc-file-upload-home";

@customElement(awcFileUploadHomeTag)
export default class AwcFileUploadHome extends LitElement {
    @property() onProviderClick!: (e: Event) => void;
    @property() onProviderSelected!: (e: CustomEvent) => void;

    protected render(): TemplateResult {
        return html`
            <awc-file-upload-provider-local 
                @awc-file-upload-provider-selected=${(e: CustomEvent) => this.onProviderSelected(e)}
            >
            </awc-file-upload-provider-local>
            
            <div class="awc-file-upload-service-providers"
               
                @awc-file-upload-provider-selected=${(e: CustomEvent) => this.onProviderSelected(e)}>
                <slot name="awc-file-upload-provider-yandex-disk"></slot>
            </div>
        `;
    }

    static styles?: CSSResult = awcFileUploadHomeStyles;
}
