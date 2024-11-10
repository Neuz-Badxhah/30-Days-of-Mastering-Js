const readline = require('readline');

// Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arithmetic operations as arrow functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

// Function to get input and perform operations
function calculator() {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
      rl.question("Please enter the operator you want to use (+, -, *, /): ", (operator) => {
        num1 = Number(num1);
        num2 = Number(num2);

        switch (operator) {
          case "+":
            console.log("Result:", add(num1, num2));
            break;
          case "-":
            console.log("Result:", subtract(num1, num2));
            break;
          case "*":
            console.log("Result:", multiply(num1, num2));
            break;
          case "/":
            console.log("Result:", division(num1, num2));
            break;
          default:
            console.log("Invalid operator. Please try again.");
        }

       
      });
    });
  });
}



// Start the calculator
calculator();
