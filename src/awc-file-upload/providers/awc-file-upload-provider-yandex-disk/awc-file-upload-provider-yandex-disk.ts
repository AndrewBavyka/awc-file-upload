import axios from "axios";
import { CSSResult, html, TemplateResult, svg, SVGTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadProviderStyles } from "../styles/awc-file-upload-provider.style";
import { ProviderData } from "../../interfaces/ProviderFile";
import { RequestOptions } from "../../interfaces/ProviderInfo";
import { Provider } from "../Provider";
import { TextManager } from "../../managers/TextManager";
import { textManagerContext } from "../../managers/TextManagerContext";
import { consume } from "@lit/context";

export const awcFileUploadProviderYandexDiskTag = "awc-file-upload-provider-yandex-disk";

@customElement(awcFileUploadProviderYandexDiskTag)
export default class AwcFileUploadProviderYandexDisk extends Provider {
    @property({ type: String, attribute: "auth-url", reflect: true }) authUrl = "";
    @property({ type: String, attribute: "list-url", reflect: true }) listUrl = "";
    @consume({ context: textManagerContext, subscribe: true }) textManager!: TextManager;

    provider = "yandex_disk";

    get name(): string {
        return this.textManager?.textState.providers.yandexDisk || '';
    }

    get icon(): SVGTemplateResult {
        return svg`
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.73077 17.8475C2.71288 19.7947 2.65053 22.7812 3.95291 22.7812C9.26032 23.6857 30.5423 13.5283 28.9105 10.1339C28.1987 8.67051 25.1688 7.77111 21.295 8.03026C20.5082 8.00087 19.7317 7.84117 18.9972 7.55769C18.8498 7.50688 18.7023 7.45606 18.5448 7.41033C16.348 6.73472 13.9787 6.89767 11.8952 7.86765C10.0906 8.71442 8.6124 10.1277 7.68591 11.8921C7.52323 12.2021 7.37072 12.5273 7.21312 12.8474C6.79626 13.7163 6.38448 14.5852 5.84052 15.1848C5.03868 15.9897 4.33089 16.8829 3.73077 17.8475Z" fill="#012B5B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 19.2004V20.381C4 21.3722 4.19 22.3245 4.54 23.199C7.105 24.5109 13.055 24.3457 18.89 21.6929C24.3 19.2198 28.035 15.3329 29 12.5974C29.175 12.1013 29.384 10.8179 28.855 10.1632C27.265 8.19546 20.665 8.71534 13.905 11.7909C9.16 13.9578 5.53 16.8342 4 19.2004Z" fill="#1884FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.61699 19.2004C2.61225 21.1087 2.86362 22.5393 4.15953 23.199C6.73658 24.5109 12.7146 24.3457 18.577 21.6929C24.0124 19.2198 27.765 15.3329 28.7345 12.5974C28.9857 11.8888 29.2369 10.9615 28.5888 10.1632C26.9913 8.19546 20.3603 8.71534 13.5685 11.7909C8.80124 13.9578 5.15418 16.8342 3.61699 19.2004Z" fill="url(#paint0_radial_50280_9103)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5388 20.5456C22.0806 18.9765 24.4911 16.7878 23.9149 15.6585C23.344 14.5292 20.003 14.8889 16.4612 16.458C12.9195 18.0271 10.5089 20.2108 11.0851 21.3401C11.656 22.4694 14.997 22.1146 18.5388 20.5406V20.5456Z" fill="white"/>
                <defs>
                    <radialGradient id="paint0_radial_50280_9103" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.7483 18.5347) rotate(64.4897) scale(7.29019 18.0716)">
                        <stop stop-color="#89C0FF"/>
                        <stop offset="0.61" stop-color="#1884FF"/>
                        <stop offset="1" stop-color="#1884FF"/>
                    </radialGradient>
                </defs>
            </svg>
        `;
    }

    async login(): Promise<void> {
        const accountState = { domain: window.location.origin };
        const url = `${this.authUrl}?state=${encodeURIComponent(JSON.stringify(accountState))}`;
        const newWindow = window.open(url, "_blank");
        if (newWindow) newWindow.focus();
    }

    async list(directory: string | null, options: RequestOptions): Promise<ProviderData> {
        if (!this.authToken) {
            this.authToken = localStorage.getItem(this.provider);
        }

        try {
            const response = await axios.post(this.listUrl, {
                params: {
                    path: directory ?? "/",
                    offset: options.qs?.offset ?? 0,
                    limit: options.qs?.limit ?? 20,
                },
                data: {
                    token: this.authToken,
                },
            });

            if (response.data.username) {
                this.setUsername(response.data.username);
                this.requestUpdate();
            }

            return response.data as ProviderData;
        } catch (error) {
            throw new Error(`Failed to fetch data from ${this.name}: ${error}`);
        }
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
