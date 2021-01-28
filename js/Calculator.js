'use strict';

const NUMBER_1 = document.querySelector("#firstNumber");
const NUMBER_2 = document.querySelector("#secondNumber");
const RESULT = document.querySelector("#result");
const SUBTRACT_BUTTON = document.querySelector("#sub");
const HISTORY = document.querySelector(".history");
const CLEAR_VALUES = document.querySelector("#clearValues");
const CLEAR_HISTORY = document.querySelector("#clearHistory");

// console.dir(NUMBER_1);

// return the values entered by the user
const getValues = () => {
    return [
        Number.parseFloat(NUMBER_1.value),
        Number.parseFloat(NUMBER_2.value)
    ]
}

const printValue = (newResult) => {
    RESULT.value = newResult;
}

const addToHistory = (result, num1, num2, operator) => {
    const P = document.createElement("p");
    const INFO = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    P.appendChild(INFO);
    HISTORY.appendChild(P);
}

// methods for each of the calc functions
const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    printValue(newResult);
    addToHistory(newResult, num1, num2, "+");
}
const subtract = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    printValue(newResult);
    addToHistory(newResult, num1, num2, "-");
}

// a way to associate a method with an event
SUBTRACT_BUTTON.addEventListener("click", subtract);
CLEAR_VALUES.addEventListener("click", () => {
    NUMBER_1.value = "";
    NUMBER_2.value = "";
    RESULT.value = "";
})
CLEAR_HISTORY.addEventListener("click", () => {
    HISTORY.innerHTML = "";
})
CLEAR_HISTORY.addEventListener("mouseover", () => {
    CLEAR_HISTORY.className = "btn btn-info";
})
