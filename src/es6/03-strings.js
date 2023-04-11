// Before ES6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// After ES6
// Template Strings:
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-linte strings
// Before ES6
let lorem = 'esto es un string \n' + 'esto es otra linea';
console.log(lorem);

//After ES6
let lorem2 = `Esto es una frase epica
en otra linea`;
console.log(lorem2);
