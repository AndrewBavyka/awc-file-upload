import { ReactiveController, ReactiveControllerHost } from 'lit';
import { msg, localized, str} from '@lit/localize';


interface TextState {
    header: string;
    subtitle: string;
    navigationView: string;
    selectedProvider: string | null;
    selectedFilesCount: number;
    buttonTexts: {
        upload: string;
        cancel: string;
        addMoreFiles: string;
        select: string;
        logout: string;
        backward: string;
    };
    switcher: {
        fileExternal: string,
    };
    tooltip: {
        fileExternal: string,
    };
    uploadStatus: {
        status: string,
        statusCounter: string;
    };
    emptyState: {
        error: {
            header: string;
            description: string;
        },
        auth: {
            header: string;
            button: string,
        }
    };
    dropzone: {
        header: string;
    };
    dialog: {
        heading: string;
        description: string;
        buttons: {
            ok: string;
            cancel: string;
        }
    };
    providers: {
        local: string;
        yandexDisk: string;
        googleDrive: string;
        dropbox: string;
        oneDrive: string;
        box: string;
    };
}

export class TextManager implements ReactiveController {
    host: ReactiveControllerHost;

    textState: TextState = {
        header: '',
        subtitle: '',
        navigationView: 'main',
        selectedProvider: null,
        selectedFilesCount: 0,
        buttonTexts: {
            upload: msg('Upload'),
            cancel: msg('Cancel'),
            addMoreFiles: msg('Add more'),
            select: msg('Select'),
            logout: msg('Log out'),
            backward: msg('Back'),
        },
        switcher: {
            fileExternal: msg('Upload as links'),
        },
        tooltip: {
            fileExternal: msg('Choose this option to upload files as links. This saves disk space as files will not be stored locally.'),
        },
        uploadStatus: {
            status: msg('Uploading: '),
            statusCounter: msg('Uploaded {count} of {totalCount} files'),
        },
        emptyState: {
            error: {
                header: msg('Something went wrong'),
                description: msg('Unfortunately, there was a problem. Please try again later'),
            },
            auth: {
                header: msg('Please authorize in {provider}, then select files'),
                button: msg('Connect to '),
            }
        },
        dropzone: {
            header: msg('Drop files here'),
        },
        dialog: {
            heading: msg('Unsaved changes'),
            description: msg('Your changes will not be saved'),
            buttons: {
                ok: msg('Ok'),
                cancel: msg('Cancel'),
            }
        },
        providers: {
            local: msg('My device'),
            yandexDisk: msg('Yandex.Disk'),
            googleDrive: msg('Google Drive'),
            dropbox: msg('Dropbox'),
            oneDrive: msg('OneDrive'),
            box: msg('Box'),
        },
    };

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    hostConnected() {
        this._updateTexts();
        this.host.requestUpdate();
    }

    hostDisconnected() { }

    updateState(updates: Partial<TextState>): void {
        this.textState = { ...this.textState, ...updates };
        this._updateTexts();
        this.host.requestUpdate();
    }

    private _updateTexts(): void {
        this.textState.header = this._getHeaderText();
        this.textState.subtitle = this._getSubtitleText();
    }

    private _getSubtitleText(): string {
        switch (this.textState.navigationView) {
            case 'more':
                return msg('Drop files, paste, select files or import from:');
            default:
                return '';
        }
    }

    private _getHeaderText(): string {
        switch (this.textState.navigationView) {
            case 'main':
                return msg('Drop files here, browse files, or import from:');
            case 'auth':
                return msg(str`Import from ${this.textState.selectedProvider}`);
            case 'list':
                return msg(str`Import from ${this.textState.selectedProvider}`);
            case 'selected':
                return msg(str`${this.textState.selectedFilesCount} files selected`);
            case 'more':
                return msg('Add more');
            default:
                return '';
        }
    }
}
