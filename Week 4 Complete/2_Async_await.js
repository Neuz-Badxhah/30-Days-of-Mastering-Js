//Basic Example of Async Await
async function DelayPrint() {
  let promise = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Successful after 2 sec."), 2000);
  })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
DelayPrint();

// //Basic Example of Async Await with API
async function UserData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
}
UserData();

//Multiple Async Await
async function MultipleUserData() {
  try {
    let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response1.json();

    let response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data2 = await response2.json();

    console.log(data, data2);
  } catch (error) {
    console.log(error);
  }
}
MultipleUserData();

//Async Await with Promise.all
async function MultipleUserDatas() {
  try {
    let response1 = fetch("https://jsonplaceholder.typicode.com/users");
    let response2 = fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await Promise.all([response1, response2]);

    console.log("Multiple User Data");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

MultipleUserDatas();
