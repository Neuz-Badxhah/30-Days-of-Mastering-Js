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
