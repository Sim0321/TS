"use strict";
const p41 = {
    name: "p41",
    age: 25,
    hello: function () {
        console.log(`안녕하세요 ${this.name}입니다`);
    },
};
const p42 = {
    name: "p42",
    age: 25,
    hello() {
        //hello 매개변수에 this: person4 넣어도됨(TS문법)
        console.log(`안녕하세요 ${this.name}입니다`);
    },
};
// Error
// const p43: person4 = {
//   name: "sim",
//   age: 25,
//   hello: (this : person4): void => {
//     console.log(`안녕하세요 ${this.name}입니다`);
//   },
// };
p41.hello();
p42.hello();
