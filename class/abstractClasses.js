"use strict";
class AbstractPerson {
    constructor() {
        this._name = "Sim";
    }
}
// abstract 키워드가 붙어있는 경우에는 기능이 완전하지 않기 때문에 new키워드 사용 불가. 상속을 이용해 완전하게 만들어줘야 함
// new AbstractPerson
class Complete extends AbstractPerson {
    setName(name) {
        // throw new Error("Method not implemented."); IED 도움을 받든 직접 오버라이딩을 하든 해서 완전하게 구현해야함
        this._name = name;
    }
}
const complete = new Complete();
complete.setName("chae woon");
console.log(complete);
