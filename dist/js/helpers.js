import { currentTodos, todoListing } from "./app.js";
import { Controller } from "./classes/Controller.js";
import { Todo } from "./classes/Todo.js";
export function generateID() {
    return new Date().toISOString();
}
export function render(currentTodos) {
    while (todoListing.firstChild) {
        todoListing.removeChild(todoListing.firstChild);
    }
    const fragment = document.createDocumentFragment();
    currentTodos.forEach(todo => {
        fragment.appendChild(todo.getTodoElement);
    });
    todoListing.appendChild(fragment);
}
export function addTodo() {
    const formInput = document.getElementById('todo-form-title');
    const inputValue = formInput.value;
    if (inputValue.length) {
        currentTodos.addNewTodo(new Todo(inputValue, generateID()));
        Controller.saveTolocalStorage(currentTodos.getCurrentTodos());
        todoListing.appendChild(currentTodos.getLatestTodo().getTodoElement);
        formInput.value = '';
    }
}
export function removeTodo() {
    todoListing.addEventListener('click', (e) => {
        var _a;
        const target = e.target;
        if (target && target.classList.contains(Todo.classNames.iconDelete)) {
            const currentItem = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            currentTodos.deleteById(currentItem === null || currentItem === void 0 ? void 0 : currentItem.dataset.uid);
            currentItem === null || currentItem === void 0 ? void 0 : currentItem.remove();
        }
    });
}
export function closeModal(modalObject) {
    var _a;
    (_a = modalObject.modal) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        var _a, _b, _c, _d;
        const target = e.target;
        if (target === modalObject.save) {
            const todoToSaveID = modalObject.modal.dataset.uid;
            currentTodos.updateTodo(todoToSaveID, modalObject.title.innerText, modalObject.details.innerText);
            const titleToUpdate = (_a = todoListing.querySelector(`.todo[data-uid="${todoToSaveID}"]`)) === null || _a === void 0 ? void 0 : _a.firstChild;
            titleToUpdate.textContent = (_b = currentTodos.getTodoByUid(todoToSaveID)) === null || _b === void 0 ? void 0 : _b.title;
            (_c = modalObject.modal) === null || _c === void 0 ? void 0 : _c.classList.remove('modal-backdrop--open');
            return;
        }
        if ((target.id === 'todo-details-modal') || (target === modalObject.close)) {
            (_d = modalObject.modal) === null || _d === void 0 ? void 0 : _d.classList.remove('modal-backdrop--open');
        }
    });
}
export function openTodoDetails(modalObject) {
    todoListing.addEventListener('click', (e) => {
        var _a;
        const target = e.target;
        if (target.classList.contains('todo')) {
            const targetDataUid = target.getAttribute('data-uid');
            const currentTodoData = currentTodos.getTodoByUid(targetDataUid);
            if (currentTodoData) {
                modalObject.modal.dataset.uid = currentTodoData.id;
                modalObject.title.textContent = currentTodoData.title;
                modalObject.details.textContent = currentTodoData.details;
            }
            (_a = modalObject.modal) === null || _a === void 0 ? void 0 : _a.classList.add('modal-backdrop--open');
        }
    });
}
