interface person2 {
  name: string;
  age?: number; //있어도 되고 없어도 되는 건 "?" 추가
}

function hello2(person: person2): void {
  console.log(`안녕하세요! ${person.name} 입니다`);
}

hello2({ name: "Sim", age: 25 });
hello2({ name: "Back" });
