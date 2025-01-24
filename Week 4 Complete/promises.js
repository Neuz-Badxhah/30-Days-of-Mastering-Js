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
