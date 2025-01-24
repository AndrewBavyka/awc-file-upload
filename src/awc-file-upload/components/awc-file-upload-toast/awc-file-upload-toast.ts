import { CSSResult, html, LitElement, svg, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { awcFileUploadToastStyle } from "./awc-file-upload-toast.style";

type ToastVariant = "success" | "warning" | "info";
type ToastPosition = "top-center";

export type Toast = ToastProps & {
    id: string;
    remove: () => Promise<boolean>;
};

type Action = {
    label: string;
    onClick: (toast: Toast) => void;
};

export type ToastProps = {
    position?: ToastPosition;
    caption?: string;
    description: string;
    icon?: string;
    variant?: ToastVariant;
    primaryAction?: Action;
    secondaryAction?: Action;
    duration?: number;
    permanent?: boolean;
    closeButton?: boolean;
}

const defaultToastConfig: ToastProps = {
    position: "top-center",
    caption: "Default Caption",
    description: "This is a default toast message.",
    icon: "🔔",
    variant: "info",
    primaryAction: {
        label: "OK",
        onClick: (toast) => console.log(`Primary action clicked for toast: ${toast.id}`)
    },
    secondaryAction: {
        label: "Cancel",
        onClick: (toast) => console.log(`Secondary action clicked for toast: ${toast.id}`)
    },
    duration: 5000,
    permanent: false,
    closeButton: true
};

@customElement("awc-file-upload-toast")
export default class AwcFileUploadToast extends LitElement {
    @state() private toasts: Toast[] = [];

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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58209 7.9963L3.2921 11.2937C2.90201 11.6847 2.90273 12.3178 3.29369 12.7079C3.68465 13.098 4.31781 13.0973 4.7079 12.7063L7.9963 9.41052L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.40893 7.99472L12.69 4.70631C13.08 4.31535 13.0793 3.68219 12.6884 3.2921C12.2974 2.90201 11.6642 2.90273 11.2742 3.29369L7.99471 6.5805L4.70711 3.29289Z" fill="#919BB6"/>
            </svg>
        `;

        return html`
        <div class="awc-file-upload-toast">
            ${this.toasts.map(toast => html`
                <div class="awc-file-upload-toast__content awc-file-upload-toast__content--${toast.variant}">
                    <div class="awc-file-upload-toast__icon">${toast.icon}</div>
                    <div class="awc-file-upload-toast__text">
                        <strong>${toast.caption}</strong>
                        <p >${toast.description}</p>
                    </div>
                    <div class="awc-file-upload-toast__actions">
                        ${toast.primaryAction ? html`<button class="awc-file-upload-toast__action--primary" @click="${() => toast.primaryAction!.onClick(toast)}">${toast.primaryAction.label}</button>` : ''}
                        ${toast.secondaryAction ? html`<button class="awc-file-upload-toast__action--secondary" @click="${() => toast.secondaryAction!.onClick(toast)}">${toast.secondaryAction.label}</button>` : ''}
                    </div>
                    ${toast.closeButton ? html`<button class="awc-file-upload-toast__close" @click="${() => toast.remove()}">${closeButton}</button>` : ''}
                </div>
            `)}
        </div>`;
    }

    static styles?: CSSResult = awcFileUploadToastStyle;
}
