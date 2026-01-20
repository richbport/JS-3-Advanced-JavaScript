function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment()); //1
console.log(increment()); //2

class Person {
    constructor(name) {
        this.name = name;
    }
    greet = () => console.log(`Hi, I'm ${this.name}`);
}
const p = new Person("Ava");
p.greet();

// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
console.log(add(3, 4)); // 7

fetch('https://api.example.com')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log(err.message);
}

const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1