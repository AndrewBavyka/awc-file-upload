import { css } from "lit";

export const awcFileStyles = css`
    :host {
        display: block;
    }

    .awc-file__accordion {
        display: grid;
        grid-template-rows: 0fr;
        transition: opacity 0.3s ease-in-out, grid-template-rows 0.3s ease;
        opacity: 0;
    }

    .awc-file__accordion__wrapper {
        overflow: hidden;
    }

    :host([open]) .awc-file__accordion {
        grid-template-rows: 1fr;
        opacity: 1;
    }

    p {
        margin: 0;
    }

    .awc-file {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .awc-file__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        user-select: none;
        cursor: pointer;
    }

    .awc-file__icon {
        transform: rotate(-90deg);
        transition: transform 0.3s ease;
    }

    :host([open]) .awc-file__icon {
        transform: rotate(0deg);
    }

    .awc-file__headline {
        display: flex;
        align-items: center;
        gap: var(--spacing-s);
    }

    .awc-file__title {
        font: var(--awc-font-headline-medium-16);
        color: var(--colors-light-titles);
    }

    .awc-file__counter {
        font: var(--awc-font-text-medium-14);
        color: var(--colors-light-secondary);
    }

    .awc-file__views {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        margin-left: auto;
    }

    /* Icon Button */
    awc-icon-button svg {
        fill: #919BB6;
        transition: fill 0.3s ease;
    }

    awc-icon-button[active] svg {
        fill: var(--colors-light-primary);
    }

    .awc-file__body {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        padding: 8px 2px;
    }

    :host([view="grid"]) .awc-file__body {
        align-items: center;
        gap: var(--spacing-sm);
    }

    :host([view="list"]) .awc-file__body {
        flex-direction: column;
        align-items: flex-start;
    }

    :host([view="list_block"]) .awc-file__body {
        align-items: center;
        gap: var(--spacing-sm);
    }

    .awc-file__button {
        display: inline-flex;
        margin-top: 10px;
    }
`;
