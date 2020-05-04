// object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function () {
    return this.length;
  },
};

// new keyword & Object constructor
const student = new Object();
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ['English', 'Algebra', 'Chemistry'];
student.getClasses = function () {
  return this.classes;
};

Object.defineProperty(student, 'name', {
  enumerable: false,
  configurable: false,
  writable: true,
  value: 'Juan',
});

console.log(student);

// constructor function

function Car(color, brand, year) {
  this._color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function () {
  return this.color;
};

const car1 = new Car('blue', 'Porsche', 2010);
console.log(car1.getColor());
