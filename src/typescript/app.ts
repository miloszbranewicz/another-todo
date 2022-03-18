
import { addTodo, removeTodo } from "./helpers.js";


const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
let currentTodos: Array<HTMLLIElement> = []
const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;



removeTodo(todoListing, currentTodos)

todoForm.addEventListener('submit', (e: Event) => {
    addTodo(e, currentTodos, todoListing);
})


