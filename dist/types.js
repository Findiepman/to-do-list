export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
export function loadFromStorage(key) {
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