// 상속(inheritance)

class Parent {
  constructor(protected _name: string, private _age: number) {
    // protected는 public, private과 같은 접근 제어중 하나이다. private처럼 외부에서 접근 할 순 없지만 상속관계에 있는 관계만 접근 가능
  }
  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}이다.`);
  }

  protected printName(): void {
    console.log(this._name, "this._name");
  }
}

// const p = new Parent("Sim", 24);
// p.print();

class Child extends Parent {
  // 아무것도 하지 않으면 디폴트 생성자가 생김 하지만 child는 Parent에서 상속 받아온 것이니 Parent 프로퍼티와 같다

  // 프로퍼티 오버라이드(덮어씌우기 개념)(_name, _age)
  // public _name = "Sim Chae Woon"; // c._name 가능

  public gender = "male";

  constructor(age: number) {
    // 상속을 받아오면 자식 constructor에서는 부모의 프로퍼티를 가져오는 super를 먼저 호출해야함
    super("Sim Chae Woon", age);
    this.printName();
  }
}

const c = new Child(5);
c.print();
c.gender;
