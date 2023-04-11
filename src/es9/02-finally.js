const anotherFunction = (condition) => {
  // This promise is an anonymous function
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve('Hey!');
    } else {
      reject('Buuuh');
    }
  });
};

anotherFunction(true)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Promised is finished');
  });
