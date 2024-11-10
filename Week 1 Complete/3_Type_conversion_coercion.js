//type conversion
// sting conversion
let num = 100;
let str = String(num);
console.log(num);
console.log(str);

//Number conversion
let string = "10";
let number = Number(string);
console.log(`This is string ${string}`);
console.log(number);
console.log(`This is number ${number}`);

//boolean conversion
let name = "jsLearner";
let isTrue = Boolean(name);
console.log(name);
console.log(isTrue);
let emptyStr = "";
console.log(emptyStr);
let isFalse = Boolean(emptyStr);
console.log(isFalse);

//type coercion
//string coercion
let num1 = "2";
let num2 = num1 + 2;
console.log(num2);

//number  coercion
let num3 = num2 * 3;
console.log(num3);

// boolean  coercion
if ("") {
  //0, "",  null, undefined, NaN

  console.log("This won't run"); //is falsy, so it skips this block
}

if ("jsLearner") {
  //non zero number,  non empty string, non null object, non undefined, non NaN
  console.log("This will run"); //is truthy, so it runs this block
}

//common issue with coercion
//adding number and string
let x = "3" + 2; //32  (coercion with string)
let y = "3" - 2; //1  (coersion with  number)

//comparisons with == and ===
let a = 0;
let b = false;
console.log(a == b);   //loose equality
console.log(a === b);   //strict equality
