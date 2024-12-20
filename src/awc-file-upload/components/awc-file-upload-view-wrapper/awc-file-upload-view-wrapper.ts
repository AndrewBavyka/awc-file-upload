import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadViewWrapperStyles } from "./awc-file-upload-view-wrapper.style";
import { NavigationManager } from "../../managers/NavigationManager";
import anime from "animejs";

export const awcFileUploadViewWrapperTag = "awc-file-upload-view-wrapper";

@customElement(awcFileUploadViewWrapperTag)
export default class AwcFileUploadViewWrapper extends LitElement {
    @property({ type: Object }) navigationManager!: NavigationManager;

    private viewHistory: string[] = [];

    connectedCallback(): void {
        super.connectedCallback();

        if (this.navigationManager) {
            this.navigationManager.addEventListener("awc-file-upload-change-view", (e) => this._onChangeView(e as CustomEvent));
        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.navigationManager) {
            this.navigationManager.removeEventListener("awc-file-upload-change-view", (e) => this._onChangeView(e as CustomEvent));
        }
    }

    private _onChangeView(e: CustomEvent) {
        const currentView = e.detail.viewName;

        if (this.viewHistory.length > 0 && this.viewHistory[this.viewHistory.length - 1] === currentView) {
            this.viewHistory.pop();
            this.animateViewChange('reverse');
        } else {
            this.viewHistory.push(currentView);
            this.animateViewChange('forward');
        }
    }

    private animateViewChange(direction: 'forward' | 'reverse') {
        const translateXValue = direction === 'forward' ? ['100%', '0%'] : ['-100%', '0%'];
        anime({
            targets: this,
            translateX: translateXValue,
            easing: 'easeInOutQuad',
            duration: 300,
        });
    }

    protected render(): TemplateResult {
        return html`<slot></slot>`;
    }

    static styles?: CSSResult = awcFileUploadViewWrapperStyles;
}
