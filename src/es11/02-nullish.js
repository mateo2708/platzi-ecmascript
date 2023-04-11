const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate); // Returns anotherNumber

const theOtherNumber = undefined;
const validate2 = theOtherNumber ?? 5;
console.log(validate2); // Returns 5
