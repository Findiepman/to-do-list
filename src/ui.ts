import { elements } from "./elements";
import { createItem } from "./create";

elements.addItem.addEventListener("click", () => {
    if (elements.itemTask.value != "") {
        createItem(elements.itemTask.value)
    }
})