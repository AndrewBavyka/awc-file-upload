import { Provider } from "../providers/Provider";

export type CurrentView = "main" | "auth" | "list" | "selected";

export class NavigationManager {
    private _currentView: CurrentView = "main";
    private _selectedProvider: Provider | null = null;

    setView(view: CurrentView) {
        this._currentView = view;
    }

    setSelectedProvider(provider: Provider) {
        this._selectedProvider = provider;
    }

    get currentView(): CurrentView {
        return this._currentView;
    }

    get selectedProvider(): Provider | null {
        return this._selectedProvider;
    }

    reset() {
        this._currentView = "main";
        this._selectedProvider = null;
    }
}
