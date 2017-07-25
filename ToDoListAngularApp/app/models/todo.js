"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
class ToDo {
    constructor() {
        this.user = "SP";
        this.items = [
            new TodoItem_1.ToDoItem("Drink Water", false),
            new TodoItem_1.ToDoItem("Kill Bugs..", false),
            new TodoItem_1.ToDoItem("Eat Fruits", true),
            new TodoItem_1.ToDoItem("Fly Car..", false)
        ];
    }
}
exports.ToDo = ToDo;
//# sourceMappingURL=todo.js.map