import { css } from "lit";

export const awcFileUploadHeaderStyles = css`
    :host {
        width: inherit;
        display: block;
    }

    .awc-file-upload-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .awc-file-upload-heading__title {
        max-width: 510px;
        font: var(--awc-font-h5-medium);
        color: var(--colors-light-titles);
    }

    .awc-file-upload-btn__cancel,
    .awc-file-upload-btn__add-more{
        padding: 0;
        background: none;
        border: none;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-primary);
        cursor: pointer;
        transition: color .3s ease;
    }

    .awc-file-upload-btn__cancel:hover,
    .awc-file-upload-btn__add-more:hover {
        color: var(--colors-light-link-hover);
    }
`;