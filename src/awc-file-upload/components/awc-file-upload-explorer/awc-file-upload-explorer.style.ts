import { css } from "lit";

export const awcFileUploadExplorerStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .file-explorer__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        border-bottom: 1px solid var(--colors-light-stroke);
    }

    .file-explorer__view-toggle {
        display: flex;
        cursor: pointer;
    }

    .file-explorer__content {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 343px;
        min-height: 343px;
        padding: 12px 0 12px 20px;
    }

    .file-explorer__content--list .file-explorer__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        font: var(--awc-font-text-regular-14);
        padding: 6px 8px;
        border-radius: var(--corner-radius-m);
        cursor: pointer;
        transition: background-color 0.3s ease;
        gap: var(--spacing-sm);
    }

    .file-explorer__content--list .file-explorer__item:hover {
        background-color: var(--colors-light-input-background);
    }

    .file-explorer__content--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 12px;
        /* padding: 12px; */
    }

    .file-explorer__content--grid .file-explorer__item  {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
    }

    .file-explorer__content--grid .file-explorer__item .file-explorer__item--card {
        position: relative;   
        height: 120px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--colors-light-white);
        border: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-m);
    }

    .file-explorer__content--grid .file-explorer__item awc-checkbox {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .file-explorer__item--selected {
        background-color: var(--colors-light-selected-background);
    }

    .file-explorer__content--list .file-explorer__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        font: var(--awc-font-caption-2-medium);
        color: var(--colors-light-white);
        text-transform: uppercase;
    }

    .file-explorer__content--grid .file-explorer__icon.file {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        font: var(--awc-font-caption-2-medium);
        color: var(--colors-light-white);
        text-transform: uppercase;
    }

    .file-explorer__content--grid .file-explorer__icon {
        width: 100%;
        height: 100%;
    }

    .file-explorer__content--grid .file-explorer__icon.folder{
        width: auto;
        height: auto;
    }

    .file-explorer__content--grid .file-explorer__icon.folder svg {
        width: 48px;
        height: 40px;
    }

    .file-explorer__content--grid .file-explorer__file-type svg{
        width: 40px;
        height: 40px;
    }

    .file-explorer__content--list .file-explorer__thumbnail {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 4px;
    }

    .file-explorer__content--grid .file-explorer__thumbnail {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    .file-explorer__name {
        font: var(--awc-font-text-regular-14);
        word-break: break-word;
    }

    .file-explorer__loading {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .file-explorer__error {
        color: var(--colors-light-error);
        padding: 8px;
        text-align: center;
    }

    .file-explorer__footer{
        border-top: 1px solid var(--colors-light-stroke);
        padding: 16px 20px 20px 20px;
    }

    .file-explorer__buttons{
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
`;
