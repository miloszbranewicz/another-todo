
import { Controller } from "./classes/Controller.js";
import { TodoCollection } from "./classes/TodoCollection.js";
import { addTodo, closeModal, openTodoDetails, removeTodo, render } from "./helpers.js";
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
    
    todoListing.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLDivElement;

        if (target && target.classList.contains('todo__icon-done')) {
            const currentItem = target.parentElement?.parentElement
            
            if (currentItem) {
                if (currentItem.style.opacity === '0.3'){
                    currentItem.style.opacity = '1'
                }else {
                    currentItem.style.opacity = '0.3'
                }
            }
        }
    })

    todoForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        addTodo()
    })
    removeTodo()
    openTodoDetails(Modal);
    closeModal(Modal);

})







