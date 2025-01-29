//global scope
const globalVariable = "global var";

function printGlobal() {
  console.log(globalVariable);
}

printGlobal();

//Functional Scope
function functionScope() {
  const functionVariable = "Function Var";
  console.log(functionVariable);
}

functionScope();
// console.log(functionVariable);      //ReferenceError - functionVariable is not defined

//Block Scope
if (true) {
  const blockVariable = "Block Var";
  console.log(blockVariable);
}

// console.log(blockVariable); //ReferenceError - blockVariable is not defined

//Closure Scope         //Closure is powerful concept in JavaScript use to encapsulate the state of a function
function OuterFunction() {
  const outer = "I am outer function";

  function InnerFunction() {
    const inner = "I am innner function";
    console.log(outer);
    console.log(inner);
  }

  return InnerFunction;
}

const innerFunc = OuterFunction();
innerFunc();

//Practise Clouser Example

//Data Encapsulation
function counter() {
  let count = 0;
  function CounterIncrement() {
    count++;
    return count;
  }
  return CounterIncrement;
}

const Count = counter();
console.log(Count()); //output 1
console.log(Count()); //output 2
console.log(Count()); //output 3

//CallBack Function
function getData(dataURI, callback) {
  setTimeout(() => {
    const data = "Data from " + dataURI;
    callback(data);
  }, 1000);
}
getData("https;//api.github.com/users", function (data) {
  console.log(data);
});


//Lexical Scope
function lexicalScope() {
  let lexical = "I am lexical scope";
  function innerFunction() {
    console.log(lexical);
  }
  innerFunction();
}

lexicalScope();