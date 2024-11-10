// method 1
//fuction decleration
function add() {
  let num1 = 10;
  let num2 = 20;
  let sum = num1 + num2;
  console.log("Method 1: ", sum);
}
//fuction call
add();

//fuction decleration using parameter
function addition(num1, num2) {
  let sum = num1 + num2;
  console.log("Method 2: ", sum);
}
//fuction call
addition(20, 30);

//return function
function sum(a, b) {
  return a + b;
}

let result = sum(10, 20);
console.log(result);

//function expression
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};
//function call
greet("CodeJs");

//Arrow Functions (() => {})
const mul = (a, b) => a * b;

console.log(mul(2, 3));

const name = (name) => `Hello ${name}`;
console.log(name("CodeLearner"));

//this keyword
const person = {
  name: "CodeLearner",
  sayfunction: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person.sayfunction();

//this keyword settimeout
const person1 = {
  name: "CodeLearner",
  sayfunction: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 3000);
  },
};

person1.sayfunction();
