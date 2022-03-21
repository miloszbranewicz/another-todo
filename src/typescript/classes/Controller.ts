import { Todo } from "./Todo"

export class Controller {
    private static instance: Controller
    private constructor() { }

    public static getInstance(): Controller {
        if (!Controller.instance) {
            Controller.instance = new Controller()
        }
        return Controller.instance
    }

    public static saveTolocalStorage(itemsToSave: Array<Todo>): void {
        const itemsAsString = JSON.stringify(itemsToSave)
        localStorage.setItem('todos', itemsAsString)
    }
    public static getTodosFromStorage() {
        const todos = localStorage.getItem('todos')
        if (todos) {

            console.log(JSON.parse(todos))
        }
    }
}