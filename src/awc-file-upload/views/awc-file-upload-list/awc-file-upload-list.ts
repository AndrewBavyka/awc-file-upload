import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Provider } from "../../providers/Provider";
import { awcFileUploadListStyles } from "./awc-file-upload-list.style";
import { CurrentView } from "../../managers/NavigationManager";

export const awcFileUploadListTag = "awc-file-upload-list"

@customElement(awcFileUploadListTag)
export default class AwcFileUploadList extends LitElement {
    @property({ type: Object }) provider: Provider | null = null;
    @property({type: String }) currentView: CurrentView = "list";
    @property({type: Array }) viewHistory:CurrentView[] = [];

    protected render(): TemplateResult {
        return html`
            <awc-file-upload-explorer .currentView=${this.currentView} .getViewHistory=${this.viewHistory} .provider=${this.provider}></awc-file-upload-explorer>
            <!-- <awc-file-upload-view-wrapper>
                
            </awc-file-upload-view-wrapper> -->
            
            <!-- <slot></slot> -->
        `;
    }

    static styles?: CSSResult = awcFileUploadListStyles;
}