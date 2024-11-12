//JavaScript object notation (JSON)
/*
{
"name":"Coder",
"age": 20,
"address":{
    "street":"xyz 123",
     "country":   "Nepal" ,
    }
}
*/

//use json Stringify
const person = {
  name: "Coder",
  age: 20,
  address: {
    street: "xyz 123",
    country: "Nepal",
  },
};
const jsonFormat = JSON.stringify(person);
console.log("From Json Stringify: " + jsonFormat); //output : {"name":"Coder","age":20,"address":{"street":"xyz 123","country":"

//use json parse
const jsonParse = JSON.parse(jsonFormat);
console.log("From Json Parse: " + JSON.stringify(jsonParse)); //output : { name: 'Coder', age: 20,

//by function
const Json_Parse_function = JSON.parse(jsonFormat, (key, value) => {
  if (jsonFormat.age == 26) {
    return value + 1;
  }
  return value;
});

console.log("Json parse using funtion" + JSON.stringify(Json_Parse_function)); //output : { name: 'Coder', age: 21, address:
