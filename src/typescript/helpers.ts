import { Todo } from "./classes/Todo.js";



/**
 * It renders the todo list.
 * @param currentTodos - Array<Todo>
 * @param {HTMLUListElement} todoListing - HTMLUListElement
 */
export function render(currentTodos: Array<Todo>, todoListing: HTMLUListElement): void {
    while (todoListing.firstChild) {
        todoListing.removeChild(todoListing.firstChild)
    }
    const fragment = document.createDocumentFragment()
    currentTodos.forEach(todo => {
        fragment.appendChild(todo.getTodoElement)
    })
    todoListing.appendChild(fragment)
}


/**
 * Add a new todo to the list of todos
 * @param {Event} e - Event - The event object that was triggered.
 * @param currentTodos - The array of todo elements that are currently in the DOM.
 * @param {HTMLUListElement} todoListing - The ul element that contains the todos.
 */
export function addTodo(e: Event, currentTodos: Array<HTMLLIElement>, todoListing: HTMLUListElement):void {
    e.preventDefault();
    const formInput = document.getElementById('todo-form-title') as HTMLInputElement;
    const inputValue = formInput.value;
    if (inputValue.length) {
        updateArrayOfTodos(currentTodos, 'add', null, new Todo(inputValue).getTodoElement);
        todoListing.appendChild(currentTodos[currentTodos.length - 1])
        formInput.value = ''
    }
}



/**
 * It removes the todo from the list.
 * @param {HTMLUListElement} todoListing - HTMLUListElement - The list of todos.
 * @param currentTodos - Array<HTMLLIElement>
 */
export function removeTodo(todoListing: HTMLUListElement, currentTodos: Array<HTMLLIElement>):void {
    todoListing.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement | null;
        if (target && target.classList.contains(Todo.classNames.iconDelete)) {
            const deleteButtonsList = [...document.querySelectorAll(Todo.classNames.iconDelete)];
            const targetIndex = deleteButtonsList.indexOf(target);
            updateArrayOfTodos(currentTodos, 'remove', targetIndex);
            const todoElementToDelete = target.parentElement?.parentElement;
            todoElementToDelete ? todoElementToDelete.remove() : null
        }
    })
}


/**
 * Given an array of current todo elements, an operation (add or remove), and a target index, update the array
 * of current todo elements
 * @param {HTMLLIElement[]} currentTodos - The array of todo elements that we're currently working
 * with.
 * @param {string} operation - The operation to perform. Can be either 'add' or 'remove'.
 * @param {number | Boolean} [targetIndex] - the index of the todo we want to remove.
 * @param {HTMLLIElement} [newTodo] - The new todo we want to add to the list.
 * @returns Nothing is being returned.
 */
function updateArrayOfTodos(currentTodos: HTMLLIElement[], operation: string, targetIndex: number | null , newTodo?: HTMLLIElement): void | null{
    if (operation === 'add' && newTodo) {
        currentTodos.push(newTodo)
    } else if (operation === 'remove' && targetIndex) {
        currentTodos = currentTodos.filter((el, index) => {
            return index !== targetIndex;
        });
    } else {
        return null;
    }
}
