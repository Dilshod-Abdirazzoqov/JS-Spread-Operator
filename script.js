"use strict";

// codeScene - 1
let a = 8;
b = a;
console.log(a);
console.log(b);

//codeScene - 2
const bmw = {
  color: "white",
  isBuy: false,
};
const mers = bmw;
mers.color = "black";
console.log(mers);
console.log(bmw);

//codeScene - 3 // kopy qiladigan funksiya;
function copyObj(obj) {
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

const nexiaR3 = {
  color: "black",
  isBuy: false,
  shum: {
    a: 100,
    b: 200,
  },
};

const spark = copyObj(nexiaR3);
spark.shum.a = 300;
console.log(spark);
console.log(nexiaR3);

//codeScene-4 // simple way;
const nexiaR4 = {
  color: "black",
  isBuy: false,
  shum: {
    a: 100,
    b: 200,
  },
};
const newCopyCar = Object.assign({}, nexiaR4);
console.log(newCopyCar);

//codeScene - 5 copy the array
const arr = [1, 2, 3, 4];
const newArr = arr.slice();
console.log(newArr);

//codeScene - 6 // by spread operator(...) the array elements
const cars = ["bmw", "mers", "wolksvagen"],
  plane = ["German", "UzbAirways", "Turkish"],
  technology = [...cars, ...plane, "matiz"];

console.log(technology);

//codeScene - 7
function number(a, b, ...c) {
  console.log(a, b, c);
}
console.log(number(1, 2, 3, 4, 5, 6, 7));

function func(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const numbers = [1, 2, 3, 4, 5];
func(...numbers);
