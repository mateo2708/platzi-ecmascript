function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Mateo', 'David', 'Carlos']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
