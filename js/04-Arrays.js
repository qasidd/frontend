'use strict';

// Array = stores information

// 4 different ways to create an array in JS
let array = Array();    
let arrayWithSize = Array(10);
let arrayWithValues = Array("Tom", "Dick", "Harry");
let shortHand = [1,2,3]; // <-- convention

// Arrays can be sparsley filled, any unassigned part of an array are UNDEFINED

let classroom = [];
classroom[0] = "Sidd";

console.log(classroom);
console.log(classroom[2]);  // undefined

classroom[2] = "Vinesh";
console.log(classroom);     // [Sidd, empty, Vinesh]

classroom[1] = { fname: "someone", grade: 12, year: 2022 }; // allowed
console.log(classroom);

let students = Array(10); // [ <10 empty slots> ]
students[11] = "hello";
console.log(students.length);

// methods
let fruits = ["banana", "strawberry", "melon"];

// push() = adds to the END of an array
fruits.push("pear");

// pop() = removes from the END of an array
fruits.pop();

// unshift() = add to the START of an array
fruits.unshift("pear");

// shift() = removes from the START of an array
fruits.shift();
console.log(fruits);

for (let each of fruits) {
    console.log(each);
}