
import { TodoCollection } from "./classes/TodoCollection.js";
import { addTodo, closeModal, openTodoDetails, removeTodo } from "./helpers.js";
import { Modal } from "./types.js";

export const currentTodos = new TodoCollection();

export const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;


const Modal: Modal = {
    modal: document.getElementById('todo-details-modal') as HTMLDivElement,
    title: document.getElementById('todo-details-title') as HTMLHeadingElement,
    details: document.getElementById('todo-details') as HTMLDivElement,
    close: document.getElementById('todo-details-close') as HTMLButtonElement,
    save: document.getElementById('todo-details-save') as HTMLButtonElement
}

document.addEventListener('DOMContentLoaded', () => {
    // Id of todoItem which details are currently open

    todoForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        addTodo()
    })
    removeTodo()
    openTodoDetails(Modal);
    closeModal(Modal);

})








