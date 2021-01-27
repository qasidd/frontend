'use strict';

add(12, 3); // hoisting the function to the top of the file

// function declaration = HOISTS
function add() {
    console.log(1+2);
}

function add(num1, num2) {
    console.log(num1+num2);
}

// function expression - doesn't let you call a function before it has been initialised
const hello = function() {
    console.log("do something");
}
hello();

// arrow function
// const/let nameOfFunction = () -> {}
const addition = () => {
    console.log(1 + 2);
}
addition();

const additionwithvals = (number1, number2) => console.log(number1 + number2);
additionwithvals(3, 4);