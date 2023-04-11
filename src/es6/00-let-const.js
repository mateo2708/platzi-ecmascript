var lastName = 'Tafurt';
lastName = 'Garcia';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // Function scope
    let fruit2 = 'Kiwi'; // Block scope
    const fruit3 = 'Banana'; // Block scope
  }
  console.log(fruit1);
  //   console.log(fruit2); --> Won't work because of block scope
  //   console.log(fruit3); --> Won't work because of block scope
};

fruits();
