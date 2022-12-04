"use strict";
function hello3(person) {
    console.log(`안녕하세요. ${person.name}입니다.`);
}
const p31 = {
    name: "Sim",
    age: 24,
};
const p32 = {
    name: "back",
    systers: ["so", "bo"],
};
const p33 = {
    name: "wang",
    father: p31,
    mother: p32,
};
hello3(p31);
