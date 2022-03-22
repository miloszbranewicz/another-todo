import { TodoCollection } from "./classes/TodoCollection.js";
import { addTodo, closeModal, openTodoDetails, removeTodo } from "./helpers.js";
export const currentTodos = new TodoCollection();
export const todoListing = document.getElementById('todo-listing');
const todoForm = document.getElementById('todo-form');
const Modal = {
    modal: document.getElementById('todo-details-modal'),
    title: document.getElementById('todo-details-title'),
    details: document.getElementById('todo-details'),
    close: document.getElementById('todo-details-close'),
    save: document.getElementById('todo-details-save')
};
document.addEventListener('DOMContentLoaded', () => {
    todoListing.addEventListener('click', (e) => {
        var _a;
        const target = e.target;
        if (target && target.classList.contains('todo__icon-done')) {
            const currentItem = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (currentItem) {
                if (currentItem.style.opacity === '0.3') {
                    currentItem.style.opacity = '1';
                }
                else {
                    currentItem.style.opacity = '0.3';
                }
            }
        }
    });
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });
    removeTodo();
    openTodoDetails(Modal);
    closeModal(Modal);
});
