
import { Todo } from "./classes/Todo.js";
import { addTodo, closeModal, openTodoDetails, removeTodo } from "./helpers.js";
import { Modal } from "./types.js";



const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
export let currentTodos: Array<Todo> = []
const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;


const Modal: Modal = {
    modal: document.getElementById('todo-details-modal') as HTMLDivElement,
    modalTitle: document.getElementById('todo-details-title') as HTMLHeadingElement,
    detailsInput: document.getElementById('todo-details') as HTMLDivElement,
    close: document.getElementById('todo-details-close') as HTMLButtonElement,
    save: document.getElementById('todo-details-save') as HTMLButtonElement
}


closeModal(Modal);

openTodoDetails(todoListing, Modal);
removeTodo(todoListing, currentTodos)

todoForm.addEventListener('submit', (e: Event) => {
    addTodo(e, currentTodos, todoListing);
})






