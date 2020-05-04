const myArray = [[1], [2], [3], [4]];

console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));

console.log(myArray.map((x) => x.toString()).indexOf([2].toString()));

const hello = {
  hello: 'world',
  foo: 'bar',
};
const qaz = {
  hello: 'stevie',
  foo: 'baz',
};

const myArray2 = [];
myArray2.push(hello, qaz);

console.log(myArray2.map((x) => x.hello).indexOf('stevie'));

//  with better performance for larger arrays
console.log(myArray2.findIndex((x) => x.hello === 'world'));
