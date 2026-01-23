import { TodoList } from "./todo.js";

const list = new TodoList();
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const ul = document.getElementById("taskList");

// Simulate loading data asynchronously using a Promise
const loadTasks = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(["Learn JS", "Build a project"]), 500);
  });

  (async () => {
    try {
      const tasks = await loadTasks();
      tasks.forEach((task) => list.addTask
    (task));
    render()
  } catch (err) {
    console.error("Error loading tasks:", err);
  }
  })();

  button.addEventListener("click", () => {
    try {
      list.addTask(input.value);
      input.value = "";
      render();
      console.log(list.getTaskCount());
    } catch (err) {
      alert(err.message);
    }
  });

  deleteButton.addEventListener("click", () => {
    try {
      list.deleteTask();
      input.value = "";
      render();
    } catch (err) {
      alert(err.message);
    }
  });

  function render() {
    ul.innerHTML = "";
    list.getTasks().forEach((task) => {
      const li = document.createElement
      ("li");
      li.textContent = task;
      ul.appendChild(li);
    });
  }

  console.log(list.getTaskCount());
  
