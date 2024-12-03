import { css } from "lit";

export const awcFileUploadProgressStyles = css`
    :host {
        display: inline-flex;
    }

    .awc-file-upload-progress__compact {
        transform: rotate(-90deg);
    }

    .awc-file-upload-progress__background {
        stroke: #e7ecfc; 
    }

    .awc-file-upload-progress__foreground {
        stroke: #3761e9;
        transition: stroke-dashoffset 0.3s ease;
    }
`;