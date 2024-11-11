//create object
const person = {
  name: "Programmer",
  age: 21,
};

// access object
console.log(person.name);

//adding new  property
person.country = "USA";
console.log(person.country);

//using function
function persons(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new persons("Codelearner", 19);
console.log(person1.age);

//using class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person2 = new persons("Codelearner", 19);

console.log(person2.name); // we can use also this (console.log(person2["name"]);)

//change the properties values
person2["name"] = "JsLearner";
console.log(person2.name);

//deleting properties
console.log("Before Delete: ", person);

delete person.name;
console.log("After Delete: ", person);

//Advance Object
const school = {
  name: "Saraswati Multiple",
  classes: [
    {
      grade: 7,
      student: [
        {
          name: "Rohit",
          age: 20,
        },
        { name: "Rijan", age: 21 },
      ],
    },
    {
      grade: 8,
      student: [
        {
          name: "ramesh",
          age: 19,
        },
        {
          name: "karki",
          age: 22,
        },
      ],
    },
  ],
};

//access of the object properties
console.log(school.classes[0].student[1]);

//for..in loop

const people = {
  name: "CodeLover",
  age: 20,
  city: "Kathmandu",
};

for (let key in people) {
  console.log("For in loop " + key + " : " + person[key]);
}

//object key
Object.keys(people).forEach((key) => {
  console.log("Using Object key", key + " : " + people[key]);
});

//object values
const faculty = { name: "Coder", age: 20, faculty: "Computer Science" };

Object.values(faculty).forEach((values) => {
  console.log("Using Object Values", values);
});

//object entries
const studentss = {
  name: "Learner",
  age: 21,
  faculty: "Computer-Science",
};

Object.entries(studentss).forEach(([key, values]) => {
  console.log("Using Object Entries", key + " : " + values);
});
