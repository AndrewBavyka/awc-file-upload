import { map, MapStore } from 'nanostores';
import { SVGTemplateResult } from "lit";
import { ProviderFile } from "../interfaces/ProviderFile";
import { SelectedFile } from "../interfaces/SelectedFile";

interface SelectedFilesState {
    selectedFiles: Map<string, SelectedFile>;
    extraData: Record<string, any>;
    uploadLimit: number;
    maxFileSize: number;
    globalExternalMode: boolean; // Глобальный режим
    externalMode: boolean; // Локальный режим
}

export const selectedFilesStore: MapStore<SelectedFilesState> = map({
    selectedFiles: new Map(),
    extraData: {},
    uploadLimit: 0,
    maxFileSize: 0,
    globalExternalMode: false,
    externalMode: false,
});

export const toggleExternalMode = (isExternalMode: boolean) => {
    selectedFilesStore.setKey('externalMode', isExternalMode);
};

export const toggleGlobalExternalMode = (isGlobalMode: boolean) => {
    selectedFilesStore.setKey('globalExternalMode', isGlobalMode);
};

export const getAllSelectedFiles = (): SelectedFile[] => {
    return Array.from(selectedFilesStore.get().selectedFiles.values());
}

export const addSelectedFile = (file: ProviderFile, provider: string, providerIcon?: SVGTemplateResult) => {
    const state = selectedFilesStore.get();

    // Проверка превышения лимита количества файлов
    const currentFileCount = state.selectedFiles.size;
    if (currentFileCount >= state.uploadLimit) {
        console.warn(`Cannot add file: upload limit of ${state.uploadLimit} reached.`);
        return;
    }

    // Проверка размера файла
    // if (!checkFileSize(file)) {
    //     console.warn(`Cannot add file: size exceeds the maximum limit of ${state.maxFileSize} bytes.`);
    //     return;
    // }

    if (!state.selectedFiles.has(file.id)) {
        const isGlobalMode = state.globalExternalMode && provider !== 'local';
        const fileSource = isGlobalMode ? 'fileExternal' : 'file';
        state.selectedFiles.set(file.id, { file: { ...file, fileSource }, provider, providerIcon });
        selectedFilesStore.setKey('selectedFiles', new Map(state.selectedFiles));
    }
};

export const removeSelectedFile = (fileId: string) => {
    const state = selectedFilesStore.get();

    if (state.selectedFiles.delete(fileId)) {
        selectedFilesStore.setKey('selectedFiles', new Map(state.selectedFiles));
    }
};

export const getSelectedFileById = (fileId: string) => {
    const state = selectedFilesStore.get();
    return state.selectedFiles.get(fileId);
};

export const setFileLimits = (uploadLimit: number, maxFileSize: number) => {
    selectedFilesStore.setKey('uploadLimit', uploadLimit);
    selectedFilesStore.setKey('maxFileSize', maxFileSize);
};

/**
 * Проверяет, соответствует ли размер файла максимальному лимиту.
 *
 * @param {ProviderFile} file - Объект файла, который нужно проверить. Должен содержать свойство `size` (размер файла).
 * @returns {boolean} - Возвращает `true`, если размер файла не превышает `maxFileSize`, и `false`, если превышает.
 */
export const checkFileSize = (file: ProviderFile): boolean => {
    const state = selectedFilesStore.get();
    return state.maxFileSize > 0 && file.size! <= state.maxFileSize;
}

export const getUploadLimit = (): number => {
    const state = selectedFilesStore.get();
    return state.uploadLimit;
}

export const setExtraData = (extraData: Record<string, any>) => {
    const state = selectedFilesStore.get();
    selectedFilesStore.set({
        ...state,
        extraData: {
            ...state.extraData,
            ...extraData,
        },
    });
};

export const getExtraData = () => {
    const state = selectedFilesStore.get();
    return state.extraData;
}

export const clearSelectedFiles = () => {
    const state = selectedFilesStore.get();
    state.selectedFiles.clear();
    selectedFilesStore.setKey('selectedFiles', new Map(state.selectedFiles));
};

export const toogleFileSourceMode = (fileId: string) => {
    const state = selectedFilesStore.get();
    const selectedFile = state.selectedFiles.get(fileId);

    if (selectedFile) {
        selectedFile.file.fileSource = selectedFile.file.fileSource === 'file' ? 'fileExternal' : 'file';
        selectedFilesStore.setKey('selectedFiles', new Map(state.selectedFiles));
    }
};