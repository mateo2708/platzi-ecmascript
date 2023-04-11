const anotherFunction = () => {
  // This promise is an anonymous function
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Buuuh');
    }
  });
};

anotherFunction()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
