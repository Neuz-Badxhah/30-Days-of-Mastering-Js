//Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eats food`);
  }
}

//Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  //Method overriding

  eat() {
    console.log(`${this.name} eats dog food`);
  }
  breedInfo() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}
const animal1 = new Animal("Lion");
animal1.eat(); //From animal class in animal class

const dog1 = new Dog("Tommy", "Bull Dog");
dog1.eat(); //From animal class in dog class
dog1.breedInfo(); //From Dog class in dog class
