// console.log("Mohamed");
// console.log(typeof "Mohamed");
// console.log(typeof 50);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof true);
// console.log(typeof 50.5);
// console.log(typeof [5, 6, 8]);
// console.log(typeof { name: "Ali", age: 25, position: "Employee" });

// ================================================ //

// var name = "Ahmed 'Mamdouh'";
// var name2 = "Ali";
// var name3 = 'Ali "Ibrahim"';

// console.log(name);
// console.log(name2);
// console.log(name3);
// console.log(header);

// let test1 = "test";
// const test2 = "test2";

// console.log(
//   "this is ignored \
// so please \
// be careful"
// );

// console.log("this is ignored \nso please\nbe careful");

// ================================================ //

// let name1 = "Mohamed";
// let name2 = "Mamdouh";
// console.log(`hello, ${name1} - ${name2}, age is ${5 * 4} years`);
// console.log(`hello,
//     ${name1}`);

// let name1 = "Ali";

// let card = `<div>
// <h3> Hello, ${name1} </h3>
// <p> this is ${name1}</p>
// </div>`;

// // Avoid document.write / writeln in externally-loaded scripts.
// // Using DOM insertion (insertAdjacentHTML) is safe for deferred/async scripts.
// document.body.insertAdjacentHTML("beforeend", card.repeat(4));

// ================================================ //

// console.log(10 * 10);
// console.log(10 + "Ahmed");
// console.log(10 - "Ahmed");
// console.log(typeof NaN);
// console.log(100 / 10);
// console.log(2 ** 4);
// console.log(4 % 2);
// let num = 5;
// console.log(num++);
// console.log(++num);

// console.log(+10);
// console.log(+"10");
// console.log(+"-10");
// console.log(+"10.5");
// console.log(+"Mohamed");
// console.log(+true);
// console.log(+false);
// console.log(+null);

// console.log(-10);
// console.log(-"10");
// console.log(-"-10");
// console.log(-"10.5");
// console.log(-"Mohamed");
// console.log(-true);
// console.log(-false);
// console.log(-null);

// ================================================ //

// let a = 10,
//   b = "5",
//   c = true;

// console.log(a + b + c);
// console.log(a + +b + +c);
// console.log(+"" - 5);
// console.log(false - true);

// let a = 10;
// a = a + 5;
// a += 10;
// console.log(`a is ${a}`);

// ================================================ //

// console.log(1000000);
// console.log(1_000_000);
// console.log(10 ** 6);
// console.log(1e6);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// ================================================ //

// console.log((100).toString());
// console.log((57.6824).toFixed());
// console.log((57.6824).toFixed(2));
// console.log((57.6864).toFixed(2));

// console.log(Number("10 Mohamed"));
// console.log(Number("Mohamed 10"));
// console.log(parseInt("10 Mohamed"));
// console.log(parseInt("Mohamed 10"));
// console.log(parseFloat("10.684 Mohamed"));
// console.log(Number.parseInt("Mohamed 10"));
// console.log(Number.parseInt("10 Mohamed"));

// console.log(Number.isInteger("10"));
// console.log(Number.isInteger("10.5"));
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.6));
// console.log(Number.isNaN("10 Ahmed"));
// console.log(Number.isNaN("Ahmed / 10"));

// ================================================ //

// console.log(Math.round(50.2));
// console.log(Math.round(50.6));

// console.log(Math.ceil(50.2));
// console.log(Math.ceil(50.6));

// console.log(Math.floor(50.2));
// console.log(Math.floor(50.6));

// console.log(Math.min(5, -9, 54, -9));
// console.log(Math.max(5, -9, 54, -9));

// console.log(Math.pow(2, 3));

// console.log(Math.trunc(50.2));
// console.log(Math.trunc(50.6));

// console.log(Math.random());
// console.log(Math.abs(-50));
// console.log(Math.sqrt(16));

// ================================================ //

// let value = "Mohamed";
// console.log(value[2]);
// console.log(value.charAt(2));

