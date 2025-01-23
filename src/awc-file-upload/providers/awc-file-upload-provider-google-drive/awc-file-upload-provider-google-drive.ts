import { CSSResult, html, TemplateResult, svg, SVGTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadProviderStyles } from "../styles/awc-file-upload-provider.style";
import { Provider } from "../Provider";
import { TextManager } from "../../managers/TextManager";
import { textManagerContext } from "../../managers/TextManagerContext";
import { consume } from "@lit/context";

export const awcFileUploadProviderGoogleDrivekTag = "awc-file-upload-provider-google-drive";

@customElement(awcFileUploadProviderGoogleDrivekTag)
export default class AwcFileUploadProviderGoogleDrive extends Provider {
    @property({ type: String, attribute: "provider-name", reflect: true }) providerName = "";
    @consume({ context: textManagerContext, subscribe: true }) textManager!: TextManager;

    get name(): string {
        return this.textManager?.textState.providers.googleDrive || '';
    }

    provider = "googledrive";

    get icon(): SVGTemplateResult {
        return svg`
             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.663 22.2842L7.633 23.9042C7.835 24.2442 8.125 24.5132 8.465 24.7082L11.93 18.9102H5C5 19.2882 5.1 19.6652 5.302 20.0062L6.663 22.2842Z" fill="#0066DA"/>
                <path d="M16 12.091L12.535 6.29297C12.195 6.48797 11.905 6.75597 11.703 7.09697L5.303 17.815C5.10547 18.1465 5.00081 18.5251 5 18.911H11.93L16 12.091Z" fill="#00AC47"/>
                <path d="M23.5351 24.7082C23.8751 24.5132 24.1651 24.2452 24.3671 23.9042L24.7701 23.2342L26.6981 20.0062C26.8991 19.6662 27.0001 19.2882 27.0001 18.9102H20.0701L21.5441 21.7122L23.5351 24.7082Z" fill="#EA4335"/>
                <path d="M15.9999 12.0901L19.4649 6.29208C19.1189 6.09742 18.7279 5.99675 18.3309 6.00008H13.6689C13.2659 6.00008 12.8749 6.11008 12.5349 6.29208L15.9999 12.0901Z" fill="#00832D"/>
                <path d="M20.0701 18.9102H11.9301L8.46509 24.7082C8.80509 24.9032 9.19509 25.0002 9.59909 25.0002H22.4011C22.8041 25.0002 23.1951 24.8902 23.5351 24.7082L20.0701 18.9102Z" fill="#2684FC"/>
                <path d="M23.497 12.456L20.297 7.09697C20.0944 6.76108 19.8076 6.48394 19.465 6.29297L16 12.091L20.07 18.911H26.987C26.987 18.534 26.887 18.156 26.685 17.815L23.497 12.456Z" fill="#FFBA00"/>
            </svg>
        `;
    }

    protected render(): TemplateResult {
        return html`
            <div tabindex="0" class="awc-file-upload-provider">
                ${this.icon}
                <p class="awc-file-upload-provider__name">${this.name}</p>
            </div>
        `;
    }

    static styles: CSSResult = awcFileUploadProviderStyles;
}
