
import { addTodo, closeModal, openTodoDetails, removeTodo } from "./helpers.js";
import { Modal } from "./types.js";



const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
let currentTodos: Array<HTMLLIElement> = []
const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;


const Modal: Modal = {
    modal: document.getElementById('todo-details-modal') as HTMLDivElement,
    modalTitle: document.getElementById('todo-details-title') as HTMLHeadingElement,
    detailsInput: document.getElementById('todo-details') as HTMLTextAreaElement,
    close: document.getElementById('todo-details-close') as HTMLButtonElement,
    save: document.getElementById('todo-details-save') as HTMLButtonElement
}


closeModal(Modal, saveData);

openTodoDetails(todoListing, Modal);
removeTodo(todoListing, currentTodos)

todoForm.addEventListener('submit', (e: Event) => {
    addTodo(e, currentTodos, todoListing);
})




function saveData(Modal: Modal, saveData: any) {
    
}

