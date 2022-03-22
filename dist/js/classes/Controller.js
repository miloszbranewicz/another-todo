export class Controller {
    constructor() { }
    static getInstance() {
        if (!Controller.instance) {
            Controller.instance = new Controller();
        }
        return Controller.instance;
    }
    static saveTolocalStorage(itemsToSave) {
        const itemsAsString = JSON.stringify(itemsToSave);
        localStorage.setItem('todos', itemsAsString);
    }
    static getTodosFromStorage() {
        const todos = localStorage.getItem('todos');
        if (todos) {
            return JSON.parse(todos);
        }
    }
}
