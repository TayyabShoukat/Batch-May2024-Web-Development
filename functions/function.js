"use strict";
// Function Without Parameter
// function show() {
//   console.log("Hello World");
//   console.log("Faisalabad");
// }
// show(); //Function Call => To use function
// show();
// show();
// show();
// show();
// show();
// Parameter
// function sum(a: number, b: number) {
//   console.log(`Sum is ${a + b}`);
// }
// sum(2, 4);
// sum(100, 200);
// sum(1000, 2000);
divide(50, 5);
function sum(a, b) {
    console.log(`Sum is ${a + b}`);
}
function subtract(a, b) {
    console.log(`Subtract is ${a - b}`);
}
function multiply(a, b) {
    console.log(`Multiply is ${a * b}`);
}
function divide(a, b) {
    console.log(`Divide is ${a / b}`);
}
// sum(10, 5);
// subtract(10, 5);
// multiply(10, 5);
// divide(10, 5);
// sum(100, 20);
// subtract(100, 20);
// multiply(100, 20);
// divide(100, 20);
//anonymous => Arrow Fuction
let result = (a, b) => {
    console.log(`Sum is ${a + b}`);
};
result(100, 200);
