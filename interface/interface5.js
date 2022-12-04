"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        // throw new Error("Method not implemented.");
        console.log(`안녕하세요 ${this.name} 입닌다`);
    }
}
const person = new Person("Sim");
// person.
// class 방식은 객체지향 즉 OOP에서 많이 사용
