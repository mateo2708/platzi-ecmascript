// Before ES6
function newUser(name, age, country) {
  var name = name || 'Mateo';
  var age = age || 26;
  var country = country || 'CO';
  console.log(name, age, country);
}

newUser();
newUser('Carlos', 28, 'MX');

// After ES6
function newUser(name = 'Mateo', age = 26, country = 'CO') {
  console.log(name, age, country);
}

newUser();
newUser('Carlos', 28, 'MX');
