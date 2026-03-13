var _a;
import { saveToStorage, loadFromStorage } from "./types.js";
export const state = {
    items: (_a = loadFromStorage("items")) !== null && _a !== void 0 ? _a : []
};
export function saveTasks() {
    saveToStorage("items", state.items);
}
//# sourceMappingURL=state.js.map