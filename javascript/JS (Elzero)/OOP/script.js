// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

/////////////////////////////////////

// class User {
//   constructor(id, username, salary) {
//     this.id = id;
//     this.username = username;
//     this.salary = salary;
//   }
// }

// let user1 = new User(1, "ali", 1500);
// console.log(user1.id);
// console.log(user1.username);
// console.log(user1.salary);

// console.log(user1 instanceof User);
// console.log(user1.constructor === User);

/////////////////////////////////////

// class User {
//   constructor(id, username, salary) {
//     this.id = id;
//     this.username = username || "Unknown";
//     this.salary = salary < 6000 ? salary + 400 : salary;
//     this.msg = function () {
//       return `Hello ${this.username}. salary = ${this.salary}`;
//     };
//   }

//   writeMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let user1 = new User(2, "ali", 2000);
// let user2 = new User(3, "ahmed", 3000);

// console.log(user1.username);
// console.log(user1.salary);
// console.log(user1.writeMsg());
// console.log(user1.msg());

/////////////////////////////////////

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }

//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

/////////////////////////////////////

// class User {
//   static count = 0;

//   constructor(id, username, salary) {
//     this.id = id;
//     this.username = username;
//     this.salary = salary;

//     User.count++;
//   }

//   static sayHello() {
//     return "hello";
//   }

//   static countMembers() {
//     return `${this.count} members count`;
//   }
// }

// let userOne = new User(100, "Ali", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.username);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());

/////////////////////////////////////

// // Parent Class
// class User {
//   constructor(id, username) {
//     this.id = id;
//     this.username = username;
//   }

//   sayHello() {
//     return `Hello ${this.username}`;
//   }
// }

// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.permissions = permissions;
//   }
// }

// class SuperUser extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.ability = ability;
//   }
// }

// let userOne = new User(100, "Ali");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.username);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.id);
// console.log(adminOne.username);
// console.log(adminOne.sayHello());

/////////////////////////////////////

// class User {
//   #eSalary;
//   constructor(id, username, eSalary) {
//     this.id = id;
//     this.username = username;
//     this.#eSalary = eSalary;
//   }

//   getSalary() {
//     return Number.parseInt(this.#eSalary);
//   }
// }

// let userOne = new User(100, "Ali", "5000 EGP");

// console.log(userOne.username);
// console.log(userOne.getSalary() * 0.3);

/////////////////////////////////////

// class User {
//   constructor(id, username) {
//     this.id = id;
//     this.username = username;
//   }
//   sayHello() {
//     return `Hello ${this.username}`;
//   }
// }

// let userOne = new User(100, "Ali");
// console.log(User.prototype);

// let strOne = "Ahmed";
// console.log(String.prototype);

/////////////////////////////////////

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }

//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Ali");
// console.log(User.prototype);
// console.log(userOne);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.test = "test prototype";

// String.prototype.addDotAfter = function () {
//   return `.${this}`;
// };

// console.log(String.prototype);
// let myString = "Ahmed";
// console.log(myString.addDotAfter());

/////////////////////////////////////

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   value: 150,
// });

// myObject.c = 100;

// console.log(delete myObject.c);

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);

/////////////////////////////////////

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));
