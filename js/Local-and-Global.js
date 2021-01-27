// 'use strict';

function someFunction() {
    let hello = "billy bob joe";
    console.log(hello, "called from the function")
}

someFunction();
// console.log(hello); // error

let check = false;
function changecheck() {
    check = true; // refer to a OUTER scoped variable
}

console.log(check); // false
changecheck();
console.log(check); // true

// we always look within before we go else where

function test() {
    flag = true;
    console.log(flag);
    test1();
    console.log(flag);
}

function test1() {
    let flag = false;
    return;
}

test();

// banking example
let current_balance = 7000;

function deposit(toadd) {
    return current_balance + toadd;
}

function withdraw(howmuch) {
    return current_balance - howmuch;
}