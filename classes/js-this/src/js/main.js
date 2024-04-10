// console.log('?',this)
// function FnCar(make, model) {
//   this.make = make;
//   this.model = model;

//   console.log('hello', this);
// }

// const myCar = new FnCar('Toyota', 'Corolla');
// // const myCar1 = new FnCar('BMW', 'Corolla');

// console.log('myCar instanceof FnCar', myCar instanceof FnCar);
// console.log('myCar instanceof Set', myCar instanceof Set);

// class Car {
//   foo = 5;
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   hello() {}

//   log() {
//     console.log('Car instance this', this);
//   }
// }

// const myCar2 = new Car('Foo', 'Volvo');

// console.log(myCar2);
// console.log(myCar2 instanceof Car);

// myCar2.log();

const person = {
  name: 'Alex',
  age: 30,
  greet: function () {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  },
  greet2: () => {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  },
};

console.log(person);

person.greet(); // Output: Hello, my name is Alex and I am 30 years old.
person.greet2(); 

// class Person(){
//   constructor(num1){
//     this.num1= num1
//   }
//   constructor(num1,num2){
//     this.num1 =num1
//     this.num2=num2
//   }
// }


