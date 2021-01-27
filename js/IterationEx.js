'use strict';

// 1
for (let i = 100; i < 200; i++) {
    console.log("A");
}

// 2
for (let j = 100; j <= 200; j++) {
    console.log(`${j % 2 == 0 ? '-' : '*'}`)
}

// 3
for (let k = 1; k < 11; k++) {
    for (let l = 0; l < 10; l++) {
        console.log(k);
    }
}

// 5
let now = new Date();
switch(now.getDay()) {
    case 0:
        console.log(`Sunday`);
        break;
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    default:
        console.log(`error`);
        break;
}