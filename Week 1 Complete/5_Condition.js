//if else
let name = "codelearner";
if (name == "codelearner") {
  console.log(`Hello! ${name}`);
}

//else if
name = "JsLearner";
if (name == "JsLearner") {
  console.log(`Hello! ${name}`);
} else if (name == "coder") {
  console.log("Hello!");
} else {
  console.log("who are you ?");
}

//switch case
let operator = "-";
switch (operator) {
  case "+":
    console.log("Addition");
    break;
  case "-":
    console.log("Subtraction");
    break;
  default:
    console.log("Invalid operator");
}

let fruit = "apple";
switch (fruit) {
  case "apple":
  case "banana":
    console.log("this is fruit");
    break;
  default:
    console.log("this is not fruit");
}
