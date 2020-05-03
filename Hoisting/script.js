console.log(color);
var color = 'blue';

try {
  console.log(getProduct(1, 2));
} catch (error) {
  console.log(error);
}

// Only the variable is hoisted to the not, not the value, in this case, the function
// var getProduct = function (num1, num2) {
//   return num1 + num2;
// };

// The whole function is hoisted to the top
function getProduct(num1, num2) {
  return num1 + num2;
}

console.log(getProduct(1, 2));

// VAR - function scoped
// CONST, LET - block scoped

function getTotal() {
  console.log(multiplier);
  console.log(total);

  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

getTotal();

function getTotal() {
  let total;
  var multiplier;

  total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd;

    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

console.log(getTotal());
