const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

while (true) {
  const num1 = Number(prompt("Ener first number: "));
  const num2 = Number(prompt("Enter second number: "));
  const opetator = prompt(
    "Please enter the  operator you want to use: +,-,*,/ : "
  );
  
  switch (opetator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(subtract(num1, num2));
      break;
    case "*":
      console.log(multiply(num1, num2));
      break;
    case "/":
      console.log(division(num1, num2));
      break;
    default:
      console.log("Invalid input. Please try again.");
      break;
  }
}
