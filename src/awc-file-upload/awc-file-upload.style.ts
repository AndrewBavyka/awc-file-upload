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
        min-height: calc(534px - 40px);
    }

    .awc-file-upload__content awc-file-upload-auth {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .awc-file-upload-btn__cancel,
    .awc-file-upload-btn__logout{
        padding: 0;
        background: none;
        border: none;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-primary);
        cursor: pointer;
        transition: color .3s ease;
    }

    .awc-file-upload-btn__cancel:hover,
    .awc-file-upload-btn__logout:hover {
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

    .file-explorer__footer{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px 20px 20px;
    }

    .file-explorer__footer:after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        display: block;
        margin: 0 auto;
        width: 100%;
        border-top: 1px solid var(--colors-light-stroke);
    }

    .file-explorer__buttons{
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
`;