import { css } from "lit";

export const awcFileUploadStyles = css`
    :host {
        --awc-file-upload-file-title: var(--awc-font-h5-medium);
    }

    awc-modal {
        --awc-modal-padding: 0px;
    }

    .awc-file-upload-heading {
        box-sizing: border-box;
        display: flex;
        position: relative;
        width: 100%;
        max-height: 80px;
    }

    .awc-file-upload-content {
        display: flex;
        flex-direction: column;
        min-height: 474px;
        position: relative;
    }
   
    .awc-file-upload-footer{
        display: flex;
        width: 100%;
    }
`;