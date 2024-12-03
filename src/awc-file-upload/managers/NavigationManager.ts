import { Provider } from "../providers/Provider";
import { EventDispatcher, event } from "../../util/event";

export type CurrentView = "main" | "auth" | "list" | "selected";
export interface NavigationEventDetail {
    currentView: CurrentView;
}
export class NavigationManager extends EventTarget {
    @event("awc-file-upload-change-view") private _onChangeView!: EventDispatcher<NavigationEventDetail>

    private _currentView: CurrentView = "main";
    private _previousView: CurrentView | null = null;
    private _selectedProvider: Provider | null = null;

    setView(view: CurrentView): void {
        this._previousView = this._currentView;
        this._currentView = view;
        this._onChangeView({ currentView: this._currentView });
    }

    setSelectedProvider(provider: Provider): void {
        this._selectedProvider = provider;
    }

    get currentView(): CurrentView {
        return this._currentView;
    }

    get previousView(): CurrentView | null {
        return this._previousView;
    }

    get selectedProvider(): Provider | null {
        return this._selectedProvider;
    }

    reset(): void {
        this._currentView = "main";
        this._selectedProvider = null;

        this._onChangeView({ currentView: this._currentView });
    }
}

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-change-view': CustomEvent<NavigationEventDetail>;
    }
}