import { css } from "lit";

export const awcFileUploadToastStyle = css`
  :host {
    --awc-toast-width: 300px;
    --awc-toast-height: 48px;
    --awc-toast-padding: 0 16px;
    
    --awc-toast-info-background: var(--colors-light-white);
    --awc-toast-color: var(--colors-dark-titles);
  }

  .awc-file-upload-toast {
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .awc-file-upload-toast__content--success {
    background-color: var(--global-green-400);
  }

  .awc-file-upload-toast__content--warning {
    background-color: var(--global-red-400);
  }

  .awc-file-upload-toast__content--info {
    background-color: var(--awc-toast-info-background);
    box-shadow: 0px 0px 2px 0px rgba(64, 72, 98, 0.12);
  }

  .awc-file-upload-toast__content--info .awc-file-upload-toast__text  {
    --awc-toast-color: var(--colors-light-titles);
    color: var(--awc-toast-color);
  }

  .awc-file-upload-toast__content--success  .awc-file-upload-toast__text  {
    --awc-toast-color: var(--colors-dark-titles);
    color: var(--awc-toast-color);
  }

  .awc-file-upload-toast__content--warning  .awc-file-upload-toast__text  {
    --awc-toast-color: var(--colors-dark-titles);
    color: var(--awc-toast-color);
  }

  .awc-file-upload-toast__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-s);
    border-radius: var(--corner-radius-m);
    width: var(--awc-toast-width);
    height: var(--awc-toast-height);
    padding: var(--awc-toast-padding);
    max-width: 100%;
  }

  .awc-file-upload-toast__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .awc-file-upload-toast__text {
    margin: 0;
    font: var(--awc-font-text-regular-14);
  }

  .awc-file-upload-toast__close {
    width: 16px;
    height: 16px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .awc-file-upload-toast__close svg {
    fill: var(--colors-light-secondary);
    transition: fill 0.3s ease;
  }

  .awc-file-upload-toast__close:hover svg {
    fill: var(--colors-light-primary);
  }

`;
