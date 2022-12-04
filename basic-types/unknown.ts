declare const maybe: unknown; // 타입가드를 통해서 타입을 한정시켜야지만 쓸 수 있는 형태가 unknown이다

//if any이면
// declare const maybe: any; //에러들이 안생김 또한 밑에 코드 처럼 조건문을 사용하지 않고도 할당이 가능하다

const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe; // 타입가드
}

if (typeof maybe === "string") {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}
