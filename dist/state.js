"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveQuizzes = saveQuizzes;
const types_1 = require("./types");
function saveQuizzes() {
    (0, types_1.saveToStorage)("quizzes", state.items);
}
//# sourceMappingURL=state.js.map