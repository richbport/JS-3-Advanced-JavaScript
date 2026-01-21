export class TodoList {
    #tasks = [];

    addTask = (task) => {
        if (!task.trim()) throw new Error
        ("Task cannot be empty!");
        this.#tasks.push(task);
    };
}