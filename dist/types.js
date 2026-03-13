"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveHabits = saveHabits;
exports.loadHabits = loadHabits;
function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(state.habits));
}
function loadHabits() {
    const stored = localStorage.getItem("habits");
    state.habits = stored ? JSON.parse(stored) : [];
}
//# sourceMappingURL=types.js.map