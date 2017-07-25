import { Component } from "@angular/core";
import{ ToDo} from "./models/todo";
import {ToDoItem} from "./models/ToDoItem"

@Component(
    {
        selector: "app-todo",
        moduleId: module.id,
        templateUrl: "./app.component.html"
    }
)

export class AppComponent {
    todo = new ToDo();

    getName(){
        return this.todo.user;
    }

    getToDoList(){
        return this.todo.items;
    }

    addItem(newItem){
        if (newItem!= "") {
            this.todo.items.push(new ToDoItem(newItem, false));
        }
    }

    deleteItem(item){
        if (item != "") {
            console.log("Deleting the Item ->" + item);
            this.todo.items = this.todo.items.filter(d => d.action != item);
        }
    }

    getPendingToDo(){
        return this.todo.items.filter(x => !x.done).length;
    }

    getToDoListCountClass(){
        return "p1 " + (this.todo.items.length > 3 ? "bg-warning":"bg-primary");
    }

    fontSize: string = "20px";
    setFontSizeColor(){
        return {
            fontSize: "30px", color: this.getPendingToDo() > 3 ? "red" : "blue"
        };
    }

    lastUpdateOn(){
        return Date.now();
    }
}