class Person {
  public name: string = "Sim";
  private _age!: number; // 암묵적으로 private로 선언하면 _를 붙임
  // constructor(name: string) {
  //   //생성자
  //   this.name = name;
  // }
  // constructor 에는 async 붙힐 수 없음
  public constructor(name: string, age?: number) {
    // if (age === undefined) { // 두개의 class 생성을 하고싶으면 ex p1, p2 조건부로 제한
    //   this.age = 20;
    // } else {
    //   this.age = age;
    // }
  }

  public async init() {}
}

const p1: Person = new Person("Sim", 24);
// const p2: Person = new Person();

console.log(p1);
// console.log(p1.age);
// console.log(p2);
