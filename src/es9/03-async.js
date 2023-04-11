async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
  yield await Promise.resolve(4);
}

const generator = anotherGenerator();

generator.next().then((res) => console.log(res.value));
generator.next().then((res) => console.log(res.value));
generator.next().then((res) => console.log(res.value));
generator.next().then((res) => console.log(res.value));

console.log('This should be printed before');

async function arrayOfNames(array) {
  // Interesting way of useing async in a for loop
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(['Mateo', 'Nicolas', 'Juliana']);
console.log('This should be printed before too');
