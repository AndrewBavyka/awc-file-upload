import { createContext } from '@lit/context';
import { SelectedFileManager } from './SelectedFileManager';

export const selectedFileManagerContext = createContext<SelectedFileManager>('selected-file-manager');
