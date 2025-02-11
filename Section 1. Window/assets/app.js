var counter = 1;
// let counter = 1;
var showCounter = () => {
  console.log({ counter });
};
// let showCounter = () => {
//   console.log({ counter });
// }; error;
console.log(window.counter);
window.showCounter();

// Window Size;
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log(width, height);

// Open a new window
// let url = "http://localhost/js/about.html";
// let jsWindow = window.open(url, "about");

// const features = "height=600,width=800";
// const url = "about.html";

// const jsWindow = window.open(url, "about", features);

let features = "height=600,width=800",
  url = "http://localhost/Section 1. Window/assets/home.html";

let jsWindow = window.open(url, "home", features);

setTimeout(() => {
  window.open(url, "home");
}, 3000);

// Resize a window

let url = `http://127.0.0.1:5500/Section%201.%20Window/assets/home.html`;
features = `width=600, height=600`;
let newWindow = window.open(url, "home", features);
setTimeout(() => {
  newWindow.resizeTo(600, 300);
}, 5000);

setTimeout(() => {
  newWindow.resizeBy(-100, -100);
}, 3000);

setTimeout(() => {
  newWindow.close();
}, 5000);

let message = `Something went Wrong`;
window.alert(message);

let result = confirm("Are you sure you want to delete?");

let message = result
  ? "You clicked the OK button"
  : "You clicked the Cancel button";

window.alert(message);

// Prompt

let lang = prompt("What is your Favorite Programming Language ?");

let feedback =
  lang.toLowerCase() === "javascript" ? "It's Great" : `It's ${lang}`;
window.alert(feedback);

Change String To Number;

let age = prompt("How Old Are You?");
newAge = Number(age);

let allow =
  newAge > 17
    ? "Welcome and As soon As Possible to get married"
    : "You are Too Small";
window.alert(allow);

// setTimeOut

var timeoutID;

function showAlert() {
  timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
}

function clearAlert() {
  clearTimeout(timeoutID);
}

// setInterval
let intervalID;

function toggleColor() {
  let e = document.getElementById("flashtext");
  e.style.color = e.style.color === "red" ? "blue" : "red";
}

function stop() {
  clearInterval(intervalID);
}

function start() {
  intervalID = setInterval(toggleColor, 1000);
}
