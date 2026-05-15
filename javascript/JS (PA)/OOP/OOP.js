class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class User {
  name = "Guest";
  age = 0;

  greet() {
    console.log("Hello, " + this.name);
  }
}

const u = new User();
u.greet();

class Product {
  category = "General";

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const p = new Product("Laptop", 1000);
console.log(p);

class User2 {
  constructor(name) {
    this._name = name;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

const u2 = new User2("Ahmed");
u2.name = "Sara";

console.log(u2.name);

class Account {
  constructor(balance) {
    this._balance = balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = value;
  }

  get balance() {
    return this._balance;
  }
}

const acc = new Account(100);
acc.balance = 200;
console.log(acc.balance);

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3));

class Config {
  static appName = "My App";
  static version = "1.0.0";
}

console.log(Config.appName);
console.log(Config.version);

class Calculator {
  static version = "1.0";

  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

class Animal {
  eat() {
    return "Eating...";
  }
}

class Mammal extends Animal {
  walk() {
    return "Walking...";
  }
}

class Human extends Mammal {
  speak() {
    return "Talking...";
  }
}

const h = new Human();

console.log(h.eat());
console.log(h.walk());
console.log(h.speak());

/////////////////////////////

class Animal2 {
  speak() {
    return "Generic sound";
  }
}

class Cat extends Animal2 {
  speak() {
    return "Meow";
  }
}

const cat = new Cat();
console.log(cat.speak());

////////////////////////////

class Employee {
  constructor(name) {
    this.name = name;
  }

  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  getRole() {
    return super.getRole() + " (Manager)";
  }
}

//////////////////////////

class Vehicle {
  move() {
    return "The vehicle moves";
  }
}

class Car2 extends Vehicle {
  move() {
    return "The car drives";
  }
}

class Plane extends Vehicle {
  move() {
    return super.move() + " and flies in the sky";
  }
}

/////////////////////////

class User {
  #password;

  constructor(password) {
    this.#password = password;
  }
}

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
  }

  #validateAmount(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
  }
}

class Example {
  publicValue = 10; // public
  #privateValue = 20; // private
}
