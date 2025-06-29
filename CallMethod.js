// Call The function greet() on the object person1
// and print the result to the console.
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Mo saied", 25);
delete person1.age;
console.log(person1.greet());
