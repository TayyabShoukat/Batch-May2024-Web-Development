// let studentObj = {
//   name: "ali", // Property/Key : Value
//   age: 30,
//   city: "Fsd",
// };

// console.log(studentObj);
// console.log(studentObj.name);
// console.log(studentObj.age);
// console.log(studentObj.city);

// let colors = {
//   color1: "red",
//   color2: "blue",
//   color3: "green",
//   color4: "Yellow",
//   quantity: 4,
// };
// console.log(colors.color3);
// console.log(colors.quantity)

// 1 => type 2 => interface
// interface studentObjType {
//   name: string;
//   age: number;
//   city: string;
// }

// let studentObj: studentObjType = {
//   name: "code perks",
//   age: 29,
//   city: "Fsd",
// };

// console.log(studentObj);
// console.log(studentObj.name);
// console.log(studentObj.age);
// console.log(studentObj.city);

// type studentObjType = {
//   name: string;
//   age: number;
//   city: string;
// };

// let studentObj: studentObjType = {
//   name: "code perks",
//   age: 29,
//   city: "Fsd",
// };

// console.log(studentObj);
// console.log(studentObj.name);
// console.log(studentObj.age);
// console.log(studentObj.city);

// interface address1 {
//   add1: string;
//   add2: string;
// }

// interface bankAccountType1 {
//   accountNumber: number;
//   accountHolderName: string;
//   amount: number;
//   address: address1;
//   activeStatus: boolean;
// }

// interface bankAccountType {
//   accountNumber: number;
//   accountHolderName: string;
//   amount: number;
//   address: {
//     add1: string;
//     add2: string;
//   };
//   activeStatus: boolean;
// }

// let backAccountObj: bankAccountType = {
//   accountNumber: 4100000000000,
//   accountHolderName: "Ali",
//   amount: 100000,
//   address: {
//     add1: "Fsd",
//     add2: "Lhr",
//   },
//   activeStatus: true,
// };

// console.log(backAccountObj.accountHolderName);
// console.log(backAccountObj.amount);
// console.log(backAccountObj.address.add1);

// union

interface bankAccountType {
  accountNumber: number | string;
  accountHolderName: string;
  amount: number;
  address: {
    add1: string | number;
    add2: string | number;
  };
  activeStatus: boolean;
}

let backAccountObj: bankAccountType = {
  accountNumber: 41000000,
  accountHolderName: "Ali",
  amount: 100000,
  address: {
    add1: "Fsd",
    add2: "Lhr",
  },
  activeStatus: true,
};

console.log(backAccountObj.accountHolderName);
console.log(backAccountObj.amount);
console.log(backAccountObj.address.add1);
