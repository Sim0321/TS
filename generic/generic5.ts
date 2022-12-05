class Person<T, K> {
  // class 안에서 generic의 유효범위는 class 전체
  private _name: T; //T = string
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name; //T = string
    this._age = age;
  }
}

new Person("Sim", 24);
// new Person<String>(39);
// new Person<String, number>('Sim','age')
