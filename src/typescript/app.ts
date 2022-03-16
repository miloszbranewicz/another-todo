
const todoForm: HTMLFormElement = document.getElementById('todo-form') as HTMLFormElement;
todoForm.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    const todoListing: HTMLUListElement = document.getElementById('todo-listing') as HTMLUListElement;
    const todoInput: HTMLInputElement = document.getElementById('todo-form-title') as HTMLInputElement;
    todoListing.innerHTML = `<li>${todoInput.value}</li>`
    

})
