import { css } from "lit";

export const awcFileUploadBreadcrumbsStyles = css`
    :host {
        display: inline-block;
        width: 100%;
    }
    .awc-breadcrumbs {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font: var(--awc-font-text-regular-14);
        color: var(--colors-light-text);
    }

    .awc-breadcrumbs__item {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 2px 4px;
        border-radius: var(--corner-radius-m);
        will-change: transform;
        transform: scale3d(1, 1, 1);
        transition: transform .15s, background-color .3s ease;
    }

    .awc-breadcrumbs__item:hover {
        background-color: var(--colors-light-input-background-hover);
    }

    .awc-breadcrumbs__item:active {
        transform: scale3d(1.025, 1.025, 1.025);
        background-color: var(--colors-light-input-background);
    }

    .awc-breadcrumbs__icon {
        display: flex;
    }

    .awc-breadcrumbs__icon svg {
        width: 24px;
        height: 24px;
    }

    .awc-breadcrumbs__separator {
        display: flex;
    }

    .awc-breadcrumbs__ellipsis {
        cursor: default;
        color: var(--colors-light-text-secondary);
        user-select: none;
    }
`;
