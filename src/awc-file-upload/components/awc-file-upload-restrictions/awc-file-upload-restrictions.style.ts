import { css } from "lit";

export const awcFileUploadRestrictionsStyles = css`
    .awc-file-upload-restrictions {
        display: flex;
        align-items: center;
        justify-content: center;
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary); 
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
`;