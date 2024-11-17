export interface ProviderFile {
    /** Уникальный идентификатор элемента. */
    id: string;

    /** Имя файла или папки. */
    name: string;

    /** Флаг, определяющий, является ли элемент папкой. */
    isFolder: boolean;

    /** Ссылка на публичную папку */
    publicFolder: string;

    /** Ссылка на публичный файл  */
    publicFile: string;

    /** URL иконки папки. */
    icon: string;

    /** URL миниатюры (только для файлов). */
    thumbnail?: string;

    /** MIME-тип (только для файлов). */
    mimeType?: string;

    /** Ссылка на файл заугрузки */
    file?: string;

    /** Путь для запроса элемента (для папок — путь к каталогу, для файлов — идентификатор для загрузки). */
    requestPath: string;

    /** Дата последнего изменения в формате ISO 8601. */
    modifiedDate: string;

    /** Размер файла в байтах (только для файлов). */
    size?: number;

    /** Произвольные данные, добавленные для элемента. */
    custom?: Record<string, any>;

    /** 
     * Тип ссылки на файл. 
     * Если `externalLink`, то используется внешняя ссылка (например, publicFile или publicFolder). 
     * Если `uploadedFile`, то файл загружается полностью.
     */ 
    linkType?: "externalLink" | "uploadedFile";
}

export interface ProviderData {
    /** Имя пользователя или email учетной записи, к которой обращается провайдер. */
    username: string;

    /** Список файлов и папок в директории. */
    items: ProviderFile[];

    /** Путь для запроса следующей страницы (если есть пагинация). */
    nextPagePath: string | null;
}
