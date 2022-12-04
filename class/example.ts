class Person {
  // 암묵적으로 private로 선언하면 _를 붙임 ex) private _age!:number

  // constructor(name: string) {
  //   //생성자
  //   this.name = name;
  // }
  // constructor 에는 async 붙힐 수 없음

  public readonly name: string = "Sim"; // 값을 못바꾸게 하려면 readonly 사용
  // private readonly country: string = "Korea"; // 외부에서 this.country 접근은 가능하지만 readonly이기 때문에 값을 변경하진 못함(에러 발생)
  //위에 두개 처럼 프로퍼티 초기화를 선언하는 곳에서도 가능했고
  private readonly country: string;

  public constructor(private _name: string, private age: number) {
    // if (age === undefined) { // 두개의 class 생성을 하고싶으면 ex p1, p2 조건부로 제한
    //   this.age = 20;
    // } else {
    //   this.age = age;
    // }
    // 원래는 this.name = name , this.age = age 이렇게 작성을 해야하지만 코드가 길어지므로 지워버리고 constructor 매개변수 앞에 접근제어자를 붙여주면 name: string; age: number; 이렇게 Person class에서 선언한 것 과 동일한 결과가 나옴

    // constructor 안에서도 프로퍼티 초기화를 할 수 있다.
    this.country = "Korea";
  }

  // get name() {
  //   // 함수이므로 무언가 로직을 만들 수 있음
  //   // console.log("get");
  //   return this._name + "잘생긴";
  // }

  // set name(name1: string) {
  //   console.log("set");
  //   this._name = name1;
  // }

  hello() {
    this.country = "China";
  }
}

const p1: Person = new Person("Sim", 24);
// const p2: Person = new Person();

console.log(p1.name); // p1에서 꺼내오는 것이기 때문에 get을 하는 함수 getter
p1.name = "ChaeWoon"; // name이라는 프로퍼티의 데이터 값을 바꾸는 것이기 때문 set을 하는 함수 setter
console.log(p1.name);
// 즉 get, set 함수를 이용해 외부에서 데이터를 바꾸는 것의 제한을 걸 수 있음.

// console.log(p1.age);
// console.log(p2);
