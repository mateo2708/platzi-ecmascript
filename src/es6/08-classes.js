class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }
}

const newUser = new User('Mateo', 26);

console.log(newUser.uAge);
newUser.uAge = 10;
console.log(newUser.uAge);
