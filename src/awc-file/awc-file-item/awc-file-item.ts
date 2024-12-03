import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fileIcons } from "../../awc-file-upload/components/awc-file-upload-explorer/fileIcons";
import { providerIcons } from "../../awc-file-upload/providerIcons";
import { AwcFileDisplayType } from "../awc-file";
import { awcFileItemStyle } from "./awc-file-item.style";

export const awcFileItemTag = "awc-file-item";

@customElement(awcFileItemTag)
export default class AwcFileItem extends LitElement {

    @property({ type: String, reflect: true }) view: AwcFileDisplayType = "list_block";
    @property({ type: String, reflect: true }) image = "";
    @property({ type: String }) size = "";

    @property({ type: String }) iconPreview = fileIcons;
    @property({ type: String }) iconProvider = providerIcons;

    @property({ type: String, reflect: true }) provider = "";

    @property({ type: Boolean, attribute: "external-file" }) externalFile = false;


    private _renderGridItem(): TemplateResult {
        return html`
            <div class="awc-file-item awc-file-item--card">
                    <div class="awc-file-item__info">
                        <p class="awc-file-item__name"></p>
                        <div class="awc-file-item__subinfo">
                            <span class="awc-file-item__size"></span>
                            <span class="awc-file-item__type"></span>
                            ${this.provider ? this.iconProvider[this.provider] : ""}
                        </div>
                    </div>
            </div>
        `;
    }

    private _renderListItem(): TemplateResult {
        return html`
            <div class="awc-file-item">

            </div>
        
        `;
    }

    private _renderListBlockItem(): TemplateResult {
        return html`
            <div class="awc-file-item">

            </div>
        
        `;
    }

    protected render(): TemplateResult {
        switch (this.view) {
            case "grid":
                return this._renderGridItem();
            case "list_block":
                return this._renderListBlockItem();
            case "list":
                return this._renderListItem();
            default:
                return html`<div>Invalid view type</div>`;
        }
    }

    static styles?: CSSResult = awcFileItemStyle;
}
