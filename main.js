// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const increment = counter();
// console.log(increment()); //1
// console.log(increment()); //2

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet = () => console.log(`Hi, I'm ${this.name}`);
// }
// const p = new Person("Ava");
// p.greet();

// // math.js
// export const add = (a, b) => a + b;

// // main.js
// import { add } from './math.js';
// console.log(add(3, 4)); // 7

// fetch('https://api.example.com')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// try {
//   throw new Error("Something went wrong!");
// } catch (err) {
//   console.log(err.message);
// }

// const numbers = [1, 2, 3];
// const iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value); // 1

import { TodoList } from "./todo.js";

const list = new TodoList();
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
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

  console.log(list.#tasks);
