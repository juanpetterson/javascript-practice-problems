// IIFE - Immediately Invoked Function Expression
// IIFE preserves the scope, so we can wrap our js files to not override global variables

(function doubleNumber(num) {
  console.log(num * 2);
})(5);

(function () {
  function getTotal(a, b) {
    return a + b;
  }

  // Will not override jquery variable if exists, only inside this block
  var $ = 'currency';
})();
