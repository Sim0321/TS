interface Iperson1 {
  // 컴파일이 되면 사라지는 컴파일 타임에만 사용
  name: string;
  age?: number;
  hello(): void;
}

class Person implements Iperson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    // throw new Error("Method not implemented.");
    console.log(`안녕하세요 ${this.name} 입닌다`);
  }
}

const person: Iperson1 = new Person("Sim");
// person.

// class 방식은 객체지향 즉 OOP에서 많이 사용
