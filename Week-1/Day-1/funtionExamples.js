// //  1. convertCelsiusToFahrenheit()
// function convertCelsiusToFahrenheit(C){
//   var F = (C * 9/5) + 32;
//   return F;
// }
// console.log(convertCelsiusToFahrenheit(0));   // 32
// console.log(convertCelsiusToFahrenheit(100)); // 212


// //2. isEven Arrow function mein 
// 1: With curly braces
// let isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// 2: using ternary
// let isEven = (num) => num % 2 === 0;
// console.log(isEven(4));  // true
// console.log(isEven(7));  // false

// 3. Callback Example
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function performOperation(a, b, operationFn) {
//   return operationFn(a, b);
// }
// console.log(performOperation(10, 5, add));      // 15
// console.log(performOperation(10, 5, subtract)); // 5

// 4. IIFE wala random number generator
// (function () {
//   let random = Math.floor(Math.random() * 101); // 0 to 100
//   console.log("Random number: " + random);
// })();

// // Fibonacci Series
// function Fibonacci(n){
//     var f1 = 0;
//     var f2 = 1;
//     for (let i = 1 ;  i <= n ; i++) {
//         if (i === 1) {
//             console.log(f1)
//         }
//         else if(i ===2){
//             console.log(f2)
//         }
//         else{
//             var f = 0
//             f = f1+f2
//             console.log(f)
//             f1 = f2 
//             f2 = f
//         }
//     }
// }
// Fibonacci(5)

//  //Pattern printing 
// function printStars(){}
// var n = 5;
// var row = 0
// while(row<n){
//     var stars = ""
//     var star = 5;
//     for(var i = 1; i<=star;i++ ){
//         console.log(stars)
//         stars = stars + "* "
//         star--
//     }
//     row++
// }
