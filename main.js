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