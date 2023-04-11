const promise1 = new Promise((resolve, reject) => reject('Rejectado'));
const promise2 = new Promise((resolve, reject) => resolve('Resolvado'));
const promise3 = new Promise((resolve, reject) => resolve('Resolvado 2'));

// Old stuff => Returns an array with the results of the fulfilled promises and wont resolve y any of them is rejected
Promise.all([promise1, promise2, promise3])
  .then((res) => console.log('Response in Promise.all', res))
  .catch((err) => console.log('Catch in Promise.all', err));

// New stuff => The result of all the promises is returned even if is rejected
Promise.allSettled([promise1, promise2, promise3]).then((res) =>
  console.log('Response in Promise.allSettled', res)
);
