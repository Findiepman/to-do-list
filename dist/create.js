import { saveTasks, state } from "./state.js";
import { render } from "./render.js";
export function createItem(name) {
    const existingQuiz = state.items.find(task => task.task === name.toLocaleLowerCase());
    if (!existingQuiz && name) {
        const newTask = {
            task: name,
            id: Date.now().toString()
        };
        state.items.push(newTask);
        saveTasks();
        render();
    }
}
export function deleteItem(id) {
    state.items = state.items.filter(h => h.id !== id);
    saveTasks();
    render();
}
//# sourceMappingURL=create.js.map