import { css } from "lit";

export const AwcFileUploadDropzoneStyles = css`
    :host {
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--colors-light-white);
        z-index: 1;
    }

    :host([active]) {
        display: block;
    }

    .awc-file-upload-dropzone {
        background-color: #3761E91F;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: inherit;
        height: inherit;
    }

    .awc-file-upload-dropzone__info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .awc-file-upload-dropzone__info svg {
        width: 48px;
        height: 48px;
    }

    .awc-file-upload-dropzone__info p {
        user-select: none;
        margin: 0;
        padding: 0;
        font: var(--awc-font-headline-regular-16);
        color: var(--colors-light-titles);
    }


`;