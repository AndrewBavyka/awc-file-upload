import { css } from "lit";

export const awcFileUploadStyles = css`
    :host {
        --awc-file-upload-file-title: var(--awc-font-h5-medium);
        position: relative;
    }

    awc-modal {
        --awc-modal-padding: 0px;
    }

    .awc-file-upload-wrapper {
        height: 550px;
        max-height: 550px;
        box-sizing: border-box;
    }

    /* .awc-file-upload-body {
        min-height: 100%;
        position: relative;
    } */
`;