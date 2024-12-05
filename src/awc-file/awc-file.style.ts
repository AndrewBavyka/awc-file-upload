import { css } from "lit";

export const awcFileStyles = css`
    p {
        margin: 0;
    }

    .awc-file {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: var(--spacing-s);
    }

    .awc-file__header {
        cursor: pointer;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-xs);
    }

    .awc-file__icon {
    }

    .awc-file__headline {
        display: flex;
        align-items: center;
        gap: var(--spacing-s);
    }

    .awc-file__title {
        font: var(--awc-font-headline-medium-16);
        color: var(----colors-light-titles);
    }

    .awc-file__counter {
        font: var(--awc-font-text-medium-14);
        color: var(--colors-light-secondary);
    }

    .awc-file__views {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
    }

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
        
    }

`;