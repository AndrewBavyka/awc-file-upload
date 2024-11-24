import { SVGTemplateResult } from "lit";
import { ProviderFile, } from "./ProviderFile";

export interface SelectedFile {
    file: ProviderFile;
    provider: string;
    providerIcon: SVGTemplateResult;
    preview?: string;
}
