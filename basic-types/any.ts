function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {}; // 개체로 전파된다는 이야기. 즉 any를 사용함으로써 type의 안정성을 잃을 수 있다./
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num; // 누수방지 가능 number로 어노테이션을 했기 때문에 그 이후에 변수들은 any가 아니라 number로 된다.
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
// c.indexOf("0"); // Error
