import { css } from "lit";

export const awcFileUploadNotificationStyle = css`
    :host {
        --awc-file-upload-notification-background-color: #363948;
        --awc-file-upload-notification-color: #ffff;
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    :host(.visible) {
        opacity: 1;
    }

    .awc-file-upload-notification {
        position: fixed;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 12px;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: var(--awc-file-upload-notification-background-color);
        color: var(--awc-file-upload-notification-color);
        text-align: center;
        max-width: 450px;
        width: 80%;
        font: var(--awc-font-caption-1-regular);
    }
`;