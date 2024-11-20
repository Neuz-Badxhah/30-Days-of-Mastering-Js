// call back function
function person(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoobbye() {
  console.log("Goodbye");
}

person("Learner", sayGoobbye);

//higher function
function sum(num1, num2, operation) {
  console.log(operation(num1, num2));
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(sum(2, 3, add));
console.log(sum(3, 4, subtract));

//callback using asynchronous case
function getPerson(callback) {
  setTimeout(() => {
    console.log("Data Fetch");
    callback();
  }, 2000);
}

function processData() {
  console.log("Data processing....");
}

getPerson(processData);

//higher order in function
function multiple(factor) {
  return (number) => number * factor;
}

const double = multiple(5);
console.log(double(10));

//time out and interval
// setTimeOut basic example
setTimeout(() => {
  console.log("Hello programmers!");
}, 3000);

//using parameter
function greeting(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, "Coders");

//setInterval basic Example
setInterval(() => {
  console.log("Repeat..............");
}, 2000);

//Using Parameter
function repeat(something) {
  console.log(`Here is ${something}`);
}
//setInterval using parameter
setInterval(repeat, 100, "Learn More.");
//clearinterval
const interval = setInterval(() => {
  for (let index = 0; index < 10; index++) {
    console.log("Hello coders", index);
    if (index == 8) {
      clearInterval(interval);
    }
  }
}, 1000);
