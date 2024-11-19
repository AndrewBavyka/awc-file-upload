import { LitElement, SVGTemplateResult } from "lit";
import { EventDispatcher, event } from "../../util/event";
import { ProviderInfo, RequestOptions } from "../interfaces/ProviderInfo";
import { ProviderData } from "../interfaces/ProviderFile";

export class Provider extends LitElement implements ProviderInfo {
    @event("awc-file-upload-provider-selected") private _onSelected!: EventDispatcher<ProviderInfo>;

    name!: string;
    provider!: string;
    protected authToken: string | null = null;

    get icon(): SVGTemplateResult {
        throw new Error("Property 'icon' must be implemented in the derived class.");
    }

    async login(options?: RequestOptions): Promise<void> {
        throw new Error("Method 'login' must be implemented in the derived class.");
    }

    async logout(options?: RequestOptions): Promise<void> {
        throw new Error("Method 'logout' must be implemented in the derived class.");
    }

    async list(directory: string | null, options: RequestOptions): Promise<ProviderData> {
        throw new Error("Method 'list' must be implemented in the derived class.");
    }

    checkLocalStorage(): boolean {
        return !!(this.provider && localStorage.getItem(this.provider));
    }

    setAuthToken(token: string): void {
        this.authToken = token;
        localStorage.setItem(this.provider, token);
    }

    getProviderInfo(): ProviderInfo {
        return {
            name: this.name,
            provider: this.provider,
            icon: this.icon,
            login: this.login.bind(this),
            logout: this.logout.bind(this),
            list: this.list.bind(this),
        };
    }

    emitProviderSelected(): void {
        this._onSelected(this.getProviderInfo());
    }
}
