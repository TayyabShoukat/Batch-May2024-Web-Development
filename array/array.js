"use strict";
// let arr: number[] = [];
// arr[0] = 25;
// arr[1] = 35;
// arr[2] = 40;
// arr[3] = 50;
// arr[4] = 60;
// console.log(`${arr[0]}`);
// console.log(`${arr[1]}`);
// console.log(`${arr[2]}`);
// console.log(`${arr[3]}`);
// console.log(`${arr[4]}`);
// let arr: number[] = [25, 35, 40, 50, 60];
// console.log(`${arr[0]}`);
// console.log(`${arr[1]}`);
// console.log(`${arr[2]}`);
// console.log(`${arr[3]}`);
// console.log(`${arr[4]}`);
//  0   1   2   3   4
// let arr: number[] = [25, 35, 40, 50, 60];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]}`);
// }
// let arr1: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(`${arr1[i]}`);
// }
// let names: string[] = ["Faisalabad", "Lahore", "Islamabad", "Karachi"];
// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]}`);
// }
// let names: string[] = ["Faisalabad", "Lahore", "Islamabad", "Karachi"];
// let result = names.map((items) => items);
// console.log(result);
//  0       1      2
//    0,1,2   0,1,2   0,1,2
// let matrix: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(`${matrix[1][1]}`)
// console.log(`${matrix[2][2]}`)
// console.log(`${matrix[0][2]}`)
// 0    1   2  3
// let arr: number[] = [20, 35, 45, 90];
// console.log(`${arr[0]}`);
// console.log(`${arr[1]}`);
// console.log(`${arr[2]}`);
// console.log(`${arr[3]}`);
// 0    1   2  3
// let arr: number[] = [20, 35, 45, 90];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]}`);
// }
// array latest loop => map()
// let arr: number[] = [20, 35, 45, 90];
// let result = arr.map((items) => items);
// console.log(result);
// // 0     1     2       3
// let arr: string[] = ["Fsd", "Lhr", "Isb", "Pwr"];
// let results = arr.map((items) => items);
// console.log(results);
// let arr: number[] = [2, 4, 5, 3];
// let result = arr.map((items) => items * 2);
// console.log(result);
// let arr: number[] = [6, 8, 10, 11, 13];
// let result = arr.filter((items) => items % 2 == 0);
// console.log(result);
// let names: string[] = ["Fsd", "Lhr", "Isb", "Psw"];
// let result = names.filter((items) => items == "Lhr");
// console.log(result);
let arr1 = [0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 10, 100, 2000];
let result1 = arr1.filter((items) => items == 0);
console.log(result1);
let arr = [0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 10, 100, 2000];
let result = arr.map((items) => items * 2);
console.log(result);
let names = ["ali", "qasim", "zain", "usama"];
let result2 = names.filter((items) => items == "ali" || items == "qasim");
console.log(result2);
