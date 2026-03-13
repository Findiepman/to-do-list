"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToStorage = saveToStorage;
exports.loadFromStorage = loadFromStorage;
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    if (!data)
        return null;
    try {
        return JSON.parse(data);
    }
    catch (error) {
        console.error(`Error parsing storage key "${key}"`, error);
        return null;
    }
}
//# sourceMappingURL=types.js.map