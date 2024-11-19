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
