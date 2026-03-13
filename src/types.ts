export interface item {
    name: String;
    id: String;
    task: String;
}

export function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(state.habits));
}

export function loadHabits() {
    const stored = localStorage.getItem("habits");
    state.habits = stored ? JSON.parse(stored) : [];
}