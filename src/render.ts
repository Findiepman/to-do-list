import { state } from "./state";
import { elements } from "./elements";

export function render() {
    console.log('rendering...');

    state.items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "todo-item";

        elements.gridItems.appendChild(li);

        const input = document.createElement("input");

        input.type = "checkbox";
        
        input.id = "t-1";
        li.appendChild(input);

        const label = document.createElement("label");
        label.htmlFor = "t-1";
        label.textContent = item;
        li.appendChild(label);
    })
}