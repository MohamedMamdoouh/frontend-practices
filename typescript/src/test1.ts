// let num = 10;
// num = "Elzero";
// console.log(num);

// let age = 30;

// if (age > 30) {
//   console.log("Good");
// } else {
//   console.log(age.repeat(3));
// }

////////////////////////////

// let name = "ali";
// let age = 20;
// let hire = true;

// let name: string = "ali";
// let age: number = 20;
// let hire: boolean = true;
// let all: any;

// name = 10; // error!
// all = 150;
// all = "test";

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

// console.log(add(10, "20"));
// console.log(typeof add(10, 20));

////////////////////////////

// let all: string | number | boolean;
// all = "Ahmed";
// all = 20;
// all = true;

// let arr: (string | number)[] = ["Ahmed", "Ali", "Mahmoud", 10];

// for (const element of arr) {
//   console.log(element.repeat(3)); // error!
// }

////////////////////////////

// let arr1: number[] = [1, 2, 3, 4];
// let arr2: string[] = ["a", "b"];
// let arr3: (string | number)[] = [1, 2, 3, 4, "a", "b"];
// let arr4: (string | number | boolean | number[])[] = [
//   1,
//   2,
//   3,
//   "a",
//   "b",
//   true,
//   false,
//   [1, 2, 3],
// ];

////////////////////////////

// let showMsg = true;
// function printDetails(name: string, age: number, salary: number): string {
//   if (showMsg) {
//     return `name: ${name}, age: ${age}, salary: ${salary}`;
//   }

//   return "no data";
// }

// console.log(printDetails("Ahmed", 40, 5000));

////////////////////////////

// function printData(name: string, age: number, country?: string) {
//   return `${name} - ${age} - ${country}`;
// }

// function printData2(name: string, age: number, country: string = "un") {
//   return `${name} - ${age} - ${country}`;
// }

// console.log(printData("ahmed", 30, "Egypt"));
// console.log(printData("mohamed", 30));
// console.log(printData2("ali", 30));

////////////////////////////

// function addAll(...nums: number[]) {
//   let sum = 0;
//   for (const item of nums) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));

////////////////////////////

// let result = function add(num1: number, num2: number): number {
//   return num1 + num2;
// };

// console.log(add(10, 20));

// let resultWithArrow = (num1: number, num2: number): number => num1 + num2;

// console.log(resultWithArrow(10, 20));

////////////////////////////

// type st = string;
// let name:st = "ali";
// name = "ahmed";
// // name = 10;

// type stnum = string | number;
// let all: stnum = "ahmed";
// all = 20;

////////////////////////////

// type buttons = {
//   up: string;
//   right: string;
//   left: string;
//   down: string;
// };

// function getActions(btns: last) {
//   console.log(`Action For Button Up Is ${btns.up}`);
//   console.log(`Action For Button Right Is ${btns.right}`);
//   console.log(`Action For Button Down Is ${btns.down}`);
//   console.log(`Action For Button Left Is ${btns.left}`);
// }

// type last = buttons & {
//   x: boolean;
// };

// getActions({
//   up: "Jump",
//   right: "Go Right",
//   down: "Go Down",
//   left: "Go Left",
//   x: true,
// });

////////////////////////////

// type nums = 0 | 1 | -1;

// function compare(num1: number, num2: number): nums {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1

// // let myNumber: nums = 10; // error

////////////////////////////

// let article: readonly [number, string, boolean] = [10, "hr", true];
// // article = [10, "hr", 20];
// // article = [10, "hr", true, 50];
// // article.push(50);
// console.log(article);

// const [id, rule, isActive] = article;
// console.log(id);
// console.log(rule);
// console.log(isActive);

////////////////////////////

// function logging(msg: string): void {
//   console.log(msg);
// }

// const fail = (msg: string) => {
//   throw new Error(msg);
// };

// function log(msg: string): never {
//   while (true) {
//     console.log(msg);
//   }
// }

////////////////////////////

// const KIDS = 10;
// const EASY = 20;
// const MEDIUM = 30;
// const HARD = 40;

