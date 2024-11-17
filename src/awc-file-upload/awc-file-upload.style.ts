import { css } from "lit";

export const awcFileUploadStyles = css`
    :host {
        --awc-file-upload-file-title: var(--awc-font-h5-medium);
    }

    awc-modal {
        --awc-modal-padding: 0px;
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

    .awc-file-upload-content {
        display: flex;
        flex-direction: column;
        min-height: 474px;
    }
   
    .awc-file-upload-content awc-file-upload-auth {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .awc-file-upload-footer{
        display: flex;
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
`;