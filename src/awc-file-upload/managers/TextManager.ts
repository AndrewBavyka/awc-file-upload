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
    }
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
            upload: msg('Загрузить'),
            cancel: msg('Отмена'),
            addMoreFiles: msg('Добавить ещё'),
            select: msg('Выбрать'),
            logout: msg('Выход'),
            backward: msg('Назад'),
        },
        switcher: {
            fileExternal: msg('Загружать как ссылки'),
        },
        tooltip: {
            fileExternal: msg('Выберите этот параметр, чтобы загружать файлы в виде ссылок. Это позволяет экономить место на диске, так как сами файлы не будут храниться локально.'),
        },
        uploadStatus: {
            status: msg('Загрузка: '),
            statusCounter: msg('Загружены {count} из {totalCount} файлов'),
        },
        emptyState: {
            error: {
                header: msg('Что-то пошло не так'),
                description: msg('К сожалению, возникла проблема. Повторите попытку позже'),
            },
            auth: {
                header: msg('Пожалуйста, авторизуйтесь в {provider}, затем выберите файлы'),
                button: msg('Подключиться к '),
            }
        },
    };

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    hostConnected() {
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
                return msg('Перетащите файлы, вставьте, выберите файлы или импортируйте из:');
            default:
                return '';
        }
    }

    private _getHeaderText(): string {
        switch (this.textState.navigationView) {
            case 'main':
                return msg('Перетащите файлы, вставьте, выберите файлы или импортируйте из:');
            case 'auth':
                return msg(str`Импортировать из ${this.textState.selectedProvider}`);
            case 'list':
                return msg(str`Импортировать из ${this.textState.selectedProvider}`);
            case 'selected':
                return msg(str`${this.textState.selectedFilesCount} файлов выбрано`);
            case 'more':
                    return msg(`Добавить ещё`);
            default:
                return '';
        }
    }
}
