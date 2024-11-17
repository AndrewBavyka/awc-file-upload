import { css } from "lit";

export const awcFileUploadFooterStyles = css`
    :host {
        display: block;
        position: sticky;
        bottom: 0;
        height: 72px;
        width: 100%;
        box-sizing: border-box;
        background-color: var(--colors-light-white);
    }

     .awc-file-upload-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px 20px 20px;
    }

    .awc-file-upload-footer::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        margin: 0 auto;
        width: 100%;
        border-top: 1px solid var(--colors-light-stroke);
    }

    .awc-file-upload-footer__buttons{
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
`;