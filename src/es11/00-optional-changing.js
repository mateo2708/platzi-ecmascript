const users = {
  mateo: {
    country: 'CO',
  },
  paco: {
    country: 'CL',
  },
};

console.log(users.mateo.age); // Returns undefined
// console.log(users.ana.age); // Throws error
console.log(users.ana?.age); // Returns undefined
