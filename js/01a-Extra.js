'use strict';

// data types
// String, number, boolean, null, undefined, and object

let myString = `hello`;
let myNumber = 20;
let myBool = true;
let myObj = { name: "Siddhartha", key: "value", year: 2021, classroom: [] }

console.log(myObj)

let bool1 = true;
let bool2 = false;

// check if bool1 == bool2
// == ONLY checks the value
console.log(bool1 == bool2);    // false
console.log(1 == true);         // true

// == && === (always equal to)
// === checks the value and checks the type!
console.log(1 === true);        // false

let myAge = null;
let mydob;

console.log(myAge == mydob);    // true - undefined and null both have a falsy value
console.log(myAge === mydob);   // false

// inequality
let sav = "savannah";

console.log(typeof sav);
console.log(typeof true);
console.log(sav == true);       // false
console.log(sav !== true);      // true