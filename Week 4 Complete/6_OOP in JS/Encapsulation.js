class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Getter for diameter
  get diameter() {
    return this.radius * 2;
  }

  //Setter for diameter
  set diameter(value) {
    return value / 2;
  }
}

const circle1 = new Circle(5);
console.log(circle1.diameter); //10

circle1.diameter = 20;
console.log(circle1.diameter); //10


