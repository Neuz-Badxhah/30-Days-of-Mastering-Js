let num1 = 10;
let num2 = 0;
let num3 = 20;
try {
  if (num2 == 0) {
    throw new Error("Cannot divide by zero");
  }
  let result = num1 / num2;
  console.log(`Result : ${result}`);
} catch (error) {
  console.log("Error occor", error.message);
}

//try catch finally
try {
  console.log("Trying");
  throw new Error("Error throw form try");
} catch (eror) {
  console.log("Error Occur", eror.message);
} finally {
  console.log("Finallly clean up!");
}

class validationName extends Error {
  constructor(message) {
    super.message;
    this.name;
  }
}

try {
  throw new Error("Invalid input");
} catch (error) {
  if (error instanceof validationName) {
    console.log("Validation error Occur", error.message);
  } else {
    console.log("Error Occur", error.message);
  }
}
