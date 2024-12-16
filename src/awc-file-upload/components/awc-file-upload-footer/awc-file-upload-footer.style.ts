import { css } from "lit";

export const awcFileUploadFooterStyles = css`
    :host {
        display: block;
        position: sticky;
        bottom: 0;
        height: 72px;
        width: 100%;
        box-sizing: border-box;
        background-color: var(--colors-light-white);
    }

     .awc-file-upload-footer {
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    .awc-file-upload-footer::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        margin: 0 auto;
        width: 100%;
        border-top: 1px solid var(--colors-light-stroke);
    }

    .awc-file-upload-footer__buttons {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .awc-file-upload-footer__progress-list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    awc-file-upload-progress {
        display: inline-flex;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    .awc-file-upload-footer__progress-item {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2xs);
    }

    .awc-file-upload-footer__progress-value {
        color: var(--colors-light-titles);
        font: var(--awc-font-text-medium-14);
    }

    .awc-file-upload-footer__progress-info {
        color: var(--colors-light-secondary);
        font: var(--awc-font-caption-1-regular);
    }

    .awc-file-upload-footer__progress-button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .awc-file-upload-footer__progress-button:focus {
        outline: 1px solid var(--colors-light-secondary);
    }
`;