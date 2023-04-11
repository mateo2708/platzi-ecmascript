const fnAsync = (condition) => {
  return new Promise((resolve, reject) => {
    condition
      ? setTimeout(() => resolve('Promiseeee resolved!!!', 2000))
      : reject(new Error('Pailanders'));
  });
};

const myFn = async (condition) => {
  const sometthing = await fnAsync(condition);
  console.log(sometthing);
};

console.log('Before');
myFn(true);
console.log('After');
