import { CSSResult, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadToastStyle } from "./awc-file-upload-toast.style";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

type ToastVariant = "success" | "warning" | "info";
type ToastPosition = "top-center";

export type Toast = ToastProps & {
    id: string;
    remove: () => Promise<boolean>;
};

type Action = {
    content: any;
    onClick: (toast: Toast) => void;
};

export type ToastProps = {
    position?: ToastPosition;
    caption?: string;
    icon?: any;
    variant?: ToastVariant;
    primaryAction?: Action;
    secondaryAction?: Action;
    duration?: number;
    permanent?: boolean;
    closeButton?: boolean;
    html?: string;
}

const defaultToastConfig: ToastProps = {
    position: "top-center",
    caption: "Default Caption",
    icon: `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L1.29289 8.70711C0.902369 8.31658 0.902369 7.68342 1.29289 7.29289C1.68342 6.90237 2.31658 6.90237 2.70711 7.29289L6 10.5858L13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289Z" fill="#35D3AC"/>
        </svg>
    `,
    variant: "info",
    primaryAction: {
        content: '<span style="color: red">HTML Content</span>',
        onClick: (toast) => console.log(`Primary action clicked for toast: ${toast.id}`)
    },
    duration: 5000,
    permanent: false,
    closeButton: true,
};

@customElement("awc-file-upload-toast")
export default class AwcFileUploadToast extends LitElement {
    private static instance: AwcFileUploadToast | null = null;
    
    @state() private toasts: Toast[] = [];

    constructor() {
        super();

        if (!AwcFileUploadToast.instance) {
            AwcFileUploadToast.instance = this;
            this.initializeGlobalToast();
        }
        return AwcFileUploadToast.instance;
    }

    private initializeGlobalToast(): void {
       
        window.AwcToast = {
            add: (props?: Partial<ToastProps>) => this.addToast(props),
            remove: (id: string) => this.removeToast(id),
            getAll: () => this.toastList
        };
    }

    private generateId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    public get toastList() {
        return this.toasts;
    }

    public addToast(toastProps: Partial<ToastProps> = {}): string {
        const id = this.generateId();
        const toast: Toast = {
            id,
            remove: () => this.removeToast(id),
            ...defaultToastConfig,
            ...toastProps
        };
        this.toasts = [...this.toasts, toast];
        return id;
    }

    public async removeToast(id: string): Promise<boolean> {
        const index = this.toasts.findIndex(toast => toast.id === id);
        if (index !== -1) {
            this.toasts = this.toasts.filter(toast => toast.id !== id);
            return true;
        }
        return false;
    }

    protected render(): TemplateResult {
        const closeButton = svg`
           <svg width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58209 7.9963L3.2921 11.2937C2.90201 11.6847 2.90273 12.3178 3.29369 12.7079C3.68465 13.098 4.31781 13.0973 4.7079 12.7063L7.9963 9.41052L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.40893 7.99472L12.69 4.70631C13.08 4.31535 13.0793 3.68219 12.6884 3.2921C12.2974 2.90201 11.6642 2.90273 11.2742 3.29369L7.99471 6.5805L4.70711 3.29289Z" />
        </svg>
        `;

        return html`
            <div class="awc-file-upload-toast">
                ${this.toasts.map(toast => html`
                    <div class="awc-file-upload-toast__content awc-file-upload-toast__content--${toast.variant}">
                        <div class="awc-file-upload-toast__icon">${unsafeSVG(toast.icon)}</div>
                        <p class="awc-file-upload-toast__text">${toast.caption}</p>
                        <div class="awc-file-upload-toast__actions" @click="${() => toast.primaryAction?.onClick(toast)}">
                            ${unsafeHTML(toast.primaryAction?.content)}
                        </div>
                        ${toast.closeButton ? html`<button class="awc-file-upload-toast__close" @click="${() => toast.remove()}">${closeButton}</button>` : ''}
                    </div>
                `)}
            </div>
        `;
    }

    static styles?: CSSResult = awcFileUploadToastStyle;
}

declare global {
    interface Window {
        AwcToast: {
            add: (props?: Partial<ToastProps>) => string;
            remove: (id: string) => Promise<boolean>;
            getAll: () => Toast[];
        }
    }
}