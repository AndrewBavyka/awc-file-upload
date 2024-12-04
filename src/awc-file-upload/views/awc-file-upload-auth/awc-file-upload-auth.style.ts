import { css } from "lit";

export const awcFileUploadAuthStyles = css`
    .awc-auth-view__description {
        margin: 0;
        font: var(--awc-font-text-regular-15);
        color: var(--colors-light-text);
        text-align: center;
        max-width: 330px;
    }

    .awc-auth-view__icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-auth-view__icon svg {
        width: 64px;
        height: 64px;
    }

    awc-file-upload-view-wrapper {
        justify-content: center;
    }
`;