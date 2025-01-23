import { css } from "lit";

export const awcFileUploadExplorerStyles = css`
    :host {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .file-explorer__header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    .file-explorer__header:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        display: block;
        margin: 0 auto;
        width: 100%;
        border-bottom: 1px solid var(--colors-light-stroke);
    }

    .file-explorer__view-toggle {
        display: flex;
        cursor: pointer;
    }

    .file-explorer__body {
        position: relative;
        overflow: hidden auto;
        min-height: 374px;
        max-height: 374px;
        box-sizing: border-box;
        scroll-behavior: smooth;
        scrollbar-width: thin;
    }

    .file-explorer__content--list {
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 20px 12px;
        box-sizing: border-box;
    }

    .file-explorer__item--list{
        display: flex;
        align-items: center;
        font: var(--awc-font-text-regular-14);
        padding: 6px 8px;
        border-radius: var(--corner-radius-m);
        cursor: pointer;
        transition: background-color 0.3s ease;
        gap: var(--spacing-sm);
    }


    @media (hover: hover) {
        .file-explorer__content--list .file-explorer__item:hover {
            background-color: var(--colors-light-input-background);
        }
    }

    @media (hover: none) {
        .file-explorer__content--list .file-explorer__item:active {
            background-color: var(--colors-light-input-background);
        }
    }

    .file-explorer__content--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 12px;
        padding: 12px 0px 12px 20px;
    }

    .file-explorer__content--grid .file-explorer__item  {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-s);
    }

    .file-explorer__content--grid .file-explorer__item .file-explorer__item--card {
        cursor: pointer;
        position: relative;   
        height: 120px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--colors-light-white);
        border: 1px solid var(--colors-light-stroke);
        border-radius: var(--corner-radius-m);
        transition: background-color .3s ease;
    }

    @media (hover: hover) {
        .file-explorer__content--grid .file-explorer__item .file-explorer__item--card:hover {
            background-color: var(--colors-light-input-background);
        }
    }

    @media (hover: none) {
        .file-explorer__content--grid .file-explorer__item .file-explorer__item--card:active {
            background-color: var(--colors-light-input-background);
        }
    }

    .file-explorer__content--grid .file-explorer__item awc-checkbox {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .file-explorer__item--selected {
        background-color: var(--colors-light-selected-background);
    }

    .file-explorer__item--disabled {
        opacity: .5;
        pointer-events: none;
        touch-action: none;
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

    .file-explorer__file-type {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .file-explorer__content--grid .file-explorer__file-type svg {
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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-titles);
        word-break: break-word;
    }

    .file-explorer__size {
        white-space: nowrap;
        margin-left: auto;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-secondary);
    }

    .file-explorer__loading {
        position: fixed;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        z-index: 99;
    }

    .file-explorer__error {
        color: var(--colors-light-error);
        padding: 8px;
        text-align: center;
    }
`;
