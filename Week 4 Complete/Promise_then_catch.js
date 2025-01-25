let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const IsCOndition = false; // Change the value to true to see the promise successful
    if (IsCOndition) {
      resolve("Promise successful");
    } else {
      reject("Promise failed");
    }
    2000;
  });
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise Successful"), 2000);
});

promise1.then((data) => console.log(data)); //Then

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise Failed"), 4000);
});
promise2.catch((error) => console.log(error)); //Catch

// promise All
let Promises1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});
let Promises2 = new Promise((resolve, reject) => {
  resolve("Promise 2");
});
let Promises3 = new Promise((resolve, reject) => {
  resolve("Promise 3");
});
let Promises4 = new Promise((resolve, reject) => {
  resolve("Promise 4");
});

Promise.all([Promises1, Promises2, Promises3, Promises4])
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); //if any of the promise fails, it will catch the error
