import { Provider } from "../providers/Provider";

export type CurrentView = "main" | "auth" | "list" | "selected";

export class NavigationManager {
    private _currentView: CurrentView = "main";
    private _previousView: CurrentView | null = null;
    private _selectedProvider: Provider | null = null;

    setView(view: CurrentView): void {
        this._previousView = this._currentView;
        this._currentView = view;
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
    }
}
