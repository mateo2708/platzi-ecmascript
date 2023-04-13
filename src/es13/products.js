import fetch from 'node-fetch';

// Now we can use await directly on the top-level of the file, without an async function to be needed
const response = await fetch('https://api.escuelajs.co/api/v1/products');
export const products = await response.json();
