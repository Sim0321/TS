"use strict";
class Person {
    // 암묵적으로 private로 선언하면 _를 붙임 ex) private _age!:number
    // constructor(name: string) {
    //   //생성자
    //   this.name = name;
    // }
    // constructor 에는 async 붙힐 수 없음
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // if (age === undefined) { // 두개의 class 생성을 하고싶으면 ex p1, p2 조건부로 제한
        //   this.age = 20;
        // } else {
        //   this.age = age;
        // }
        // 원래는 this.name = name , this.age = age 이렇게 작성을 해야하지만 코드가 길어지므로 지워버리고 constructor 매개변수 앞에 접근제어자를 붙여주면 name: string; age: number; 이렇게 Person class에서 선언한 것 과 동일한 결과가 나옴
    }
}
const p1 = new Person("Sim", 24);
// const p2: Person = new Person();
console.log(p1);
// console.log(p1.age);
// console.log(p2);