// enum Level {
//   KIDS = 10,
//   EASY = 20,
//   MEDIUM = 30,
//   HARD = 40,
// }

// let level: string = "Easy";

// if (level === "Easy") {
//   console.log(`The Level Is ${level} And Number Of Seconds Is ${Level.EASY}`);
// }

////////////////////////////

// function getHardSeconds(): number {
//   return 3;
// }

// enum Kids {
//   Five = 25,
//   Ten = 40,
//   Eighteen = 50,
// }

// enum Level {
//   Kid = Kids.Ten,
//   Easy = 10,
//   MEDIUM = Easy - 5,
//   Hard = getHardSeconds(),
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
// }

////////////////////////////

// const img = document.getElementById("main-image") as HTMLImageElement;
// console.log(img.src);

// const img = <HTMLImageElement>document.getElementById("main-image");
// console.log(img.src);

// let data: any = 500;
// console.log(data.repeat(10));

////////////////////////////

// let all: number | string = 100;

// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }

// type B = A & {
//   four: number
// }

// type C = {
//   five: boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//   console.log(`Hello ${btns.one}`);
//   console.log(`Hello ${btns.two}`);
//   console.log(`Hello ${btns.three}`);
//   console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });

////////////////////////////

// let object: {
//   username: string;
//   id: number;
//   hire?: boolean;
//   skills: {
//     one: string;
//     two: string;
//   };
// } = {
//   username: "Ali",
//   id: 5,
//   skills: { one: "html", two: "js" },
// };

// object.username = "Ahmed";
// object.id = 66;
// object.hire = true;

////////////////////////////

// interface User {
//   id?: number;
//   readonly username: string;
//   country: string;
// }

// let user: User = {
//   id: 50,
//   username: "ali",
//   country: "Egypt",
// };

// // user.username = "ahmed"; // error!
// user.country = "KSA";
// console.log(user);

// function getData(data: User) {
//   console.log(`Id Is ${data.id}`);
//   console.log(`Username Is ${data.username}`);
//   console.log(`Country Is ${data.country}`);
// }

// getData({ id: 200, username: "Osama", country: "KSA" });

////////////////////////////

// interface User {
//   id: number;
//   username: string;
//   country: string;
//   sayHello(): string;
//   sayWelcome: () => string;
//   getNumber(num: number): number;
// }

// let user: User = {
//   id: 5,
//   username: "ahmed",
//   country: "Egy",
//   sayHello() {
//     return "Hello";
//   },
//   sayWelcome() {
//     return "Welcome";
//   },
//   getNumber(num) {
//     return num;
//   },
// };

// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getNumber(100));

////////////////////////////

// // Homepage
// interface Settings {
//   readonly theme: boolean;
//   font: string;
// }

// // Articles Page
// interface Settings {
//   sidebar?: boolean;
// }

// // Contact Page
// interface Settings {
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true,
// };

////////////////////////////

// interface User {
//   id: number;
//   username: string;
//   country: string;
// }

// interface Moderator extends User {
//   role: string | number;
// }

// interface Admin extends User, Moderator {
//   protect?: boolean;
// }

// let user: Admin = {
//   id: 1,
//   username: "Ali",
//   country: "Egy",
//   role: "owner",
//   protect: true,
// };

////////////////////////////

// class User {
//   username: string;
//   salary: number;
//   msg: () => string;

//   constructor(username: string, salary: number) {
//     this.username = username;
//     this.salary = salary;
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     };
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let user1 = new User("Ahmed", 6000);
// console.log(user1.username);
// console.log(user1.salary);
// console.log(user1.sayMsg());
// console.log(user1.msg());

////////////////////////////

// class User {
//   msg: () => string;
//   constructor(
//     private username: string,
//     protected salary: number,
//     public readonly address: string
//   ) {
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     };
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let user1 = new User("Ahmed", 6000, "Cairo");
// // console.log(user1.username); // error
// // console.log(user1.salary); // error
// console.log(user1.address);
// console.log(user1.sayMsg());
// console.log(user1.msg());

