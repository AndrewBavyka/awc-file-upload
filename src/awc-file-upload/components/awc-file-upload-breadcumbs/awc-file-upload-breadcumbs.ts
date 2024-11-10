import { CSSResult, html, LitElement, svg, TemplateResult, SVGTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadBreadcrumbsStyles } from "./awc-file-upload-breadcumbs.style";

export const awcFileUploadBreadcrumbs = "awc-file-upload-breadcrumbs"

@customElement(awcFileUploadBreadcrumbs)
export default class AwcFileUploadBreadcrumbs extends LitElement {
    @property({ type: Array }) path: string[] = [];
    @property({ type: String }) rootName: string = "";
    @property({ type: Object }) rootIcon: SVGTemplateResult | string = "";

    private handleClick(fullPath: string) {
        const path = fullPath === "" ? "/" : fullPath;
        this.dispatchEvent(new CustomEvent("breadcrumb-click", {
            detail: { path }
        }));
    }

    private getDisplayPath(): string[] {
        const relativePath = this.path.slice(1);
        return relativePath.map(segment => segment.split('/').pop() || "");
    }

    protected render(): TemplateResult {
        const breadcrumbSeparatorIcon = svg`
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.58579 8L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L10.7071 7.29289L11.4142 8L10.7071 8.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z" fill="#919BB6"/>
                </g>
            </svg>
        `;

        const displayPath = this.getDisplayPath();

        return html`
            <nav class="awc-breadcrumbs">
                <span class="awc-breadcrumbs__item" @click="${() => this.handleClick("")}">
                    ${this.rootIcon ? html`<span class="awc-breadcrumbs__icon">${this.rootIcon}</span>` : ''}
                    ${this.rootName}
                </span>
                
                ${displayPath.length > 0 ? html`<span class="awc-breadcrumbs__separator">${breadcrumbSeparatorIcon}</span>` : ''}

                ${displayPath.map((segment, index) => {

            const fullPath = this.path.slice(0, index + 2).join('/');

            return html` <span class="awc-breadcrumbs__item" @click="${() => this.handleClick(fullPath)}">
                            ${segment}
                        </span>
                        ${index < displayPath.length - 1 ? html`<span class="awc-breadcrumbs__separator">${breadcrumbSeparatorIcon}</span>` : ''}
                    `;
        })}
            </nav>
        `;
    }

    static styles?: CSSResult = awcFileUploadBreadcrumbsStyles;
}
