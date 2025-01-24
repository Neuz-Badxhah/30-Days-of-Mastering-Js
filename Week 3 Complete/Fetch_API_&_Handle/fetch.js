//API
fetch("https://jsonplaceholder.typicode.com/users") //Fetch data from the API
  .then((response) => response.json())
  .then((data) => console.log(data)) //Handle data
  .catch((error) => console.log(error)); //Handle error

//API HANDLE PROMISE
fetch("https://jsonplaceholder.typicode.com/users") //Fetch data from the API
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const data = response.json();
    console.log(data);
  })
  .then((users) => console.log(users)) //Handle data //Get the  full user data
  .catch((error) => console.log(error)); //Handle error

  //Fethch onlu user Id
  fetch ("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    if(!response.ok){
       throw new Error("HTTP error, status =" + response.status)
      }
        return response.json();
     })
     .then(user=>{
      const userName = user.map((user)=>user.name)    //Get only the user name
      console.log(userName)
     })
     .catch(error=>console.log(error))
  