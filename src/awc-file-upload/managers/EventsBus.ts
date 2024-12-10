import { LitElement } from "lit";

export const UploadEventBus = new EventTarget();
export const UploadEvents = {
    UPLOAD_START: "awc-file-upload-start",
    UPLOAD_END: "awc-file-upload-end",
    UPLOAD_STATUS: "awc-file-upload-status",
    UPLOAD_ERROR: "awc-file-upload-error",
    UPLOAD_PROGRESS: "awc-file-upload-progress"
};

export const SelectedFilesEventBus = new EventTarget();
export const SelectedFilesEvents = {
    FILE_SELECTION_CHANGE: "awc-file-upload-selection-changed",
    SWITCH_MODE: "awc-file-upload-switch-mode",
};

export const NavigationEventsBus = new EventTarget();
export const NavigationEvents = {
    NAVIGATION_CHANGE_VIEW: "awc-file-upload-change-view",
};

export const ProviderEventBus = new EventTarget();
export const ProviderEvents = {
    PROVIDER_SELECTED: "awc-file-upload-provider-selected",
};

export const DropzoneEventsBus = new EventTarget();
export const DropzoneEvents = {
    FILE_DROPPED: "awc-file-upload-dropped",
};

export interface EventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

export class EventsBus {
    static dispatch(
        eventBus: EventTarget,
        eventName: string,
        detail: any = null,
        options: EventOptions = {}
    ): void {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            cancelable: true,
            composed: true,
            ...options,
        });
        eventBus.dispatchEvent(event);
    }

    static autoDispatchToDOM(
        component: LitElement,
        eventBus: EventTarget,
        eventName: string
    ): void {
        eventBus.addEventListener(eventName, (e: Event) => {
            const customEvent = e as CustomEvent;
            component.dispatchEvent(
                new CustomEvent(eventName, {
                    detail: customEvent.detail,
                    bubbles: true,
                    composed: true,
                })
            );
        });
    }
}
