function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any {
  // 모든걸 받아서 모든걸 주는 것이라. 정확히 들어오는 input에 의해서 달라지는 타이핑 금지.
  return message;
}

console.log(hello("Sim").length);
console.log(hello(24).length); // 원래는 length속성이 안되지만 타입이 any라서 에러가 안뜸

//generic 쉽게 생각하면 매개변수의 타입을 변수처럼 활용하는 것임
function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("Sim").length);
// console.log(helloGeneric(24).length) // 에러
console.log(helloGeneric(true));
