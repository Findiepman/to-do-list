import { elements } from "./elements.js";
import { createItem } from "./create.js";
elements.addItem.addEventListener("click", () => {
    if (elements.itemTask.value != "") {
        createItem(elements.itemTask.value);
    }
});
//# sourceMappingURL=ui.js.map