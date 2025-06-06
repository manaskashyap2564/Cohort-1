// Variables

// var nam = "manaskashyap2564"
// var age = 20
// console.log(nam)  //string
// console.log(age)  //number

// var naam = "Manas";
// let age = 21;
// const country = "India";
// console.log(naam, age, country);

// let aa = "Code";       // string
// let ba = 42;           // number
// let c = true;         // boolean
// let d;                // undefined
// let e = null;         // null

// console.log(typeof a);  // string
// console.log(typeof d);  // undefined
// console.log(typeof e);  // object (JS ki purani galti 😅)


// operators

// 1. Arithmetic Operators (Math wale)
// let a = 10;
// let b = 3;
// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.333...
// console.log(a % b);  // 1


// 2. Comparison Operators (Sach ya jhooth?)
// console.log(5 > 3);      // true
// console.log(5 == '5');   // true (loose equality)
// console.log(5 === '5');  // false (strict equality)
// console.log(5 != 4);     // true
// console.log(5 !== '5');  // true

// 3. Logical Operators
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true);         // false



// arrayss and objectts
// var users = ["Msnad","harki","kirat"] //array
// console.log(users)


// var u_and_a = {
//     nam:"harki",
//     age:2,
//     phone:345678
// }
// console.log(u_and_a.age)

// var users = [{naam : "mk" ,age: 12 },{naam : "mik" ,age: 20 }] //array of objects


//   // If-else

// let age = 18;
// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("Sorry, chhote ho abhi.");
// }



// // Loops


// console.log(users[0])
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// var i = 0 
// while (i<5) {
//     console.log(i)
//     i++;
// }

// let i = 1;
// do {
//   console.log("Do while round: " + i);
//   i++;
// } while (i <= 5);
// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//   console.log("Fruit: " + fruit);
// }
// let person = {
//   name: "Manas",
//   age: 21,
//   city: "Ballia"
// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }





// Functions

// 1. Function Declaration – Naam wala kaam
// function greet() {
//   console.log("Hey bhai, kaise ho?");
// }
// greet();

// 2. Parameters & Arguments – Input-Output Magic
// function sum(start , end) {
//     let s = 0;
//     for (let i = 1; i <=end ; i++) {
//         s += i
//     }
// // 3. return Statement – Result wapas karo
//     return s;
// }
// console.log(sum(1,100))


// 4. Function Expression – Variable mein function
// let sayBye = function(name) {
//   console.log("Bye " + name + "! Milte hain phir.");
// };
// sayBye("Manas");
// // Output: Bye Manas! Milte hain phir.

// 5. Arrow Functions – Chhota aur modern style
// // Normal function:
// function square(n) {
//   return n * n;
// }
// // Arrow function:
// let squareArrow = n => n * n;
// console.log(squareArrow(5)); // 25

// 6. IIFE (Immediately Invoked Function Expression) – Turant ghusaao!
// (function() {
//   console.log("Yeh IIFE hai, turant execute ho gaya!");
// })();


// 7. Callback (function inside function)
// function add(a,b){
//     return a + b
// }
// function subtract(a,b){
//     return a - b
// }
// function multiply(a,b){
//     return a * b
// }
// function divide(a,b){
//     return a / b
// }
// function remainder(a,b){
//     return a % b
// }
// function doArithmetic(a,b,operation) {
//     return operation(a,b)
// }
// console.log(doArithmetic(2,5,remainder))

