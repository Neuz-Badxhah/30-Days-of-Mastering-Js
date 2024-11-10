//string
/* "" '' ``*/

let name = "jsLearner";
let greeting = "Namaste";
let message = `Hi, ${name}`;
console.log(message); // Hi, jsLearner

//number
/*int 1 ,1,2,3,4,5,56,6 -2,3-2,4-,-4,2-4,-5
float  1.1,1.2,1.3,1.4,1.5
infinity
NaN
*/

let age = 21; //int
let height = 1.75; //float
let infinity = Infinity; //infinity
let notanumber = "hello" * 2; //NaN  hello cannnot be multiplied
console.log(age, height, infinity, notanumber); // 21 1.75 Infinity NaN

//Boolean
/*true false*/

let isstudent = true;
let ismarried = false;
if (isstudent) {
  console.log("Welcome, Student!");
}
if (ismarried == false) {
  console.log("Student is married");
}

//null
let result = null;
console.log(result); // null
//undefined
let address;
console.log(address); // undefined

//symbols
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id==id2);   //output flase ..because all symbols are always unique

