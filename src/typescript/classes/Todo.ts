export class Todo {
    title: string | null;
    ICON_DELETE: string = `<svg class="todo__icon-delete" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>`;
    ICON_DONE: string = `<svg class="todo__icon-done" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>`;
    TODO_ITEM: string
    constructor(title:string) {
        this.title = title;
        this.TODO_ITEM = `<li class="todo">
                            <h2 class="todo__title">${this.title}</h2>
                            <div class="todo__icons">
                                ${this.ICON_DELETE}
                                ${this.ICON_DONE}
                            </div>
                        </li>`
    }
    set setIconDelete(iconSvgCode: string) {
        this.ICON_DELETE = iconSvgCode;
    }
    get getIconDelete() {
        return this.ICON_DELETE;
    }

    set setIconde(iconSvgCode: string) {
        this.ICON_DONE = iconSvgCode;
    }
    get getIconDone() {
        return this.ICON_DONE;
    }

    set setTitle(title: string) {
        this.title = title;
    }
    get getTitle() {
        return this.title;
    }
    get getTodoItem() {
        return this.TODO_ITEM;
    }
}
