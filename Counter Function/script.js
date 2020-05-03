function myFunc() {
  let count = 0;
  return function () {
    if (count < 4) {
      // some computation/functionality
    } else {
      // throw error
    }
    count++;
    return count;
  };
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instance one: ', instanceOne());
console.log('instance one: ', instanceOne());
console.log('instance one: ', instanceOne());
console.log('instance one: ', instanceOne());
console.log('instance two: ', instanceTwo());
console.log('instance two: ', instanceTwo());
