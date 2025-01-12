import { css } from "lit";


export const awcFileUploadSelectedStyles = css`
    :host {
        display: block;
        min-height: 421px;
    }

    .awc-file-upload-selected {
        padding: 12px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 380px;
    }

    .awc-file-upload-selected__file {
        padding: 8px;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        border-radius: var(--corner-radius-m);
        transition: background-color .3s ease;
    }

    .awc-file-upload-selected__file:hover {
        background-color: var(--colors-light-input-background);
    }

    .awc-file-upload-selected__preview {
        position: relative;
        display: flex;
        border-radius: var(--corner-radius-s);
    }

    .awc-file-upload-selected__preview img {
        width: 48px;
        height: 48px;
        object-fit: cover;
    }

    .awc-file-upload-selected__provider {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--colors-light-stroke);
        border-top-left-radius:  var(--corner-radius-s);
    }

    .awc-file-upload-selected__provider svg {
        width: 16px;
        height: 16px;
    }

    .awc-file-upload-selected__info {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        overflow: hidden;
    }

    .awc-file-upload-selected__name {
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-titles);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;        
    }

    .awc-file-upload-selected__description {
        display: flex;
        align-items: center;
        gap: var(--spacing-2xs);
    }

    .awc-file-upload-selected__size {
        font: var(--awc-font-caption-1-regular);
        color: var(--colors-light-secondary);
    }

    .awc-file-upload-selected__type {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .awc-file-upload-selected__delete {
        padding: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      
    }

    .awc-file-upload-selected__delete:hover svg {
        fill: var(--colors-light-primary-hover);
    }

    .awc-file-upload-selected__preview__icon {
        display: flex;
    }

    .awc-file-upload-selected__preview__icon svg {
        width: 48px;
        height: 48px;
    }

    .awc-file-upload-selected__delete, .awc-file-upload-selected__success, awc-file-upload-progress {
        margin-left: auto;
    }

    .awc-file-upload-selected__success {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .awc-file-upload-selected__success svg {
        width: 20px;
        height: 20px;
    }
`;