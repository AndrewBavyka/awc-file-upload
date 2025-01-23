import { CSSResult, html, LitElement, svg, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { awcFileUploadErrorStyles } from "./awc-file-upload-error.style";

export const awcFileUploadErrorTag = "awc-file-upload-error";

@customElement(awcFileUploadErrorTag)
export default class AwcFileUploadError extends LitElement {
    protected render(): TemplateResult {
        const errorIcon = svg`
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_52651_11336)">
            <circle cx="24" cy="24" r="24" fill="#F3F4F9"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1005 17L17 21.1005V26.8995L21.1005 31H26.8995L31 26.8995V21.1005L26.8995 17H21.1005ZM20.6863 15H27.3137C27.5789 15 27.8333 15.1054 28.0208 15.2929L32.7071 19.9792C32.8946 20.1667 33 20.4211 33 20.6863V27.3137C33 27.5789 32.8946 27.8333 32.7071 28.0208L28.0208 32.7071C27.8333 32.8946 27.5789 33 27.3137 33H20.6863C20.4211 33 20.1667 32.8946 19.9792 32.7071L15.2929 28.0208C15.1054 27.8333 15 27.5789 15 27.3137V20.6863C15 20.4211 15.1054 20.1667 15.2929 19.9792L19.9792 15.2929C20.1667 15.1054 20.4211 15 20.6863 15ZM24 19C24.5523 19 25 19.4477 25 20V24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24V20C23 19.4477 23.4477 19 24 19ZM24 29C24.5523 29 25 28.5523 25 28C25 27.4477 24.5523 27 24 27C23.4477 27 23 27.4477 23 28C23 28.5523 23.4477 29 24 29Z" fill="#919BB6"/>
            </g>
            <defs>
            <clipPath id="clip0_52651_11336">
            <rect width="48" height="48" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        `

        return html`
            <awc-empty-state size="small" head="Что-то пошло не так">
                <div slot="icon">${errorIcon}</div>
                К сожалению, возникла проблема. Повторите попытку позже.
            </awc-empty-state>
        `;
    }

    static styles?: CSSResult = awcFileUploadErrorStyles;
}