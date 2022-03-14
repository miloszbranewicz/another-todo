
const todoForm: HTMLFormElement = document.getElementById('create-todo-form') as HTMLFormElement;

todoForm.addEventListener('submit', (e: Event) => {
    const todoInput: HTMLInputElement = document.getElementById('create-todo-name') as HTMLInputElement;
    e.preventDefault()
    

})
