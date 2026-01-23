export class TodoList {
  #tasks = [];

  addTask = (task) => {
    if (!task.trim()) throw new Error("Task cannot be empty!");
    this.#tasks.push(task);
  };

  getTasks = () => [...this.#tasks];

  getTaskCount = () => {
    console.log("returning private value", this.#tasks.length);
    return this.#tasks.length;
  };

  deleteTask = () => {
    console.log("deleting first task", this.#tasks);
    this.#tasks.unshift();
  };
}

