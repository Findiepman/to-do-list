import { state } from "./state.js";
import { elements } from "./elements.js";
import { deleteItem } from "./create.js";

export function render() {
    console.log('rendering...');
    elements.gridItems.innerHTML = ""

    state.items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        const input = document.createElement("input");

        input.type = "checkbox";
        
        input.id = "t-1";
        li.appendChild(input);

        const label = document.createElement("label");
        label.htmlFor = "t-1";
        li.appendChild(label);

        const span1 = document.createElement("span")
        span1.className = "box"
        label.appendChild(span1)
        const span2 = document.createElement("span")
        span2.className = "text"
        span2.textContent = item.task.toString()
        label.appendChild(span2)
        const deletebtn = document.createElement("button")
        deletebtn.className = "delete"
        deletebtn.textContent = "delete"

        deletebtn.addEventListener("click", () => {
            deleteItem(item.id)
            console.log("wefjwelfjkew")
        })
        li.appendChild(deletebtn)


        elements.gridItems.appendChild(li);
    })
}