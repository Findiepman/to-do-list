import { saveTasks, state } from "./state"

export function createItem(task: string) {
    if (task) {
        const newTask = {
            task: task,
            id: Date.now().toString()
        }
        state.items.push(newTask)
        saveTasks()
    }
}
export function deleteItem(id: string) {
    state.items.filter(h => h.id !== id)
}