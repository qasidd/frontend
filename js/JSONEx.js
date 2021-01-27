'use strict';

// 1
let darthVader = {
    allegiance: "empire",
    "weapon": "lightsabre",
    "sith": true,
    "jedi": false
};
console.log(darthVader);

// 2
console.log(`Darth Vader's allegiance is to the ${darthVader[allegiance]}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader["weapon"]}`);
console.log(`Darth Vader is a sith? ${darthVader["sith"]}`);
console.log(`Darth Vader is a Jedi? ${darthVader["jedi"]}`)

// 3
let myArray = ["hello", "everyone"];

console.log(myArray.length);

myArray.push("how");
myArray.push("are");
myArray.push("you");

console.log(myArray.length);

myArray.shift();

for (let elem of myArray) {
    console.log(elem);
}