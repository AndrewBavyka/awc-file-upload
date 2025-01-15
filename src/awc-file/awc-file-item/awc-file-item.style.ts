import { css } from "lit";

export const awcFileItemStyles = css`
    /* Host Styles */
    :host {
        display: flex;
        box-sizing: border-box;
    }

    :host([external-file-link]:not(:host([view="grid"]))),
    :host([external-file-link]) .awc-file-item__preview {
        cursor: pointer;
    }

    /* Grid View Styles */
    :host([view="grid"]) {
        flex-direction: column;
        gap: var(--spacing-s);
    }

    :host([view="grid"]) .awc-file-item__preview {
        position: relative;
        width: 120px;
        height: 120px;
        outline: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-m);
        transition: background-color 0.3s ease;
    }

    :host([view="grid"]) .awc-file-item__preview:hover {
        background-color: #05237D0D;
    }

    :host([view="grid"]) .awc-file-item__preview .awc-file-item__dropdown {
        position: absolute;
        z-index: 9999;
        top: 6px;
        right: 6px;
    }

    :host([view="grid"]) .awc-file-item__info {
        flex-direction: column;
        align-items: flex-start;
    }

    :host([view="grid"]) .awc-file-item__name {
        max-width: 120px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :host([view="grid"]) .awc-file-item__subinfo {
        gap: var(--spacing-2xs);
    }

    /* List View Styles */
    :host([view="list"]) .awc-file-item__preview .awc-file-item__image {
        outline: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-xs);
    }

    :host([view="list"]) .awc-file-item__preview,
    :host([view="list"]) .awc-file-item__preview .awc-file-item__icon svg {
        width: 24px;
        height: 24px;
    }

    :host([view="list"]) .awc-file-item__info {
        justify-content: space-between;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    :host([view="list"]) .awc-file-item__name {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        max-width: 75%;
    }

    :host([view="list"]) .awc-file-item__subinfo {
        position: relative;
        gap: var(--spacing-m);
        white-space: nowrap;
    }

    :host([view="list"]) .awc-file-item__buttons {
        display: flex;
        gap: var(--spacing-xs);
        align-items: center;
        position: absolute;
        background-color: var(--colors-light-light-background);
        width: 100%;
        justify-content: flex-end;
    }

    :host([view="list"]) .awc-file-item__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    :host([view="list"]) {
        padding: 6px;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sm);
        width: 100%;
        max-height: 36px;
        transition: background-color 0.3s ease;
    }

    :host([view="list"]:hover) {
        background-color: var(--colors-light-light-background);
        border-radius: var(--corner-radius-m);
    }

    /* List Block View Styles */
    :host([view="list_block"]) .awc-file-item__preview,
    :host([view="list_block"]) .awc-file-item__preview .awc-file-item__icon svg {
        display: flex;
        width: 36px;
        height: 36px;
    }

    :host([view="list_block"]) .awc-file-item__preview .awc-file-item__image {
        outline: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-s);
    }

    :host([view="list_block"]) .awc-file-item__info {
        flex-direction: column;
        align-items: flex-start;
        max-width: 80%;
        overflow: hidden;
    }

    :host([view="list_block"]) .awc-file-item__name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    :host([view="list_block"]) {
        padding: 0 12px;
        flex-direction: row;
        align-items: center;
        gap: var(--spacing-sm);
        max-width: 300px;
        width: 100%;
        max-height: 56px;
        height: 56px;
        border-radius: var(--corner-radius-m);
        border: 1px solid var(--colors-light-stroke);
    }

    :host([view="list_block"]) .awc-file-item__subinfo {
        gap: var(--spacing-xs);
    }

    :host([view="list_block"]) .awc-file-item__buttons {
        display: flex;
        gap: var(--spacing-xs);
        align-items: center;
        margin-left: auto;
        justify-content: flex-end;
    }

    /* Preview Styles */
    .awc-file-item__preview {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-file-item__preview .awc-file-item__image {
        object-fit: contain;
        width: inherit;
        height: inherit;
    }

    /* Info Styles */
    .awc-file-item__info {
        display: flex;
        align-items: center;
    }

    .awc-file-item__name,
    .awc-file-item__text {
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-titles);
        margin: 0;
    }
    

    .awc-file-item__subinfo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .awc-file-item__size,
    .awc-file-item__type,
    .awc-file-item__date {
        font: var(--awc-font-caption-2-regular);
        color: var(--colors-light-secondary);
    }

    .awc-file-item__type {
        text-transform: uppercase;
    }

    .awc-file-item__provider {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-file-item__provider svg {
        width: 16px;
        height: 16px;
    }

    @media screen and (max-width: 512px) {
        :host([view="list"]) .awc-file-item__date {
            display: none;
        }
    }
`;
