// Funcions

// function login(username, password) {
//     console.log(`${username} LogIn Successfully`);
// }

// login("Stark");
// login("Santosh");

// function upperCase(str) {
//     return str.toUpperCase();
// }

// let result = upperCase('javascript')

// console.log(result);


// Default Parameters
// function calculateArea(width, height=1) {
//     // height = height === undefined ? 1 : height;
//     const area = width * height;
//     return area;
// }

// let area = calculateArea(10)

// console.log(area); 


// variable scope
// const fileName = 'xyz.pdf';
// function download() {
//     // download logic goes here

//     console.log(fileName);
// }

// download()


// #. Function Declaration
// function login() {

// }


// #. Function Expression
// const login = function () {

// }

// #. Callback

// function formatText(text, formatCb) {
//     return typeof formatCb === 'function' ? formatCb(text) : text.toUpperCase();
// }

// const result = formatText('hello', (text) => text.charAt(0).toUpperCase() + text.slice(1))
// console.log(result);


// #. IIFE ( Immediately invoked function expression )
// (function setup() {
//     console.log("Setup done!");
// })();


// #. Arrow function

// const login = () => {
//     console.log("It is done");
// }
// login();


// const sum = (num1, num2) => {
//     return num1 + num2;
// }
// const result = sum(1,5)
// console.log(result);