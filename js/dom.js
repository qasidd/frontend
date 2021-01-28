'use strict';

const EARTH = document.querySelector("#earth");
console.dir(EARTH);

EARTH.title = "cheeky earth";
// use setAttribute() where possible instead of directly accessing
// the object
EARTH.setAttribute("width", "250px");
EARTH.setAttribute("class", "justtoshow");

let div = document.querySelector(".addToMe");
let allP = document.querySelectorAll("div.addToMe p");
console.log(allP);

for (let elem of allP) {
    elem.style.backgroundColor = "#ff0000";
}

// create new content
let newHeading = document.createElement("h1"); // <h1> </h1>
let theText = document.createTextNode("We love JS"); // We love JS
newHeading.appendChild(theText); // <h1>We love JS</h1>
div.appendChild(newHeading);

let newImage = document.createElement("img");
newImage.setAttribute("src", "../html/res/fruits.jpg");
div.appendChild(newImage);