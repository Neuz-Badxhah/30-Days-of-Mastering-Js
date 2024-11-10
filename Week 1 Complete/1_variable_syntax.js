//; is use while end of the line through it is optional

//variable are 3 type
/*let
use:for those variable which can be change or update*/
let num = 0;
console.log("Let variable");
for (i = 0; i <= 10; i++) {
  num = +i;
  console.log(num);
}

//const
//use:for those variable which can not be change or update
const pi = 3.14;
const maxItem = 100;
console.log("Const variable");
//console.log(pi = 3.15);       //error
//console.log(maxItem = 200);   //error
console.log(pi);
console.log(maxItem);

//var
//use:for those variable which can be change or update but it can be confused  with other variable so it  is not recommended
var color = "red";
if (color == "blue") {
  color = "blue";
  console.log("The change color is ", color);
} else {
  console.log("The color is ", color, "remain same.");
}
