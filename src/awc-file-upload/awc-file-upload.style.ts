import { css } from "lit";

export const awcFileUploadStyles = css`
    :host {
        --awc-file-upload-file-title: var(--awc-font-h5-medium);
       
    }

    /* awc-modal {
        --awc-font-h4-regular: var(--awc-file-upload-file-title);
        font: var(--awc-font-h4-regular);
    } */

    .awc-file-upload__content {
        min-height: calc(509px - 40px);
    }

    .awc-file-upload-btn__cancel {
        padding: 0;
        background: none;
        border: none;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-primary);
        cursor: pointer;
        transition: color .3s ease;
    }

    .awc-file-upload-btn__cancel:hover {
        color: var(--colors-light-link-hover);
    }

    .awc-file-upload-heading {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .awc-file-upload-heading__title{
        max-width: 510px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font: var(--awc-font-h5-medium);
        color: var(--colors-light-titles);
    }

    .awc-file-upload__footer{
        background-color: red;
        width: 100%;
    }

    awc-modal {
        --awc-modal-padding: 0px;
    }
`;