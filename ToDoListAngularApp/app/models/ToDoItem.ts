export class ToDoItem{
    action: string;
    done: boolean;

    constructor(action:string, done:boolean){
        this.done = done;
        this.action = action;
    }
}