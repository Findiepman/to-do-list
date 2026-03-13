"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = createItem;
const state_1 = require("./state");
function createItem(task) {
    const existingTask = state_1.state.tasks.find(task => task.task === task.toLowercase());
}
//# sourceMappingURL=create.js.map