// let value2 = "  Mohamed    ";
// console.log(value2.length);
// console.log(value2.toUpperCase());
// console.log(value2.toLowerCase());
// console.log(value2.trim());
// console.log(value2.trim().charAt(2).toUpperCase());

// let value = "this is a test for string";
// console.log(value.indexOf("test"));
// console.log(value.indexOf("test", 11));
// console.log(value.lastIndexOf("a"));

// let value = "this is a slice test!";
// console.log(value.slice(0));
// console.log(value.slice(0, 5));
// console.log(value.slice(2, 5));
// console.log(value.slice(-2));
// console.log(value.repeat(3));

// let value = "ahmed, ali, zeko, osman";
// console.log(value.split(", "));
// console.log(value.split(", ", 2));

// let value = "this is a substring test!";
// console.log(value.substring(0, 5));
// console.log(value.substring(5, 0));
// console.log(value.substring(-10, 5));

// let value = "this is a include test!";
// console.log(value.includes("is"));
// console.log(value.includes("is", 10));

// let value = "this is a starts with test!";
// console.log(value.startsWith("this"));
// console.log(value.endsWith("test"));

// ================================================ //

// console.log(10 == "10"); // Compare value only
// console.log(-10 == "-10"); // Compare value only
// console.log(-10 == "-11"); // Compare value only

// console.log(-10 === "-10"); // Compare value and type
// console.log(10 === "10"); // Compare value and type

// console.log(10 > 5);
// console.log(5 >= 5);
// console.log(5 < 10);
// console.log(typeof "Ahmed", typeof "Mohamed");

// ================================================ //

// console.log(10 > 5 && 20 > 10);
// console.log("10" === 10 || typeof "Ahmed" == typeof "Mohamed");
// console.log(!true);

// ================================================ //

// let price = 5000;
// let discount = true;

// // skip logic, just test
// if (discount) {
//   price *= 0.9;
// } else {
//   price *= 1.1;
// }

// discount ? console.log("applied") : console.log("not applied");

// let value = "Ali";
// console.log(
//   `hello, mr ${value}, ${discount ? "applied" : "not applied"}, thanks`
// );

// ================================================ //

// let price = 1000;
// let price2 = null;
// console.log(`the price is ${price ?? 100}`);
// console.log(`the price is ${price2 ?? 100}`);

// let price = 1000;
// let price2 = null;
// let price3 = 0;
// let price4 = undefined;
// console.log(`the price is ${price || 100}`);
// console.log(`the price is ${price2 || 100}`);
// console.log(`the price is ${price3 || 100}`);
// console.log(`the price is ${price4 || 100}`);

// ================================================ //

// let day = 2;

// switch (day) {
//   case 0:
//     console.log("Saturday");
//     break;

//   case 1:
//     console.log("Sunday");
//     break;

//   case 2:
//     console.log("Monday");
//     break;

//   // skip logic here, demo!
//   case 3:
//   case 4:
//     console.log("Tuesday");
//     break;

//   default:
//     console.log("Undown Day");
//     break;
// }

// ================================================ //

// let names = ["Ahmed", "Mohamed", "Elzero", "Abbas", ["Gaber", 2, "Taher"]];
// console.log(names[0]);
// console.log(names[1]);
// names[1] = "Zeko";
// console.log(names[1][2]);
// console.log(names[1][2].toLocaleUpperCase());
// console.log(names[4]);
// console.log(names[4][2]);
// names[4] = "Maher";
// console.log(names[4]);
// console.log(Array.isArray(names));
// console.log(typeof names);
// console.log(names.length);
// names[names.length] = "Amjad";
// console.log(names);
// names[names.length - 1] = "Salah";
// console.log(names);
// let len = names.unshift("Ibrahim", "Malek");
// console.log(names);
// console.log(len);

// let len = names.push("Retage", "Asmaa");
// console.log(names);
// console.log(len);

// console.log(names.shift());
// console.log(names);

// console.log(names.pop());
// console.log(names);

// console.log(names.indexOf("Elzero"));
// console.log(names.includes("test"));

