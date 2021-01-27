'use strict';

// destructuring - extracting data from objects and arrays
const animals = ["giraffe", "zebra", "horse", "lion"];
console.log(animals[1]);

// destructure my array:
const[giraffe, zebra, horse, lion] = animals;
console.log(zebra);

let myObject = { var1: "salt", var2: "pepper" };
let { var1, var2 } = myObject;
console.log(var1);  // salt
console.log(var2);  // pepper

// rename MY deconstructed object
let{ var1: condament1, var2: pepper } = myObject;
console.log(condament1);
console.log(pepper);

// spread operator
const mylongArray = [1,23,466,7,8,8456,4,64,5,234,23,53,645]
const[a,b,c, ...rest] = mylongArray;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

const person = {
    first: "chris",
    middle: "p",
    last: "bacon",
    city: "manchester",
    phone: "07456828278",
    country: "UK",
    age: 25,
    email: "chrisp.bacon@gmail.com",
    dob: "12/12/1994",
    gender: "male",
    postcode: "M11",
    occupation: "trainer",
    gender: "male"
}

// let first = person.first;
// let middle = person.middle;
// let last = person.last;
// let {first, middle, last} = person;

// let gender = female;
// let gender = person.gender; // male
let {first, middle, last, gender="female"} = person;
console.log(`Your human is called: ${first} ${middle} ${last} he is ${gender}`);

