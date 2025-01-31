import { Provider } from "../providers/Provider";
import { EventsBus, NavigationEvents, NavigationEventsBus } from './EventsBus';

export type CurrentView = "main" | "auth" | "list" | "selected" | "error" | "more";
export interface NavigationEventDetail {
    currentView: CurrentView;
    viewHistory: CurrentView[];
}

export class NavigationManager extends EventTarget {
    private _currentView: CurrentView = "main";
    private _previousView: CurrentView | null = null;
    private _viewHistory: CurrentView[] = [];
    private _selectedProvider: Provider | null = null;

    private _onChangeView({ currentView }: NavigationEventDetail) {
        EventsBus.dispatch(NavigationEventsBus, NavigationEvents.NAVIGATION_CHANGE_VIEW, {
            currentView,
            viewHistory: this._viewHistory,
        });
    }

    setView(view: CurrentView): void {
        if (this._currentView !== view) {
            this._viewHistory.push(this._currentView);
            this._previousView = this._currentView;
            this._currentView = view;
            this._onChangeView({ currentView: this._currentView, viewHistory: this._viewHistory });
        }
    }

    goBack(): void {
        if (this._viewHistory.length > 0) {
            const previousView = this._viewHistory.pop()!;
            this._previousView = this._currentView;
            this._currentView = previousView;
            this._onChangeView({ currentView: this._currentView, viewHistory: this._viewHistory });
        }
    }

    setSelectedProvider(provider: Provider): void {
        this._selectedProvider = provider;
    }

    reset(): void {
        this._currentView = "main";
        this._previousView = null;
        this._viewHistory = [];
        this._selectedProvider = null;
        this._onChangeView({ currentView: this._currentView, viewHistory: this._viewHistory });
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

    get viewHistory(): CurrentView[] {
        return this._viewHistory;
    }
}

declare global {
    interface HTMLElementEventMap {
        'awc-file-upload-change-view': CustomEvent<NavigationEventDetail>;
    }
}
