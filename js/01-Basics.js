'use strict';

// 3 data types
let a = "a";    // a value that changes
const b = "b";  // a set/fixed value
var c = "c";    // very bad please don't use

a = "I am the LET"; // access variable a and change to value "b";
// b = "something else"; // fixed value - ERROR!

// to print to console:
console.log(a);
console.info("Info");
console.warn("Warning");
console.error("Error");

// try and declare your variables as a CONST if you know it's not gonna change
const fname = "siddhartha";     // string
const year = 2021;              // int?
const value = false;            // boolean
const num = 2.4;                // double?

console.log(typeof fname);  // string
console.log(typeof year);   // number
console.log(typeof value);  // boolean
console.log(typeof num);    // number

// undefined / null
// null = explicitly stating that it's empty at runtime

let age = null; // explicitly saying you are empty
let sav;        // uninitialised -> undefined

console.log(age);
console.log(sav);

// String interpolation / concatenation
let str = "5 + 3 = ";
let val = 5 + 3;
let str2 = str+val;
console.log(str2);  // 5 + 3 = 8

// template literal
let string = `5 + 3 = ${val}`;
console.log(string); // 5 + 3 = 8

console.log(`quote:"" single: ''`);
console.log("quite:\"\" single: '' ");

// Data types = dynamic, runtime compiler doesn't know the type till the program is running
let camelCase = "";
camelCase = 2;

console.log(typeof camelCase);

// primitive types = immutable, fixed length, quick to look up
// object = collection of properties, variables are references in memory, mutable

let dob;            // undefined
let userId = null   // null - explicit key word which tells runtime it's "empty"

// var and why it's bad

// var x = 12;
// console.log(`${x}, ${y}`);  // 12, undefined
// var y = 5;

// let x = 2;
// console.log(`${x}, ${y}`);  // error
// let y = 5;

// function deposit(increment) {
//     balance = 100_000;   // global scope access
//     return balance + increment;
// }

function deposit(increment) {
    let balance = 100_000;
    return balance + increment;
}

deposit(10);
console.log(balance); // error - let confines balance's scope to the deposit function block
