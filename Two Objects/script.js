const user1 = {
  name: 'Juan',
  age: 27,
};

const user2 = {
  name: 'Juan',
  age: 27,
};

console.log(user1 == user2);
console.log(JSON.stringify(user1) === JSON.stringify(user2));
