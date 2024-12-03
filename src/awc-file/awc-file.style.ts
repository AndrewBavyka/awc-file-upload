import { css } from "lit";

export const awcFileStyles = css`
    p {
        margin: 0;
    }

    .awc-file {
      
    }
    .awc-file__header {
        cursor: pointer;
        display: flex;
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

    .awc-file__body {
    }

`;