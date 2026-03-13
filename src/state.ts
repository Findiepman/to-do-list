import { item } from "./types";
import { saveToStorage,loadFromStorage } from "./types";

export interface ItemState{
    items: item[];
}

export const state: ItemState = {
    items: loadFromStorage<item[]>("items") ?? []
}

export function saveQuizzes() {
    saveToStorage("quizzes", state.items)
}