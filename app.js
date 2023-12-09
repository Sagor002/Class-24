"use strict";

// default parameter
function sum(a, b = 0) {
  return a + b;
}

// console.log(sum(1, 2));

// value vs. reference
const student1 = {
  name: "Mimi",
  age: 20,
};

// const student2 = student1; //reference

// student2.name = "Rimi";

// // console.log(student1);
// const arr1 = [10, 20, 30];
// const arr2 = arr1;

const student2 = { ...student1 }; //value

student2.name = "Rimi";

// console.log(student1);
const arr1 = [10, 20, 30];
const arr2 = [...arr1]; //value

arr2.push(40);

// console.log(arr2);
// console.log(arr1);

// first class function
// 1. can be stored in variable
// 2. passed as arg to other func.
// 3. returned as vLUES FROM other func.

const firstClass = (a, b) => {
  return a + b;
};

// console.log(firstClass(5, 10));

const otherFunc = (a, b, fn) => {
  return fn(a, b);
};
console.log(otherFunc(10, 15, firstClass));

// higher order function (hof)
// callback func.

// const hello = document.querySelector(".hello");

// const callback = () => {
//   document.body.style.backgroundColor = "green";
// };

// hello.addEventListener("mouseover", callback);

// curying function

// function doMath(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// };

const doMath = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

const result = doMath(10)(5);
console.log(result);

// side effect
// function fn1(num1, num2) {
//   return num1 + num2;
// };

// function fn2(num1, num2, func) {
//   return func(num1, num2);
// };

// console.log(fn2(10, 20, fn1));

function foodCutter(quantity) {
  return quantity * 4;
}

function addFlovour(pieces, fl) {
  return pieces * fl;
}
function foodBlander(quantity, fl) {
  const pieces = foodCutter(quantity);
  return addFlovour(pieces, fl);
}

// console.log(foodBlander(14, 5));
// console.log(foodBlander(14, 3));

// call ()
// function greet(greeting){
//   return`${greeting}, ${this.name}`;
// }

// const person = { name: "mim" };
// const person2 = { name: "mimi" };

// const text = greet.call(person, "Hi");
// // console.log(text);

// function greet(greeting, message){
//   return`${greeting}, ${this.name}. ${message}`;
// }

// const person = { name: "Mim" };
// const person2 = { name: "Rimi" };

// const args = ["Hi", "How are you?"];

// const text = greet.apply(person, args);
// // console.log(text);

// function greet(greeting, message){
//   return`${greeting}, ${this.name}. ${message}`;
// }

// const person = { name: "Mim" };
// const person2 = { name: "Rimi" };

// const args = ["Hi", "How are you?"];

// const text = greet.apply(person, args);

function calcAge(greeting) {
  return `${greeting}, ${this.name}. You are ${
    2023 - this.birthYear
  } years old.`;
}

const human1 = { name: "Mini", birthYear: 1995 };
const human2 = { name: "Sagor", birthYear: 1993 };

// const calcHumanAge = calcAge.bind(human1);
const calcHumanAge = calcAge.bind(human2);

// console.log(calcHumanAge("Hello"));

// IIFE
(function () {
  const secret = " dhsdfhwqkldjqj";
  console.log(secret);
})();

// closures
// function outerFunction(){
//   const myFavNum = 23;

//   function innerFunction() {
//     return myFavNum;
//   }

//   return innerFunction();
// }

// const myFunction = outerFunction();

// console.log(myFunction);

function outerFunction() {
  const Num = 100;

  function innerFunction() {
    return Num;
  }

  return innerFunction;
}

const myFunction = outerFunction();

console.log(myFunction());
console.log(myFunction());
console.log(myFunction());
console.log(myFunction());
