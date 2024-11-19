import { css } from "lit";

export const awcFileUploadStyles = css`
    :host {
        --awc-file-upload-file-title: var(--awc-font-h5-medium);
    }

    awc-modal {
        --awc-modal-padding: 0px;
    }

    .awc-file-upload-heading {
        position: relative;
        width: 100%;
        display: flex;
    }

    .awc-file-upload-content {
        display: flex;
        flex-direction: column;
        /* min-height: 474px; */
    }
   
    .awc-file-upload-footer{
        display: flex;
        width: 100%;
    }
`;