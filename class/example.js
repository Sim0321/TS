"use strict";
class Person {
    // constructor(name: string) {
    //   //생성자
    //   this.name = name;
    // }
    constructor(age) {
        this.name = "Sim";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const p1 = new Person(24);
const p2 = new Person();
console.log(p1);
console.log(p1.age);
console.log(p2);
