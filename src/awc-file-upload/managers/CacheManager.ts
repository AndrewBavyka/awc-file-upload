import { ProviderFile } from "../interfaces/ProviderFile";

export class CacheManager {
    private cache = new Map<string, Map<number, ProviderFile[]>>();
    private maxCacheSize = 100;

    get(path: string, offset: number): ProviderFile[] {
        return this.cache.get(path)?.get(offset) || [];
    }

    set(path: string, offset: number, items: ProviderFile[]) {
        if (this.cache.size >= this.maxCacheSize) {
            this.evictOldestEntry();
        }
        if (!this.cache.has(path)) {
            this.cache.set(path, new Map());
        }
        this.cache.get(path)?.set(offset, items);
    }

    private evictOldestEntry() {
        const firstKey = this.cache.keys().next().value;
        if (firstKey) {
            this.cache.delete(firstKey);
        }
    }

    getAll(path: string): ProviderFile[] {
        return Array.from(this.cache.get(path)?.values() || []).flat();
    }
}
