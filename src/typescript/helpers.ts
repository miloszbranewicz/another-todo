import { currentTodos, todoListing } from "./app.js";
import { Todo } from "./classes/Todo.js";
import { Modal } from "./types.js";


/**
 * Generate a unique ID for a given object
 * @returns A string
 */
export function generateID(): string {
    return new Date().toISOString()
}

/**
 * It renders the todo list.
 */
export function render(): void {
    while (todoListing.firstChild) {
        todoListing.removeChild(todoListing.firstChild)
    }
    const fragment = document.createDocumentFragment()
    currentTodos.getCurrentTodos().forEach(todo => {
        fragment.appendChild(todo.getTodoElement)
    })
    todoListing.appendChild(fragment)
}

/**
 * It adds a new todo to the current todos.
 */
export function addTodo(): void {
   
    const formInput = document.getElementById('todo-form-title') as HTMLInputElement;
    const inputValue = formInput.value;
    if (inputValue.length) {
        currentTodos.addNewTodo(new Todo(inputValue, generateID()))
        todoListing.appendChild(currentTodos.getLatestTodo().getTodoElement)
        formInput.value = ''
    }
    console.log(currentTodos.getCurrentTodos())
}

/**
 * It removes the todo item from the list.
 */
export function removeTodo() {
    todoListing.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement | null;
        if (target && target.classList.contains(Todo.classNames.iconDelete)) {
            const currentItem = target.parentElement?.parentElement
            currentTodos.deleteById(currentItem?.dataset.uid)
            currentItem?.remove()
        }
    })
}


/**
 * It closes the modal when the user clicks on the modal backdrop, the close button, or the save button.
 * @param {Modal} modalObject - Modal
 */
export function closeModal(modalObject: Modal): void {
    modalObject.modal?.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLDivElement | HTMLButtonElement;
        if (target === modalObject.save) {                
                modalObject.modal?.classList.remove('modal-backdrop--open');
                return   
        }
        if ((target.id === 'todo-details-modal') || (target === modalObject.close)) {
            modalObject.modal?.classList.remove('modal-backdrop--open');
        }
    });
}

/**
 * It listens for clicks on the todo list and if the click is on a todo item or the todo title, it
 * opens clicked todo details in modal window.
 * @param {HTMLUListElement} todoListing - HTMLUListElement - The list of todos.
 * @param {Modal} modalObject - Modal
 */
export function openTodoDetails(todoListing: HTMLUListElement, modalObject: Modal): void {
    todoListing.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLLIElement | HTMLHeadingElement;

        if (target.classList.contains('todo')) {
            const targetDataUid = target.getAttribute('data-uid') as string;
            const currentTodoData = currentTodos.getTodoByUid(targetDataUid);
            if (currentTodoData) {
                modalObject.modalTitle.textContent = currentTodoData.title
                if (currentTodoData.details) {
                    modalObject.detailsInput.textContent = currentTodoData.details
                }
            }
            modalObject.modal?.classList.add('modal-backdrop--open');
        }
    })
}


