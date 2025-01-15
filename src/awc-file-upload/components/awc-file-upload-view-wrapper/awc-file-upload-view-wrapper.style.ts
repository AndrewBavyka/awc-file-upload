import { css } from "lit";

export const awcFileUploadViewWrapperStyles = css`
    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: inherit;
        min-height: inherit;
    }

    :host ::slotted(awc-file-upload-auth) {
       align-items: center;
       position: absolute;
       width: 100%;
       height: 100%;
    }
`;