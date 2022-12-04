interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  // 두번째 인자로 age: number를 넣으면 helloPerson에러가 뜸. 즉 helloPerson이랑 HelloPerson의 관계가 function ~~ 후속 정의보다 더 중요함.
  console.log(`안녕하세요 ${name} 입니다`);
};

helloPerson("Sim", 24);
