"use strict";
// let marks: number = 50;
// if (marks >= 40)
// {
//   console.log("Pass");
// }
// let marks: number = 50;
// if (marks >= 40)
// {
//   console.log("Pass");
// }
// else
// {
//   console.log("Fail");
// }
// let marks: number = 20;
// marks >= 40 ? console.log("Pass") : console.log("Fail");
let n = -5;
if (n > 0) {
    console.log("Positive Number");
}
else if (n < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}
let m = 5;
n > 0
    ? console.log("Positive Number")
    : n < 0
        ? console.log("Negative Number")
        : console.log("Zero");
// switch statement
let weekday = 20;
switch (weekday) {
    case 0: // Case and case label
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
