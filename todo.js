export class TodoList {
  #tasks = [];
  taskCount = this.#tasks.length;

  addTask = (task) => {
    if (!task.trim()) throw new Error("Task cannot be empty!");
    this.#tasks.push(task);
  };

  getTasks = () => [...this.#tasks];
}
