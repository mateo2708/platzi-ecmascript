// Array destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring
let user = { username: 'mateo', age: 26 };
const { username, age } = user;
console.log(username, age);

// Spread operator
let person = { name: 'mateo', age: 26 };
let country = 'CO';

let data = { id: '1', ...person, country };
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(1, 2, 3);
