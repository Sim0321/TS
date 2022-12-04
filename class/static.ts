class Person2 {
  // public static CITY = "Seoul"; // static이 프로퍼티로 만들어지면 new Person2를 하지 않아도 바로 뽑아서 사용 가능 즉 공유가 가능하다는 의미
  // 만약 public 이 아닌 private이면
  private static CITY = "Seoul";

  public static hello() {
    console.log("하이요", Person2.CITY);
  }

  // 공유가 어떻게 가능한지 보여주는 예시
  public example() {
    console.log("공유 가능", Person2.CITY);
  }
  public change() {
    Person2.CITY = "USA";
  }
}

// 즉 class로 만들어진 obj로부터 공통으로 사용하고 싶은 데이터가 있다면 static 사용

const p2 = new Person2();
// p2.hello(); //  hello() 앞에 static을 붙이지 않았을 때는 가능, 붙이면 에러

Person2.hello(); // 바로 호출해서 사용 가능
// Person2.CITY;

// console.log(Person2.CITY);

const ex1 = new Person2();
ex1.example();

const ex2 = new Person2();
ex2.example();

ex1.change();
ex2.example();
