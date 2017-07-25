import {ToDoItem} from "./TodoItem";

export class ToDo{
    user;
    items;

    constructor(){
        this.user  = "SP";
        this.items = [
            new ToDoItem("Drink Water", false),
            new ToDoItem("Kill Bugs..", false),
            new ToDoItem("Eat Fruits", true),
            new ToDoItem("Fly Car..", false)
        ];
    }
}