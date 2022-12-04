"use strict";
// class => object
// {sim : 'male', jin : 'male'} a반
// {mon : 'female', wang : "male", son : 'female'} b반
class Students {
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
