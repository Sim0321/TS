// class => object
// {sim : 'male', jin : 'male'} a반
// {mon : 'female', wang : "male", son : 'female'} b반

class Students {
  // 원래는 sim : string = 'male' 이런식으로 처리를 하는데 만약 새로운 학생이 들어온다면 처리 할 수 없음. 즉 프로퍼티의 이름이 동적이라면 index signatures를 사용해야함

  // [index: string]: string;
  [index: string]: "male" | "female"; // string 이지만 다른 값이 아예 들어올 수 없도록

  always: "male" = "male"; // a,b반 둘 다 있다하면 옵셔널하게 적용 가능
}

const a = new Students();
a.sim = "male";
a.jin = "male";

console.log(a);

const b = new Students();
b.mon = "female";
b.wang = "male";
b.son = "female";

console.log(b);
