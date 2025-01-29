console.log(this); //Window Object

//Use this in function
const address = {
  city: "kathmandu",
  Street: "Gongabu",
};
function myFunction() {
  const name = "Coder";
  console.log(this);
  console.log(`Hello ${name}`);
  console.log("My Address is", this.city, this.Street);
}

myFunction(); //Window Object

//Call Method
console.log("\nThis is from Call Method");
myFunction.call(address);

//apply method
console.log("\nThis is from apply method");
myFunction.apply(address);

//bind method
console.log("\nThis is from bind method");
myFunction.bind(address)();
