try {
  hello();
} catch (error) {
  console.log(error);
}

// Now the error message is optional
// No se cuando usar esto...
try {
  hello();
} catch {
  console.log('Error personalizado');
}
