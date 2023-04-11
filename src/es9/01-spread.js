const user = { username: 'Mateo', age: 26, country: 'CO' };

const { username, ...otherProperties } = user;

console.log(username);
console.log(otherProperties);
