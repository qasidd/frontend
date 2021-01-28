'use strict';

/*
"promise is a placeholder for some data, that is either 
available immediately, some time in the future, or possibly
not at all"
*/

// const functionname = () => {} (named function)
// () => {} (anonymous function)

// let promprom = new Promise((resolve, reject) => {
//     // do something where I request information
//     // compute something
//     let a = 1 + 1;
//     if (a == 2) {
//         // successful outcome
//         resolve("Oh great it all went well");
//     } else {
//         // something went wrong
//         reject("It didn't work");
//     }
// });

// .then() (if successful)
// .catch() (if failed/rejected)
// promprom.then((message) => {
//     alert(message);
// }).catch((error) => {
//     alert(`oh no something happened: ${error}`)
// });
// console.log(promprom);

// order of execution
// promprom.then((message) => {
//     console.log(`This is in the then block, the status is: ${message}`);
// }).catch((err) => {
//     console.error(`This is in the catch block, the status is: ${err}`)
// }).then(() => {
//     console.log(`Do I execute?`);
// })

let newPromise = new Promise((resolve, reject) => {
    // complicated logic
    console.log(`initial`);
    resolve();
    reject(); // unreachable
}).then(() => {
    console.log(`Do this`);
}).then(() => {
    throw new Error("Something has failed");
    console.log(`Straight after`); // unreachable
}).catch((msg) => {
    console.err(`Oh no ${msg}`);
});