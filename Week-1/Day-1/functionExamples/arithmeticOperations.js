function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function performOperation(a, b, operationFn) {
  return operationFn(a, b);
}
console.log(performOperation(10, 5, add));      // 15
console.log(performOperation(10, 5, subtract)); // 5