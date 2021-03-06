export class Todo {
    constructor(title, id) {
        this.ICON_DELETE = `<div class=${Todo.classNames.iconDelete}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>`;
        this.ICON_DONE = `<div class=${Todo.classNames.iconDone}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>`;
        this.title = title;
        this.id = id;
        this.details = "";
        this.todoElement = this.createTodo();
    }
    createTodo() {
        const liElement = document.createElement("li");
        liElement.dataset.uid = this.id;
        liElement.classList.add("todo");
        const todoHeader = document.createElement("h2");
        todoHeader.classList.add("todo__title");
        todoHeader.textContent = this.title;
        const todoIconsContainer = document.createElement("div");
        todoIconsContainer.classList.add("todo__icons");
        todoIconsContainer.innerHTML = `${this.ICON_DELETE + this.ICON_DONE}`;
        liElement.appendChild(todoHeader);
        liElement.appendChild(todoIconsContainer);
        return liElement;
    }
    get getTodoElement() {
        return this.todoElement;
    }
}
Todo.classNames = {
    iconDelete: "todo__icon-delete",
    iconDone: "todo__icon-done",
};
