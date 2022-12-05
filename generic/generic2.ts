function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

// 1.
helloBasic<string, number>("Sim", 24); // 값을 지정
//2.
helloBasic(24, 25); // 매개변수에 의해 T가 값을 추론
