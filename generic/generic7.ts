interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Sim",
  age: 24,
};

// keyof 예시
// type Keys = keyof IPerson; // 어떠한 객체에 keyof를 붙이면 그 결과물이 타입으로 나오는데 그 결과물은 키의 이름으로 된 문자열(즉 "name", "age")
// const keys: Keys = "age";

//IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  // "name" | "age"을 keyof IPerson으로 대체
  //string | number 을 IPerson[keyof IPerson] 으로 대체
  // T = IPerson
  // 이렇게 하면 string | number 인 union type으로 나오지 않고 name 혹은 age 둘 중의 하나로 변수가 설정이 됨
  return obj[key];
}

getProp(person, "name");
getProp(person, "age");
// getProp(person, 'age1'); //error

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value; // error
}

setProp(person, "name", "Sim");
// setProp(person, "name", 24); //error
setProp(person, "age", 25);