////////////////////////////

// class User {
//   public get username(): string {
//     return this._username;
//   }

//   public set username(value: string) {
//     this._username = value;
//   }
//   msg: () => string;

//   constructor(
//     private _username: string,
//     protected salary: number,
//     public readonly address: string
//   ) {
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     };
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let user1 = new User("Ahmed", 6000, "Cairo");
// // console.log(user1.username); // error
// // console.log(user1.salary); // error
// console.log(user1.address);
// console.log(user1.sayMsg());
// console.log(user1.msg());

// user1.username = "test";
// console.log(user1.username);

////////////////////////////

// class User {
//   private static count: number = 0;
//   public static getCount(): number {
//     // console.log(`${User.count} Objects Created`);
//     return User.count;
//   }

//   constructor(public username: string) {
//     User.count++;
//   }
// }

// let u1 = new User("t1");
// let u2 = new User("t2");
// let u3 = new User("t3");
// console.log(User.getCount());

////////////////////////////

// interface Settings {
//   theme: boolean;
//   font: string;
//   save(): void;
// }

// class User implements Settings {
//   constructor(
//     public username: string,
//     public theme: boolean,
//     public font: string
//   ) {}
//   save(): void {
//     console.log(`Saved`);
//   }
//   update(): void {
//     console.log(`Updated`);
//   }
// }

// let userOne = new User("Ahmed", true, "Arial");

// console.log(userOne.username);
// console.log(userOne.font);

// userOne.save();
// userOne.update();

////////////////////////////

// abstract class Food {
//   constructor(public title: string) {}
//   abstract getCookingTime() : void;
// }

// class Pizza extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Pizza Is 1 Hour`);
//   }
// }

// class Burger extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Burger Is Half Hour`);
//   }
// }

// let pizzaOne = new Pizza("Awesome Pizza", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);
// pizzaOne.getCookingTime();

////////////////////////////

// // Polymorphism => classes have the same methods, but different implementation.

// class Player {
//   constructor(public name: string) {}

//   public attack(): void {
//     console.log("Attacking Now");
//   }
// }

// class Amazon extends Player {
//   constructor(name: string, public spears: number) {
//     super(name);
//   }

//   public override attack(): void {
//     console.log("Attacking with spear");
//   }
// }

////////////////////////////

// function returnNumber(val: number): number {
//   return val;
// }
// function returnString(val: string): string {
//   return val;
// }
// function returnBoolean(val: boolean): boolean {
//   return val;
// }

// console.log(returnNumber(100));
// console.log(returnString("ali"));
// console.log(returnBoolean(true));

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<string>("ahmed"));
// console.log(returnType<number>(10));
// console.log(returnType<number[]>([1, 2, 3]));

////////////////////////////

// const returnTypeArrowSyntax = <T>(val: T): T => val;
// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Ali"));

// function multipleType<T1, T2>(value1: T1, value2: T2): string {
//   return `The First Value Is ${value1} And Second Value ${value2}`;
// }

// console.log(multipleType<number, string>(10, "ali"));
// console.log(multipleType<number, boolean>(100, true));

////////////////////////////

// class User<T = string> {
//   constructor(public value: T) {}

//   show(msg: T) {
//     console.log(`${msg} - ${this.value}`);
//   }
// }

// let user1 = new User<string>("Ahmed");
// console.log(user1.value);
// console.log(user1.show("hi"));

// let user2 = new User<number | string>(100);
// console.log(user2.value);
// console.log(user2.show("hi"));

////////////////////////////

// interface Book {
//   itemType: string;
//   title: string;
//   isbn: number;
// }

// interface Game {
//   itemType: string;
//   title: string;
//   style: string;
//   price: number;
// }

// class Collection<T> {
//   public data: T[] = [];
//   add(item: T) : void {
//     this.data.push(item);
//   }
// }

// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
// itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
// console.log(itemOne);

// let itemTwo = new Collection<Game>();
// itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
// console.log(itemTwo);

////////////////////////////

console.log("Hello from typescript");
