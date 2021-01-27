// 'use strict';

function deposit(increment) {
    bankbalance = 100;
    let balance = bankbalance + increment;
    return `${balance}`;
}

console.log(deposit(10));
console.log(bankbalance);

var x = 10;
console.log(x + " " + y); // y is undefined
var y = 12;

let x2 = 10;
console.log(x2 + " " + y2); // error
let y2 = 15;