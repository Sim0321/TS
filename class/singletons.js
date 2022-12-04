"use strict";
class ClassName {
    static getInstance() {
        // ClassName으로 부터 만든 object가 있으면 그것을 리턴
        // ClassName으로 부터 만든 object가 없으면, 만듦.
        // a1, b1이 공유하는 것이므로 static 활용
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    constructor() {
        // constructor 앞에 private를 쓰면 new 사용을 막을 수 있음
    }
}
ClassName.instance = null;
// const a1 = new ClassName();
const a1 = ClassName.getInstance(); // 처음이니 만들어서 리턴
// const b1 = new ClassName();
const b1 = ClassName.getInstance(); // a가 만들었으니 그것을 리턴
console.log(a1 === b1);
