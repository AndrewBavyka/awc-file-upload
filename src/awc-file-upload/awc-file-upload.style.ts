import { css } from "lit";

export const awcFileUploadStyles = css`
    :host {
        /* position: relative; */
        --awc-file-upload-file-title: var(--awc-font-h5-medium);
        --awc-file-upload-height: 550px;
    }

    awc-modal {
        --awc-modal-padding: 0px;
    }

    .awc-file-upload-wrapper {
        height: var(--awc-file-upload-height);
        max-height: var(---awc-file-upload-height);
        box-sizing: border-box;
        position: relative;
    }

    .awc-file-upload-body {
        min-height: calc(var(--awc-file-upload-height) - 56px);
    }
`;