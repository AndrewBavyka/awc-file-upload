import AwcFileUpload from "./awc-file-upload/awc-file-upload";

// providers
import AwcFileUploadProviderLocal from "./awc-file-upload/providers/awc-file-upload-provider-local/awc-file-upload-provider-local";
import AwcFileUploadProviderYandexDisk from "./awc-file-upload/providers/awc-file-upload-provider-yandex-disk/awc-file-upload-provider-yandex-disk";
import AwcFileUploadProviderGoogleDrive from "./awc-file-upload/providers/awc-file-upload-provider-google-drive/awc-file-upload-provider-google-drive";

// views
import AwcFileUploadAuth from "./awc-file-upload/views/awc-file-upload-auth/awc-file-upload-auth";
import AwcFileUploadHome from "./awc-file-upload/views/awc-file-upload-home/awc-file-upload-home";
import AwcFileUploadList from "./awc-file-upload/views/awc-file-upload-list/awc-file-upload-list";
import AwcFileUploadSelected from "./awc-file-upload/views/awc-file-upload-selected/awc-file-upload-selected";
import AwcFileUploadError from "./awc-file-upload/views/awc-file-upload-error/awc-file-upload-error";

// components
import AwcFileUploadViewWrapper from "./awc-file-upload/components/awc-file-upload-view-wrapper/awc-file-upload-view-wrapper";
import AwcFileUploadExplorer from "./awc-file-upload/components/awc-file-upload-explorer/awc-file-upload-explorer";
import AwcFileUploadBreadcrumbs from "./awc-file-upload/components/awc-file-upload-breadcumbs/awc-file-upload-breadcumbs";
import AwcFileUploadFooter from "./awc-file-upload/components/awc-file-upload-footer/awc-file-upload-footer";
import AwcFileUploadHeader from "./awc-file-upload/components/awc-file-upload-header/awc-file-upload-header";
import AwcFileUploadProgress from "./awc-file-upload/components/awc-file-upload-progress/awc-file-upload-progress";
import AwcFileUploadDropZone from "./awc-file-upload/providers/awc-file-upload-provider-local/awc-file-upload-dropzone/awc-file-upload-dropzone";
// import AwcFileUploadToast from "./awc-file-upload/components/awc-file-upload-toast/awc-file-upload-toast";
import { AwcFileUploadNotification } from "./awc-file-upload/components/awc-file-upload-notification/awc-file-upload-notification";
import { AwcFileUploadRestrictions } from "./awc-file-upload/components/awc-file-upload-restrictions/awc-file-upload-restrictions";

// awc-file
import AwcFileButton from "./awc-file/awc-file-button/awc-file-button";
import AwcFileItem from "./awc-file/awc-file-item/awc-file-item";
import AwcFile from "./awc-file/awc-file";
import AwcFileUploadAddMore from "./awc-file-upload/views/awc-file-upload-add-more/awc-file-upload-add-more";

export default {
    AwcFileUpload,
    AwcFileUploadProviderLocal,
    AwcFileUploadProviderYandexDisk,
    AwcFileUploadProviderGoogleDrive,

    AwcFileUploadAuth,
    AwcFileUploadHome,
    AwcFileUploadList,
    AwcFileUploadSelected,
    AwcFileUploadError,
    AwcFileUploadAddMore,

    AwcFileUploadViewWrapper,
    AwcFileUploadExplorer,
    AwcFileUploadBreadcrumbs,
    AwcFileUploadFooter,
    AwcFileUploadHeader,
    AwcFileUploadProgress,
    AwcFileUploadDropZone,
    AwcFileUploadNotification,
    AwcFileUploadRestrictions,

    AwcFileButton,
    AwcFile,
    AwcFileItem,
}