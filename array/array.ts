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

// let arr1: number[] = [0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 10, 100, 2000];
// let result1 = arr1.filter((items) => items == 0);
// console.log(result1);

// let arr: number[] = [0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 10, 100, 2000];
// let result = arr.map((items) => items * 2);
// console.log(result);

// let names: string[] = ["ali", "qasim", "zain", "usama"];
// let result2 = names.filter((items) => items == "ali" || items == "qasim");
// console.log(result2);

// 1=> push() => add value in array (from last index / from right side)
// let arrPush: number[] = [2, 4, 6, 8];
// console.log(`Old array ${arrPush}`);
// arrPush.push(10);
// console.log(`New array after insert value ${arrPush}`);

// 2=> pop() => Delete index from right side
// let arrPop: number[] = [2, 4, 6, 8];
// let result: any = arrPop.pop();
// console.log(`Resdults ${result}`);

// 3. shift() => Delete Chratcter from left side
// let arrPop: number[] = [2, 4, 6, 8];
// let result: any = arrPop.shift();
// console.log(`${result}`);
// console.log(`${arrPop}`);

// 4. unshift() => Insert Character from let side
// let arr: number[] = [2, 4, 6, 8];
// arr.unshift(1);
// console.log(`${arr}`);

//5 concat() => Combine
// 6 sort() => Arrange data
// let arr1: number[] = [1, 2];
// let arr2: number[] = [4, 3];
// let mergedArray = arr1.concat(arr2).sort(); //[1,2,3,4]
// console.log(mergedArray);

// 7 slice(Starting,Range) => To Extract data
// Indexes=>    //   0  1  2 3   4
// let arr: number[] = [2, 6, 4, 8, 10];
// let result = arr.slice(1, 4);
// console.log(result);
// let result2 = arr.reverse; //[10,8,4,6,2]

// 8 Reverse() => Reverse of array
// console.log(`${arr.reverse()}`);

// 1
// let arr: number[] = [2, 4, 7, 9, 0, 1];
// let result = arr.sort();
// console.log(result);

// 2
// let arr: number[] = [2, 4, 7, 9, 0, 1];
// arr.push(20);
// console.log(arr);

// 3
// let arr: number[] = [2, 4, 7, 9, 0, 1];
// arr.pop();
// console.log(arr);

// 4
// let arr: number[] = [2, 4, 7, 9, 0, 1];
// arr.unshift(20);
// console.log(arr);

// 5
// let arr: number[] = [2, 4, 7, 9, 0, 1];
// arr.shift();
// console.log(arr);

// 6
// let arr1: number[] = [2, 4, 6];
// let arr2: number[] = [1, 3, 5];
// let mergedArray: number[] = arr1.concat(arr2).sort();
// console.log(mergedArray);

// 7 slice(Starting,Range) => To Extract data
// Indexes=>    //   0  1  2  3   4
// let arr: number[] = [2, 6, 4, 8, 10];
// let result = arr.slice(1, 4);
// console.log(result);

// 8 Reverse
// let arr: number[] = [1, 100, 0, 2, 3, 99];
// let result: number[] = arr.reverse();
// console.log(result);

// 9 map() => Advance loop
// let arr: number[] = [2, 4, 6];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// let arr: number[] = [2, 4, 6];
// let result: number[] = arr.map((item) => item * 2);
// console.log(result);

// 10 => filter
// let arr: number[] = [2, 4, 6, 5, 7, 9];
// let result: number[] = arr.filter((item) => item % 2 == 0);
// console.log(result);

// 11 => splice() method
// let arr: number[] = [1, 2, 3, 4, 5];
// arr.splice(2, 2);
// console.log(arr);

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(2);
console.log(arr);
