// Curied version of the tripleAdd1
// Curry a function is transform one function into a
// SEQUENCE of functions that each take one or multiple arguments
function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}

function quadrupleAdd(num1) {
  return function (num2) {
    return function (num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}

console.log(tripleAdd(10)(20)(30));
console.log(tripleAdd1(10, 20, 30));
console.log(quadrupleAdd(10)(20)(30, 40));
