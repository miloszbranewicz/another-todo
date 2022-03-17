import { Todo } from "./classes/Todo.js";

/**
 * @param  {Array<Todo>} todosToRender
 * @param  {HTMLUListElement} todoListing
 * @returns void
 */
export function render(currentTodos:Array<Todo>, todoListing: HTMLUListElement): void {
    while(todoListing.firstChild) {
        todoListing.removeChild(todoListing.firstChild)
    }
    const fragment = document.createDocumentFragment()

    currentTodos.forEach( todo => {
        fragment.appendChild(todo.getTodoElement)
    })
    todoListing.appendChild(fragment)
}
/**
 * @param  {MouseEvent} e
 * @param  {HTMLUListElement} todoListing
 */
export function submitTodo(e: MouseEvent, currentTodos:Array<Todo>) {
    e.preventDefault();
    const todoInput: HTMLInputElement = document.getElementById('todo-form-title') as HTMLInputElement;
    const todoInputValue: string = todoInput.value.trim();
    if (todoInputValue !== '') {
        currentTodos.push(new Todo(todoInputValue))
        todoInput.value = '';

    }
}

export function removeTodo(todoListing: HTMLUListElement, currentTodos:Array<Todo>) {
    todoListing.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement

        
        if (target.tagName === "path" || target.tagName === "DIV" || target.tagName === "svg") {
            const deleteButtons = [...document.querySelectorAll(".todo__icon-delete")];
            const targetIndex = deleteButtons.indexOf(target)
            
            currentTodos = currentTodos.filter((el,index) => {
                return index !== targetIndex
            })
            console.log(currentTodos)
            render(currentTodos, todoListing)
        }
    })
}