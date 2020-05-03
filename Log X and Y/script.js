(function () {
  'use strict'
  // Y is a global variable
  var x = y = 200;
})();

console.log('y: ', y);
console.log('x: ', x);
