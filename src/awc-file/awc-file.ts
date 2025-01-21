import { CSSResult, html, LitElement, PropertyValues, svg, TemplateResult } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { awcFileStyles } from "./awc-file.style";
import AwcFileItem, { awcFileItemTag } from "./awc-file-item/awc-file-item";
import anime from "animejs";

export const awcFileTag = "awc-file";

export type AwcFileDisplayType = "grid" | "list_block" | "list";

type ViewConfig = {
    type: AwcFileDisplayType;
    icon: TemplateResult;
};

const VIEW_CONFIGS: ViewConfig[] = [
    {
        type: "grid",
        icon: svg`
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7V3H4C3.44772 3 3 3.44772 3 4V7H7ZM7 9H3V12C3 12.5523 3.44772 13 4 13H7V9ZM9 13V9H13V12C13 12.5523 12.5523 13 12 13H9ZM9 15H8H7H4C2.34315 15 1 13.6569 1 12V9V8V7V4C1 2.34315 2.34315 1 4 1H7H8H9H12C13.6569 1 15 2.34315 15 4V7V8V9V12C15 13.6569 13.6569 15 12 15H9ZM13 7H9V3H12C12.5523 3 13 3.44772 13 4V7Z"/>
            </svg>
        `,
    },
    {
        type: "list_block",
        icon: svg`
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5V3L13 3V5H3ZM1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V5C15 6.10457 14.1046 7 13 7H3C1.89543 7 1 6.10457 1 5V3ZM3 13V11H13V13H3ZM1 11C1 9.89543 1.89543 9 3 9H13C14.1046 9 15 9.89543 15 11V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V11Z"/>
            </svg>
        `,
    },
    {
        type: "list",
        icon: svg`
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L14 3C14.5523 3 15 2.55229 15 2C15 1.44772 14.5523 1 14 1H2ZM2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7L14 7C14.5523 7 15 6.55229 15 6C15 5.44772 14.5523 5 14 5L2 5ZM1 10C1 9.44771 1.44772 9 2 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L2 11C1.44772 11 1 10.5523 1 10ZM2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15L14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13L2 13Z"/>
            </svg>
        `,
    },
];


@customElement(awcFileTag)
export default class AwcFile extends LitElement {
    @property({ type: String, reflect: true }) heading = "";
    @property({ type: Number, reflect: true }) counter = 0;
    @property({ type: String, reflect: true }) view: AwcFileDisplayType = "list_block";
    @property({ type: Boolean, reflect: true }) compact = false;

    @property({ type: Boolean, reflect: true }) open = false;

    @queryAll("awc-icon-button") private _viewButtons!: HTMLElement[];

    get fileItems(): AwcFileItem[] {
        return [...this.querySelectorAll(awcFileItemTag)!];
    }

    private _switchingView(e: Event) {
        e.stopPropagation();

        const target = (e.target as HTMLElement).closest<HTMLElement>("[data-view]");
        if (target) {
            const newView = target.getAttribute("data-view") as AwcFileDisplayType;

            if (newView && newView !== this.view) {
                this.view = newView;
                this.fileItems.forEach(item => item.view = this.view);
            }
        }
    }

    private _closeAllDropdownsExcept(e: CustomEvent): void {
        const data = e.detail;

        this.fileItems.forEach((item) => {
          if (item !== data) {
            item.dropdownActive = false;
          }
        });
    }

    private _updateFileItemsView(): void {
        this.fileItems.forEach(item => {
            item.view = this.view;
        });
    }

    private _updateActiveButton(): void {
        this._viewButtons.forEach(button => {
            const isActive = button.getAttribute("data-view") === this.view;
            if (isActive) {
                button.setAttribute("active", "true");
                this.fileItems.forEach(item => item.view = this.view);
            } else {
                button.removeAttribute("active");
            }
        });
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("view")) {
            this._updateActiveButton();

            if(this.view) {
                this.fileItems.forEach((item) => item.dropdownActive = false);
            }
        }

        if(_changedProperties.has("compact")) {
            if(this.compact) {
                this.view = 'list_block';
            }
        }
    }

    private _toogleAccordion() {
        this.open = !this.open;
    }

    protected render(): TemplateResult {
        const awcFileArrowIcon = svg`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z" fill="#919BB6"/>
            </svg>  
        `;

        return html`
            <section class="awc-file">
                ${!this.compact ? html`<div class="awc-file__header" @click="${this._toogleAccordion}">
                    <div class="awc-file__icon">
                        ${awcFileArrowIcon}
                    </div>
                    <div class="awc-file__headline">
                        <p class="awc-file__title">${this.heading}</p>
                        <span class="awc-file__counter">${this.counter > 0 ? this.counter : ""}</span>
                    </div>
                    <div class="awc-file__views ${this.open ? '' : 'awc-file__views--hidden'}" @click=${this._switchingView}>
                        ${VIEW_CONFIGS.map((config) => html`
                                <awc-icon-button
                                    ?active=${this.view === config.type}
                                    data-view=${config.type}
                                >
                                    ${config.icon}
                                </awc-icon-button>
                            `
                        )}
                    </div>
                </div>` : ""}
                <div ?inert=${!this.open} class="awc-file__accordion">
                    <div class="awc-file__accordion__wrapper">
                        <div @awc-dropdown-toggle=${this._closeAllDropdownsExcept} @slotchange=${this._updateFileItemsView} class="awc-file__body">
                            <slot></slot>
                        </div>
                        <div class="awc-file__button">
                            <slot name="awc-file-button"></slot>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static styles: CSSResult = awcFileStyles;
}