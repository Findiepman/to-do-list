import { item } from "./types.js";
import { saveToStorage,loadFromStorage } from "./types.js";

export interface ItemState{
    items: item[];
}

export const state: ItemState = {
    items: loadFromStorage<item[]>("items") ?? []
}

export function saveTasks() {
    saveToStorage("items", state.items)
}