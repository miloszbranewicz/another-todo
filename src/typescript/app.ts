import { Todo } from "./classes/Todo.js";
import { removeTodo, render, submitTodo } from "./helpers.js";


const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
const currentTodos: Array<Todo> = []

removeTodo(todoListing, currentTodos)

const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;
todoForm.addEventListener('submit', (e: Event) => {
    submitTodo(e as MouseEvent,  currentTodos)
    render(currentTodos, todoListing)
    console.log(currentTodos)
})


