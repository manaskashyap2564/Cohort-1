// 1: With curly braces
let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
// 2: using ternary
let isEvenAd = (num) => num % 2 === 0;
console.log(isEven(4));  // true
console.log(isEvenAd(7));  // false