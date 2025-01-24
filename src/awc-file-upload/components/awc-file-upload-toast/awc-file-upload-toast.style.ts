import { css } from "lit";

export const awcFileUploadToastStyle = css`
  :host {
    --awc-toast-width: 300px;
    --awc-toast-height: 40px;
    --awc-toast-padding: 14px 16px;
  }

  .awc-file-upload-toast {
    width: var(--awc-toast-width);
    height: var(--awc-toast-height);
    padding: var(--awc-toast-padding);
    max-width: 100%;
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    z-index: 1000;
    top: 0;

  }

  .awc-file-upload-toast__content--success {
    
  }

  .awc-file-upload-toast__content--warning {
    
  }

  .awc-file-upload-toast__content--info {
    background-color: var(--colors-light-white);
  }

  .awc-file-upload-toast__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-s);
    border-radius: var(--corner)
  }

  .awc-file-upload-toast__icon {

  }

  .awc-file-upload-toast__text {

  }

  .awc-file-upload-toast__actions {

  }

  .awc-file-upload-toast__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
`;
