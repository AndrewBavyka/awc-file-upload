import { css } from "lit";

export const awcFileUploadHeaderStyles = css`
    :host {
        width: inherit;
        display: block;
    }

    .awc-file-upload-header {
        position: relative;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
    }

    .awc-file-upload-header--main {
        height: 80px;
    }

    .awc-file-upload-header::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        margin: 0 auto;
        width: 100%;
        border-top: 1px solid var(--colors-light-stroke);
    }

    .awc-file-upload-heading__title {
        font: var(--awc-font-h5-medium);
        color: var(--colors-light-titles);
        position: absolute;
        text-align: center;
        width: 100%;
        left: 0;
        z-index: -1;
    }

    .awc-file-upload-heading__title--main {
        position: static;
        text-align: start;
        margin: 0;
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