// let values = [150, 540, -90, -80, "Ahmed", "Ali", "Mohamed", 75];
// const numsOnly = values.filter((x) => typeof x === "number");
// console.log(values.sort());
// console.log(values.reverse());
// console.log(numsOnly.sort((a, b) => a - b));

// ================================================ //

// let names = ["Ahmed", "Mohamed", "Elzero", "Abbas", "Gamal"];
// console.log(names.slice());
// console.log(names.slice(1));
// console.log(names.slice(1, 3));
// console.log(names.slice(-2));
// console.log(names.slice(1, -2));
// console.log(names.slice(-4, -2));
// names.splice(0, 0, "Ali", "Mahmoud");
// console.log(names);
// names.splice(0, 2, "Elsayed");
// console.log(names);
// names.splice(2, 2, "Elsayed");
// console.log(names);

// let names = ["Ahmed", "Mohamed", "Elzero", "Abbas"];
// let newNames = ["Gamal", "Ibrahim", "Alaa"];
// let allNames = names.concat(newNames);
// console.log(allNames);

// let allNames2 = names.concat(newNames, "Elsayed", [5, 10]);
// console.log(allNames2);

// console.log(allNames.join());
// console.log(allNames.join(", "));
// console.log(allNames.join("|").toUpperCase());

// ================================================ //

// let values = ["Ahmed", "Mohamed", 3, 7, "Elzero", "Abbas", 0, "Gamal", 6];
// let numsOnly = [];

// for (let index = 0; index < values.length; index++) {
//   if (typeof values[index] === "number") {
//     numsOnly.push(values[index]);
//   }
// }
// console.log(numsOnly);

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];

// // skip logic, demo!
// for (const element of products) {
//   if (element === "Pen") break;
//   else if (element == "Mouse") continue;
//   else console.log(element);
// }

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   innerLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(colors[j]);
//     if (colors[i] == "Green") break mainLoop;
//   }
// }

// let index = 0;
// while (index < 10) {
//   console.log(index);
//   index++;
// }

// // Skip logic, demo!
// let index2 = 0;
// while (index2 < 10) {
//   console.log(index2);

//   if (index2 == 6) {
//     index2++;
//     continue;
//   }

//   if (index2 === 8) break;
//   index2++;
// }

// let index = 0;
// do {
//   console.log(index);
//   index++;
// } while (index < 10);

// ================================================ //

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(5, 4));

// function sumArray(...nums) {
//   let sum = 0;
//   for (const element of nums) {
//     sum += element;
//   }
//   return sum;
// }

// console.log(sumArray(5, 5, 9, 7, 1, 4));

// function showInfo(name, age, rate = 0, show = "y", ...skills) {
//   document.writeln(`<div>`);
//   document.writeln(`<h2>name is ${name}</h2>`);
//   document.writeln(`<h3>age is ${age}</h3>`);
//   document.writeln(`<h4>rate is ${rate}</h4>`);

//   if (show === "y") {
//     document.writeln(`<h4>show skills</h4>`);
//     document.writeln(`<h4>${skills.join(" | ")}</h4>`);
//   } else {
//     document.writeln(`<h4>DON'T show skills</h4>`);
//   }

//   document.writeln(`</div>`);
// }

// showInfo("Ahmed", 25, 1, "y", "cpp", "c#", "html", "css");

// let calc = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calc(1, 3));

// document.getElementById("show").onclick = function () {
//   console.log("show");
// };

// function sayHello(fName, lName) {
//   let msg = "hello";

//   function concatMsg() {
//     msg = `${msg} ${fName} ${lName}`;
//   }

//   concatMsg();
//   return msg;
// }

// console.log(sayHello("Ahmed", "Ali"));

// function sayHello(fName, lName) {
//   function concatMsg() {
//     return `Hello ${fName} ${lName}`;
//   }

//   return concatMsg();
// }

// console.log(sayHello("Ahmed", "Ali"));

// function sayHello(fName, lName) {
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `Hello ${getFullName()}`;
//   }

//   return concatMsg();
// }

// console.log(sayHello("Ahmed", "Ali"));

// function test(num) {
//     return num;
// }

