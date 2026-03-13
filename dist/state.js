"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
exports.saveQuizzes = saveQuizzes;
const types_1 = require("./types");
exports.state = {
    items: (0, types_1.loadFromStorage)("items") ?? []
};
function saveQuizzes() {
    (0, types_1.saveToStorage)("quizzes", exports.state.items);
}
//# sourceMappingURL=state.js.map