import { SVGTemplateResult } from "lit"
import { ProviderFile } from "./ProviderFile"

export type RequestOptions = {
    method?: string
    data?: Record<string, unknown>
    skipPostResponse?: boolean
    signal?: AbortSignal
    authFormData?: unknown
    qs?: Record<string, string>
}

export interface ProviderInfo {
    name: string
    provider: string
    icon: SVGTemplateResult,
    login(options?: RequestOptions): Promise<void>
    logout(options?: RequestOptions): Promise<void>;
    list(
        directory: string | null,
        options: RequestOptions,
    ): Promise<{
        username: string
        nextPagePath: string | null
        items: ProviderFile[]
    }>
}
