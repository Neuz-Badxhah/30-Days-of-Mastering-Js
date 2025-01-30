//Map function method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const doubled = numbers.map((num) => num * 2);
console.log(`Using Map: ${doubled}`);

//Filter Method
const even = numbers.filter((num) => num % 2 == 0);
console.log(`Using filer: ${even}`);

//Reduce Method
const sum = numbers.reduce((num, acc) => acc + num, 0);
console.log(`Using Reduce: ${sum}`);

//real time use case
//Map
const users = [
  { id: 1, name: "java", batch: 2078 },
  { id: 2, name: "python", batch: 2079 },
  { id: 3, name: "c++", batch: 2080 },
  { id: 4, name: "javascript", batch: 2081 },
  { id: 5, name: "ruby", batch: 2082 },
];

const names = users.map((user) => user.name);
console.log(names);

//Filter
const products = [
  { id: 1, name: "laptop", price: 1000, quantity: 10 },
  { id: 2, name: "mobile", price: 500, quantity: 20 },
  { id: 3, name: "watch", price: 200, quantity: 30 },
  { id: 4, name: "headphone", price: 300, quantity: 40 },
  { id: 5, name: "charger", price: 400, quantity: 50 },
];

const affordable = products.filter((product) => product.price < 500);
console.log(affordable);

//reduce
const orders = [
  { product: "Mobile", price: 500, quantity: 2 },
  { product: "Watch", price: 200, quantity: 3 },
  { product: "Headphone", price: 300, quantity: 4 },
];

const total = orders.reduce(
  (acc, order) => acc + order.quantity * order.price,
  0
);
console.log(total);
