import { LitElement, SVGTemplateResult } from "lit";
import { EventDispatcher, event } from "../../util/event";
import { ProviderInfo } from "../interfaces/ProviderInfo";
import { RequestOptions } from "../interfaces/ProviderInfo";
import { ProviderData } from "../interfaces/ProviderFile";

export abstract class Provider extends LitElement implements ProviderInfo {
    @event("awc-file-upload-provider-selected") private _onSelected!: EventDispatcher<ProviderInfo>;

    abstract name: string;
    abstract provider: string;
    protected authToken: string | null = null;

    abstract get icon(): SVGTemplateResult;

    abstract login(options?: RequestOptions): Promise<void>;
    abstract logout(options?: RequestOptions): Promise<void>;
    abstract list(directory: string | null, options: RequestOptions): Promise<ProviderData>;

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


    // static styles?: CSSResultGroup = [];
}
