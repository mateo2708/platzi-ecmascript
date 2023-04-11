// Enhanced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser('mateo', 26, 'CO', '1234'));
