/* Arthimetic operatior
# 1. Addition #2.  Subtraction #3. Multiplication #4. Division*/
//Addition
let num1 = 10;
let num2 = 2;
let result = num1 + num2;
console.log("Addition: ", result); // Output: 12

//Subtraction
let num3 = 50;
let num4 = 23;
let result1 = num3 - num4;
console.log("Subtraction: ", result1); // Output: 27

//Multiplication
let num5 = 5;
let num6 = 3;
let result2 = num5 * num6;
console.log("Multiplication: ", result2); // Output: 15

//Division
let num7 = 10;
let num8 = 2;
let result3 = num7 / num8;
console.log("Division: ", result3); // Output: 5.0

/* Comparision Operator
# 1. Equal to (==)  #2. Not Equal to (!=) #3. Greater than (>) #4. Less than  (<) 
#5. Greater than or equal to (>=) #6. Less than or equal*/

//Equal to
let num9 = 10;
let num10 = 10;
let result4 = num9 == num10;
console.log("Equal to: ", result4); // Output: true

//Not Equal to
let num11 = 10;
let num12 = 20;
let result5 = num11 != num12;
console.log("Not Equal to: ", result5); // Output: true

//Greater than
let num13 = 10;
let num14 = 5;
let result6 = num13 > num14;
console.log("Greater than: ", result6); // Output: true

//Less than
let num15 = 10;
let num16 = 15;
let result7 = num15 < num16;
console.log("Less than: ", result7); // Output: true

//Greater than or equal to
let num17 = 10;
let num18 = 10;
let result8 = num17 >= num18;
console.log("Greater than or equal to: ", result8); // Output: true

//Less than or equal to
let num19 = 10;
let num20 = 10;
let result9 = num19 <= num20;
console.log("Less than or equal to: ", result9); // Output: true

/*logical operator 
#1. AND (&&)  #2. OR (||) #3. NOT (!)*/
//AND   (true if both conditions are true)
let num21 = 10;
let num22 = 20;
let result10 = num21 > 5 && num22 < 25;
console.log("AND: ", result10); // Output: true

//OR   (true if at least one condition is true)
let num23 = 10;
let num24 = 20;
let result11 = num23 > 5 || num24 > 25;
console.log("OR: ", result11); // Output: true

//NOT (reverses the boolean value)
let num25 = 10;
let result12 = !(num25 > 5);
console.log("NOT: ", result12); // Output: false

/*Assign Operator
#1. = (Simple Assignment)  #2. += (Addition Assignment)
 #3. -= (Subtraction Assignment) #4 . *= (Multiplication Assignment) 
 #5. /= (Division Assignment)*/

// Simple Assignment
let num26 = 10;
let num27 = 20;
num26 = num27;
console.log("Simple Assignment: ", num26); // Output: 20
// Addition Assignment
let num28 = 10;
let num29 = 20;
num28 += num29;
console.log("Addition Assignment: ", num28); // Output: 30
// Subtraction Assignment
let num30 = 10;
let num31 = 20;
num30 -= num31;
console.log("Subtraction Assignment: ", num30); // Output: -10
// Multiplication Assignment
let num32 = 10;
let num33 = 20;
num32 *= num33;
console.log("Multiplication Assignment: ", num32); // Output: 200
// Division Assignment
let num34 = 10;
let num35 = 20;
num34 /= num35;
console.log("Division Assignment: ", num34); // Output: 0.5

//incrememt/decrement operator
let num36;
let num37 = 20;
// Post-Increment
num36 = num37++;
console.log("Post-Increment: ", num36); // Output: 20
// Pre-Increment
num36 = ++num37;
console.log("Pre-Increment: ", num36); // Output: 22
// Post-Decrement
num36 = num37--;
console.log("Post-Decrement: ", num36); // Output: 22
// Pre-Decrement
num36 = --num37;
console.log("Pre-Decrement: ", num36); // Output: 20

// Ternary Operator   //sorterhand for if else
let num38 = 10;
let num39 = 20;
console.log(
  "Ternary Operator: ",
  num38 > num39 ? "num38 is greater" : "num39 is greater"
); //Output: num39 is greater

/* Bitwise operator
AND (&) OR  (|) XOR (^) NOT (~) Left Shift (<<) Right Shift (>>) Unsigned Right */
let num40 = 5;
let num41 = 3;
// Bitwise AND
console.log("Bitwise AND: ", num40 & num41); // Output: 1
// Bitwise OR
console.log("Bitwise OR: ", num40 | num41); // Output: 7
// Bitwise XOR
console.log("Bitwise XOR: ", num40 ^ num41); // Output: 6
// Bitwise NOT
console.log("Bitwise NOT: ", ~num40); // Output: -6
//Bitwise left shift
console.log("Bitwise left shift: ", num40 << 1); // Output: 10
//Bitwise right shift
console.log("Bitwise right shift: ", num40 >> 1); // Output: 2
