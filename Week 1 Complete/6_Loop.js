//for loop
console.log("For loop");
for (i = 1; i <= 10; i++) {
  console.log(i, "Happy coding");
}

let num = 1;
for (i = 2; i <= 12; i++) {
  num = +i;
  console.log(num);
}

//while
num = 1;
console.log("While loop");
while (num < 10) {
  console.log(num);
  num++;
}

//Do while
num = 2;
console.log("Do While loop");
do {
  console.log(num);
  num++;
} while (num <= 10);

//break
num = 1;
console.log("Break:");
for (i = 2; i <= 12; i++) {
  if (num == 10) {
    break;
  }
  num = +i;
  console.log(num);
}

//Continue
num = 1;
console.log("Continue:");
for (i = 2; i <= 12; i++) {
  if (i == 10) {
    continue;
  }
  num = +i;
  console.log(num);
}
