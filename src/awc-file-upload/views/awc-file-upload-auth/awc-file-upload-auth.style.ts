import { css } from "lit";

export const awcFileUploadAuthStyles = css`
    :host {
        /* display: flex; */
        /* position: absolute; */
        /* height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transform: translateX(0%);
        justify-content: center;
        align-items: center;
        background-color: var(--colors-light-white); */
    }

    .awc-auth-view__description {
        margin: 0;
        font: var(--awc-font-text-regular-15);
        color: var(--colors-light-text);
        text-align: center;
        max-width: 330px;
    }

    .awc-auth-view__icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .awc-auth-view__icon svg {
        width: 64px;
        height: 64px;
    }
`;