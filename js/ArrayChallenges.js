// 1
let quote = ["I", "am", "your", "friend"];

// 2
console.log(quote[2]);

// 3
quote.pop();

// 4
quote.push("father");

// 5
console.log(quote.toString());

// 7
quote.unshift("Luke");

// 8
console.log(quote.toString());

// 11
let erroneousWord = "Luke";

// 12
let lukeIsHere = quote.find((s) => s === erroneousWord);

// 13
let lukeIsAt;

// 14
if (lukeIsHere) {
    lukeIsAt = quote.findIndex((s) => s === erroneousWord);
    quote[lukeIsAt] = "No";
}

// 16
let output = ``;

// 17
for (let i = 0; i < quote.length; i++) {
    let w = quote[i];
    output += w;
    if (i === quote.length - 1) {
        output += "!";
    } else if (w === "No") {
        output += ", ";
    } else {
        output += " ";
    }
}

// 18
console.log(output);