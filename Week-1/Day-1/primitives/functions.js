// 1. Function Declaration – Naam wala kaam
function greet() {
  console.log("Hey bhai, kaise ho?");
}
greet();

// 2. Parameters & Arguments – Input-Output Magic
function sum(start , end) {
    let s = 0;
    for (let i = 1; i <=end ; i++) {
        s += i
    }
// 3. return Statement – Result wapas karo
    return s;
}
console.log(sum(1,100))


// 4. Function Expression – Variable mein function
let sayBye = function(name) {
  console.log("Bye " + name + "! Milte hain phir.");
};
sayBye("Manas");
// Output: Bye Manas! Milte hain phir.

// 5. Arrow Functions – Chhota aur modern style
// Normal function:
function square(n) {
  return n * n;
}
// Arrow function:
let squareArrow = n => n * n;
console.log(squareArrow(5)); // 25

// 6. IIFE (Immediately Invoked Function Expression) – Turant ghusaao!
(function() {
  console.log("Yeh IIFE hai, turant execute ho gaya!");
})();


// 7. Callback (function inside function)
function add(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}
function remainder(a,b){
    return a % b
}
function doArithmetic(a,b,operation) {
    return operation(a,b)
}
console.log(doArithmetic(2,5,remainder))
