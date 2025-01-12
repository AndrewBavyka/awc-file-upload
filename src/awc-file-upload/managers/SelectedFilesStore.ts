import { map, MapStore, computed } from 'nanostores';
import { SVGTemplateResult } from "lit";
import { ProviderFile } from "../interfaces/ProviderFile";
import { SelectedFile } from "../interfaces/SelectedFile";

interface SelectedFilesState {
    selectedFiles: Map<string, SelectedFile>;
    extraData: Record<string, any>;
    uploadLimit: number;
    maxFileSize: number;
    externalMode: boolean;
}

export const selectedFilesStore: MapStore<SelectedFilesState> = map({
    selectedFiles: new Map(),
    extraData: {},
    uploadLimit: 0,
    maxFileSize: 0,
    externalMode: false,
});

export const getAllSelectedFiles = (): SelectedFile[] => {
    return Array.from(selectedFilesStore.get().selectedFiles.values());
}

export const addSelectedFile = (file: ProviderFile, provider: string, providerIcon?: SVGTemplateResult) => {
    const state = selectedFilesStore.get();

    if (!state.selectedFiles.has(file.id)) {
        state.selectedFiles.set(file.id, { file, provider, providerIcon });
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

export const toggleExternalMode = (isExternalMode: boolean) => {
    const state = selectedFilesStore.get();
    state.selectedFiles.forEach((file, id) => {
        if (file.provider !== 'local') {
            file.file.fileSource = isExternalMode ? 'fileExternal' : 'file';
        }
    });
    selectedFilesStore.set({
        ...state,
        externalMode: isExternalMode,
        selectedFiles: new Map(state.selectedFiles),
    });
};

export const checkFileSize = (file: ProviderFile): boolean => {
    const state = selectedFilesStore.get();
    return state.maxFileSize > 0 && file.size! > state.maxFileSize;
}

export const checkNumberOfFiles = (): boolean => {
    const state = selectedFilesStore.get();
    return state.uploadLimit > 0 && state.selectedFiles.size >= state.uploadLimit;
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