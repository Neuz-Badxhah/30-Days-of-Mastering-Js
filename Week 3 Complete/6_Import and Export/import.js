import { add, subtract } from "./process.js";
// console.log("Addition",add(3,4));
// console.log("Subtraction",subtract(3,4));


let element = document.createElement("div");
element.id = "Addition";
element.textContent = "Addition: " + add(3,4);
document.body.appendChild(element);