// let result = (num) => num;

// function sum(n1, n2) {
//   return n1 + n2;
// }

// let result = (n1, n2) => n1 + n2;

// function addToSelf(arr) {
//   let newArr = [];
//   for (const element of arr) {
//     newArr.push(element + element);
//   }
//   return newArr;
// }

// console.log(addToSelf([1, 2, 3]));

// let nums = [1, 2, 3, 4];

// function add(element) {
//   return element + element;
// }

// let result = nums.map(add);
// console.log(result);

// let result2 = nums.map((number) => number + number);
// console.log(result2);

// let swappingCases = "eLzErO";
// let sw = swappingCases
//   .split("")
//   .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
//   .join("");

// console.log(sw);

// let invertedNumber = [-1, -5, 2, 5, 8, -7, 5, -8, 5];
// let result = invertedNumber.map((x) => -x);
// console.log(result);

// let ignoreNumber = "elze123ro874test";
// let result = ignoreNumber
//   .split("")
//   .map((x) => (x >= "0" && x <= "9" ? "" : x))
//   .join("");

// console.log(result);

// let ignoreNumber = "elze123ro874test";
// let result = ignoreNumber
//   .split("")
//   .map((x) => (Number.isNaN(Number.parseInt(x)) ? x : ""))
//   .join("");

// console.log(result);

// let ignoreNumber = "elze123ro874test";
// let result = ignoreNumber
//   .split("")
//   .filter((x) => !(x >= "0" && x <= "9"))
//   .join("");

// console.log(result);

// let friends = ["Ahmed", "Ali", "Mohamed", "Mahmoud"];

// let result = friends.filter((x) => x.toUpperCase().startsWith("A"));
// console.log(result);

// let nums = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];
// let result = nums.filter((x) => x % 2 == 0);
// console.log(result);

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let result = theBiggest.reduce((acc, curr) =>
//   acc.length > curr.length ? acc : curr
// );
// console.log(result);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let result = removeChars
//   .filter((x) => x !== "@")
//   .reduce((acc, curr) => `${acc}${curr}`);

// console.log(result);

// let allLs = document.querySelectorAll("ul li");

// allLs.forEach(function (ele) {
//   ele.onclick = function () {
//     allLs.forEach(function (ele2) {
//       ele2.classList.remove("active");
//     });
//     this.classList.add("active");
//   };
// });

// ================================================ //

// let myVar = "country of";
// let user = {
//   name: "Ali",
//   age: 25,
//   "country of": "Egypt",
//   "rate of success": 50,
//   sayHello: function () {
//     return "hello";
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user["country of"]);
// console.log(user[myVar]);
// console.log(user["rate of success"]);
// console.log(user.sayHello());

// let person = {
//   name: "Mohamed",
//   age: 30,
//   skills: ["html", "css", "js"],
//   available: false,
//   addresses: {
//     ksa: "Jeddah",
//     egypt: {
//       one: "Cairo",
//       two: "Luxor",
//     },
//   },
//   checkAvailability: function () {
//     return this.available ? "Open to work" : "Not open";
//   },
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.available);
// console.log(person.skills.join(","));
// console.log(person.checkAvailability());
// console.log(person.addresses);
// console.log(person.addresses.ksa);
// console.log(person.addresses["egypt"]["one"]);

// let user = new Object();

// user.name = "Ali";
// user.age = 20;

// console.log(user);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   name: "Ali",
//   age: 20,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// let copyObj = Object.create(user);

// console.log(copyObj.age);
// console.log(copyObj.name);
// console.log(copyObj.ageInDays());

// copyObj.age = 50;
// copyObj.name = "Ahmed";

// console.log(copyObj.age);
// console.log(copyObj.name);
// console.log(copyObj.ageInDays());

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 1,
//   prop3: 3,
// };

// let newObj = Object.assign(targetObject, obj1, obj2);
// let newObj2 = Object.assign(targetObject, obj1, obj2, {
//   prop4: 200,
//   prop5: "test",
// });
// console.log(newObj);
// console.log(newObj2);
