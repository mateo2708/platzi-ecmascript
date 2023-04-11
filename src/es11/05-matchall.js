const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana, orange, Apple,  etc.';

for (const match of fruit.matchAll(regex)) {
  // Returns an array with all the matches from the regex
  console.log(match);
}
