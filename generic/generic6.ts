// generic 에서 extends는 상속의 개념과는 다르다.
class PersonExtends<T extends string | number> {
  // extends를 상속의 개념으로 생각한다면 T는 union type의 string 또는 number의 상속을 받는다.
  // 정확한 의미는 T는 string 또는 number만 가능하다.
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Sim");
new PersonExtends(24);
// new PersonExtends(true); // 에러

// 타입은 항상 가장 작은 범위로 제한을 하는 것이 컴파일타임에 무언가 체크할때 효율적. 즉 제너릭을 사용한다면 extends를 사용해볼까 하는 의문을 자주 해야함
