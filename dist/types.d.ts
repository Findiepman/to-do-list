export interface item {
    id: String;
    task: String;
}
export declare function saveToStorage<T>(key: string, value: T): void;
export declare function loadFromStorage<T>(key: string): T | null;
//# sourceMappingURL=types.d.ts.map