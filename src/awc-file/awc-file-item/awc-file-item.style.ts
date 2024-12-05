import { css } from "lit";

export const awcFileItemStyles = css`
    
    :host() {
        display: flex;
    }

    :host([view="grid"]) .awc-file-item {
        flex-direction: column;
        gap: var(--spacing-s);
    }

    /* .awc-file-item {
        display: flex;
        align-items: center;
    } */
    
    // grid view
    :host() .awc-file-item {
       
    }
    

    .awc-file-item__preview {
        border: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-m);
        position: relative;
        min-width: 120px;
        min-height: 120px;
        max-width: 120px;
        max-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-file-item__dropdown {
        position: absolute;
        top: 6px;
        right: 6px;
    }
    
    .awc-file-item__info {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    .awc-file-item__name {
        max-width: 120px;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-titles);
    }

    .awc-file-item__subinfo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: var(--spacing-2xs);
    }

    .awc-file-item__size,  .awc-file-item__type, .awc-file-item__date {
        font: var(--awc-font-caption-2-regular);
        color: var(--colors-light-secondary);
    }

    .awc-file-item__provider{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-file-item__provider svg {
        width: 16px;
        height: 16px;
    }

`;