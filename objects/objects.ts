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

// interface bankAccountType {
//   accountNumber: number | string;
//   accountHolderName: string;
//   amount: number;
//   address: {
//     add1: string | number;
//     add2: string | number;
//   };
//   activeStatus: boolean;
// }

// let backAccountObj: bankAccountType = {
//   accountNumber: 41000000,
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

// interface Product {
//   productName: string;
//   productQuantity: number;
//   Company: string;
//   expiryDate: string;
//   countryCode: number | string;
//   contactNumber: {
//     contact1: number;
//     contact2: number;
//     contact3: number;
//   };
// }

// let product: Product = {
//   productName: "Cola Next",
//   productQuantity: 200,
//   Company: "Cola",
//   expiryDate: "12-12-2024",
//   countryCode: "+92",
//   contactNumber: {
//     contact1: 122,
//     contact2: 123,
//     contact3: 124,
//   },
// };

// console.log(product.productName);
// console.log(product.expiryDate);
// console.log(product.contactNumber.contact2);

// Optional Properties
// interface Student {
//   rollnumber: number;
//   name: string;
//   fathername: string;
//   hobby?: string;
//   CNIC?: string;
// }

// let student: Student = {
//   rollnumber: 1,
//   name: "Qasim",
//   fathername: "Ali",
// };

// console.log(student.name);
// console.log(student["name"]);

// Intersections => We will combine two interfaces
// interface Category {
//   category_Id: number;
//   categoryName: string;
// }

// interface Products {
//   Product_Id: number;
//   productName: string;
//   productExpiryDate?: string;
//   price: number;
// }

// type intersection = Category & Products;

// let productObj: intersection = {
//   category_Id: 1,
//   categoryName: "Clothes",
//   Product_Id: 1,
//   productName: "Shirt",
//   price: 5000,
// };

interface student {
  rollNumber: number;
  studentName: string;
  studentFatherName: string;
}

interface teacher {
  teacherId: number | string;
  teacherName: string;
  teacherFatherName: string;
  contactNumber?: number;
}

type Intersection = student & teacher;

let intersectionObj: Intersection = {
  rollNumber: 1,
  studentName: "Ali",
  teacherFatherName: "Ramzan",
  teacherId: 10,
  teacherName: "Salman",
  studentFatherName: "qasim",
};

console.log(intersectionObj.teacherFatherName);
