//Immutability
//mutable approach (not Recommend)
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1,2,3,4]

//Immutable approach (recommend)
const newArr = [...arr, 5];
console.log(newArr); // [1,2,3,4,5]
console.log(arr); //[1,2,3,4]

//Pure function
function add(a, b) {
  return a + b;
}
console.log("Pure Function: " + add(3, 4));

//Impure Function
let total = 0;
function addTotalAmount(amount) {
  total += amount;
  return total;
}
console.log(addTotalAmount(10)); // 10
console.log(addTotalAmount(20)); // 30

//Higher order Function
function multiple(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiple(2);
console.log(double(4));     //8


