// Variables

var nam = "manaskashyap2564"
var age = 20
// console.log(nam)  //string
// console.log(age)  //number

var naam = "Manas";
let age = 21;
const country = "India";

// console.log(naam, age, country);

let aa = "Code";       // string
let ba = 42;           // number
let c = true;         // boolean
let d;                // undefined
let e = null;         // null

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
var users = ["Msnad","harki","kirat"] //array
// console.log(users)


var u_and_a = {
    nam:"harki",
    age:2,
    phone:345678
}
// console.log(u_and_a.age)


// If-else
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Sorry, chhote ho abhi.");
}

// Loops
// console.log(users[0])



for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
var i = 0 
while (i<5) {
    console.log(i)
    i++;
}
let i = 1;

do {
  console.log("Do while round: " + i);
  i++;
} while (i <= 5);
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}
let person = {
  name: "Manas",
  age: 21,
  city: "Ballia"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
