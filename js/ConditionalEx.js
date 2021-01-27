'use strict';

// 3
let age = 55;
if (age >= 18 && age <= 65) {
    console.log(`onage`);
} else if (age < 18) {
    console.log(`underage`);
} else {
    console.log(`overage`);
}

// 4
console.log(`${age > 50 ? 'over 50' : '50 or under'}`)