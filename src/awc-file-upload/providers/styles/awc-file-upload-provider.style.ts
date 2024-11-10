import { css } from "lit";

export const awcFileUploadProviderStyles = css`
    .awc-file-upload-provider,
    .awc-file-upload-provider-local--input {
        cursor: pointer;
        user-select: none;
        box-sizing: border-box;
        max-height: 56px;
        padding: 12px;
        border-radius: var(--corner-radius-m);
    
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        
        font: var(--awc-font-text-medium-14);
        text-align: start;
        color: var(--colors-light-text);
        transition: background-color .3s ease;
    }

    .awc-file-upload-provider:hover {
        background-color: var(--colors-light-hover-back);
    }

    .awc-file-upload-provider:focus {
        outline: none;
        background-color: var(--colors-light-hover-back);
    }

    .awc-file-upload-provider__name{
        margin: 0;
    }

    /* awc-file-upload-provider-local */
    
    .awc-file-upload-provider-local--input:hover {
        background-color: var(--colors-light-hover-back);
    }

    .awc-file-upload-provider-local--input:focus-visible {
        outline: none;
        background-color: var(--colors-light-hover-back);
    }
`;