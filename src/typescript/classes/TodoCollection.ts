import { Todo } from "./Todo"

export class TodoCollection {
    private currentTodos: Array<Todo>
    constructor() {
        this.currentTodos = []
    }

    addNewTodo(todo: Todo): void {
        this.currentTodos.push(todo)
    }
    getCurrentTodos(): Array<Todo> {
        return this.currentTodos
    }
    getTodoByIndex(index: number): Todo {
        return this.currentTodos[index]
    }
    getTodoByTitle(name: string): Todo | undefined {
        return this.currentTodos.find(item => item.title === name)
    }
    getTodoByUid(uid: string): Todo | undefined {
        return this.currentTodos.find(item => item.id === uid)
    }
    updateTodo(uid: string, title?: string, details?: string): void {
        const index = this.currentTodos.findIndex(item => item.id === uid)
        
        if (title) this.currentTodos[index].title = title
        if (details) this.currentTodos[index].details = details
    }
    deleteById(uid?: string):void {
        this.currentTodos = this.currentTodos.filter(item => item.id !== uid)
    }
    deleteByIndex(index: number):void {
        this.currentTodos = this.currentTodos.splice(index, 1)
    }
    deleteAllTodos(): void {
        this.currentTodos.length = 0
    }
    getLatestTodo(): Todo {
        return this.currentTodos.slice(-1)[0]
    }
}