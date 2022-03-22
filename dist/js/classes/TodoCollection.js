export class TodoCollection {
    constructor() {
        this.currentTodos = [];
    }
    addNewTodo(todo) {
        this.currentTodos.push(todo);
    }
    getCurrentTodos() {
        return this.currentTodos;
    }
    getTodoByIndex(index) {
        return this.currentTodos[index];
    }
    getTodoByTitle(name) {
        return this.currentTodos.find(item => item.title === name);
    }
    getTodoByUid(uid) {
        return this.currentTodos.find(item => item.id === uid);
    }
    updateTodo(uid, title, details) {
        const index = this.currentTodos.findIndex(item => item.id === uid);
        if (title)
            this.currentTodos[index].title = title;
        if (details)
            this.currentTodos[index].details = details;
    }
    deleteById(uid) {
        this.currentTodos = this.currentTodos.filter(item => item.id !== uid);
    }
    deleteByIndex(index) {
        this.currentTodos = this.currentTodos.splice(index, 1);
    }
    deleteAllTodos() {
        this.currentTodos.length = 0;
    }
    getLatestTodo() {
        return this.currentTodos.slice(-1)[0];
    }
}
