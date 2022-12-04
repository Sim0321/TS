interface person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떤 프로퍼티가 오든 상관 없이
}

function hello3(person: person3): void {
  console.log(`안녕하세요. ${person.name}입니다.`);
}

const p31: person3 = {
  name: "Sim",
  age: 24,
};

const p32: person3 = {
  name: "back",
  systers: ["so", "bo"],
};

const p33: person3 = {
  name: "wang",
  father: p31,
  mother: p32,
};

hello3(p31);
