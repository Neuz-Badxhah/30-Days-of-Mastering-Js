//Create array
let fruit = ["Apple", "Banana", "Mango"];
console.log("Access Array: ", fruit); //output : ["Apple", "Banana", "Mango"]

//Change particular array element
fruit[2] = "Papaya";
console.log("Access Array after change particular element: ", fruit); //output:  ["Apple", "Banana", "Papaya"]

//to find array length
console.log("Access Array length: ", fruit.length); //output:  3

//Print particular array element
console.log("Access particular array element: ", fruit[2]); //output:   Papaya

//Add Array emelent
fruit.push("Graps");
console.log("After add new element: ", fruit); //output:   ["Apple", "Banana", "Papaya", "Graps"]

//Remove aaray element
fruit.pop();
console.log("Remove array last element: ", fruit); //output:    ["Apple", "Banana", "Papaya"]

//shift element  (Removes first element)
fruit.shift();
console.log("Removes first element: ", fruit); //output:    ["Banana", "Papaya"]

//unshift element (Add first element)
fruit.unshift("Orange");
console.log("Add first element: ", fruit); //output:    ["Orange", "Banana", "Papaya"]

//Array Destructuring
let [a, b, c] = fruit;
console.log("Array Destructuring: ", a, b, c); //output:  Orange Banana papaya

//Advance Array topic
//foreach
let arr = [2, 3, 4];
arr.forEach((mul_of_arr) => console.log("For each in array:", mul_of_arr * 2)); //output:  4 6 8

//Map
const numbers = [3, 4, 5, 6, 1];
const multiple = numbers.map((num) => num / 2);
console.log("Map: ", multiple); //output:  [1.5, 2,

//filter
const filternumber = numbers.filter((num) => num >= 3);
console.log("Filter in array: ", filternumber);

//reduce
const sum = numbers.reduce((val, num) => val + num, 0);
console.log("Reduce: ", sum);

//sort
const shortNumber = [4, 5, 3, 20, 60, 1, 7, 8, 0];
shortNumber.sort((a, b) => a - b);
console.log("Sort: ", shortNumber);

shortNumber.sort((a, b) => b - a);
console.log("Sort: ", shortNumber);

//reverse
shortNumber.reverse();
console.log("Reverse: ", shortNumber);

//find
const findNumber = shortNumber.find((num) => num > 3);
console.log("Find: ", findNumber);

//include
console.log("Include: ", shortNumber.includes(9));
