import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { awcFileUploadAddMoreStyles } from "./awc-file-upload-add-more.style";
import { consume } from "@lit/context";
import { TextManager } from "../../managers/TextManager";
import { textManagerContext } from "../../managers/TextManagerContext";

export const awcFileUploadAddMoreTag = "awc-file-upload-add-more";

@customElement(awcFileUploadAddMoreTag)
export default class AwcFileUploadAddMore extends LitElement {
    @property({type: String}) subtitle: string = "";

    @consume({ context: textManagerContext }) textManager?: TextManager;

    protected render(): TemplateResult {
        return html`
            <div class="awc-file-upload-add-more">
                <div class="awc-file-upload-add-more__title">${this.subtitle}</div>
               <slot></slot>
            </div>
        `;
    }

    static styles?: CSSResult = awcFileUploadAddMoreStyles;
}
