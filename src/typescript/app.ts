import { Todo } from "./classes/Todo";
const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;
todoForm.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
    const todoInput: HTMLInputElement = document.getElementById('todo-form-title') as HTMLInputElement;
    const todoInputValue:string = todoInput.value;

    todoListing.innerHTML = new Todo(todoInputValue).getTodoItem;


})
