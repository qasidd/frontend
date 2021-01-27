'use strict';

// 1
const fun1 = (num1, num2) => num1 - num2;
console.log(fun1(9, 3));

// 2
const welcome = (name, age, gender) => {
    console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);
}
welcome("Sidd", 23, "male")

//3
const powerUp = (n1, n2) => {
    console.log(Math.pow(n1, n2));
}
powerUp(3, 3);