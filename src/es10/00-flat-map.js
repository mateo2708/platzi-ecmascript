// flat() aplana un arreglo multi dimensional
const array = [1, 1, 2, 3, 5, [1, 3, 5, [2, 4, 5, 6]]];
console.log(array.flat(3));

// flatMap aplana el resultado con una funcion de mappeo
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((v) => [v, v * 2]));


