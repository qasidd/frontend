'use strict';

// creating objects
let student = new Object();
let person = {};    // <-- short hand

// adding properties to your object
person.name = "Tony Stark";
person["date of birth"] = 1965;

console.log(person);
console.log(person.name);

let blue = {};
blue["make"] = "hyundai";
blue["model"] = "i30";
blue["colour"] = "gorgeous";

console.log(blue);

for (let attributes in blue) {
    console.log(`key: ${attributes} value: ${blue[attributes]}`);
}

let carpark = [
    blue,
    { "make": "A5", "model": "A5", "colour": "Silver" },
    { "make": "Merc", "model": "C", "colour": "grey" }
];

console.log(carpark);

for (let cp of carpark) {
    console.log(cp);

    for (let car in cp) {
        console.log(`key: ${car} value: ${cp[car]}`);
    }
}

// JSON = JavaScript Object Notation
// key : value, key2 : value2

let myJSONObject = {
    "tescos": [
        { "productname" : "7up", "price": 0.99, "quantity" : 100 },
        { "productname" : "flowers", "price": 15.99, "quantity": 200 }
    ],
    "cars": [
        { "make": "A5", "model": "A5", "colour": "Silver" },
        { "make": "Merc", "model": "C", "colour": "grey" }
    ]
}

myJSONObject.tescos.push({ "productname": "nail polish remover" });
console.log(myJSONObject);

console.log(blue);
let blueToText = JSON.stringify(blue);
console.log(typeof blue);
console.log(typeof blueToText);

let userData = `{ "name": "sidd" }`;
console.log(typeof userData);
let obj = JSON.parse(userData);
console.log(typeof obj);