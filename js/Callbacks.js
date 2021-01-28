'use strict';

const greeting = (fname) => {
    // create a popup which prints out the entered name
    alert(`Hello ${fname}`);
}

const userInput = (callback) => {
    // create a user input box that takes a value and assigns it to fname
    let username = prompt("Please enter your name: ");
    callback(username); // greeting(fname)
}

userInput(greeting);
// OR anonymous function = function without a name
// userInput((fname) => alert(`Hello ${fname}`));