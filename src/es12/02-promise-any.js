const promise1 = new Promise((resolve, reject) => reject('Rejectado'));
const promise2 = new Promise((resolve, reject) => resolve('Resolvado'));
const promise3 = new Promise((resolve, reject) => resolve('Resolvado 2'));

Promise.any([promise1, promise2, promise3]).then((res) =>
  // Promise.any retorna la primera promesa que se resuelva
  console.log('Response in Promise.any', res)
);
