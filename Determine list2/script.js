let list1 = [1, 2, 3, 4, 5];
// const list2 = Object.assign([], list1);
// const list2 = list1.slice();
// const list2 = list1.concat([]);
const list2 = [...list1];

list1.push(6, 7, 8);

console.log('List 1: ', list1);
console.log('List 2: ', list2);

// ---- //

let array1 = [1, 2, 3, 4, 5];
const array2 = array1;

console.log(array2);

array1 = [10, 20, 30];

// array2 still have the reference to the old array1 object
console.log(array2);
