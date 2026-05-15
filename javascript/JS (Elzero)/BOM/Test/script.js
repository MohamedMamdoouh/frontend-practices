// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);

//////////////////////////////////////////////////////

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`I'am a Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(counter);
// };

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let counter = setTimeout(sayMsg, 3000, "Osama", 38);

//////////////////////////////////////////////////////

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// let div = document.getElementById("div1");

// function countDown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countDown, 1000);

//////////////////////////////////////////////////////

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

//////////////////////////////////////////////////////

// window.close();

// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width=400,height=400,left=200,top=10"
//   );
// }, 2000);

//////////////////////////////////////////////////////

// console.log(history);
// history.back();
// history.forward();
// history.go(-2);
// history.go(2);

//////////////////////////////////////////////////////

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth",
// });

// window.print();
// window.stop();

//////////////////////////////////////////////////////

// // Set
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.fontWeight);
// console.log(window.localStorage["fontSize"]);

// // Remove one
// window.localStorage.removeItem("color");

// // Remove all
// window.localStorage.clear();

// // Get key
// console.log(window.localStorage.key(0));

// // Set color for page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

//////////////////////////////////////////////////////

// // Set
// window.sessionStorage.setItem("color", "red");

// // Get
// console.log(window.sessionStorage.getItem("color"));

// // Remove one
// window.sessionStorage.removeItem("color");

// // Remove all
// window.sessionStorage.clear();

//////////////////////////////////////////////////////

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Mostafa"];

// [a, b, c, d, e = "default value"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [, y, , m] = myFriends;
// console.log(y);
// console.log(m);

//////////////////////////////////////////////////////

// let myFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];

// console.log(myFriends[3][2][1]); // Gamal

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal

//////////////////////////////////////////////////////

// let book = "Video";
// let video = "Book";

// [book, video] = [video, book];

//////////////////////////////////////////////////////

// const user = {
//   theName: "Ahmed",
//   theAge: 25,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// const { theName, theAge, theCountry } = user; // Note, we removed the title

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);

//////////////////////////////////////////////////////

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: g,
//   theCountry,
//   theColor: c = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(g);
// console.log(theCountry);
// console.log(c);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const {html: skillOne, css:skillTwo} = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

//////////////////////////////////////////////////////

// const user = {
//   theName: "Ahmed",
//   theAge: 25,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: g, skills: { css } = user }) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${g}`);
//   console.log(`Your CSS Skill Progress Is ${css}`);
// }

//////////////////////////////////////////////////////

// const user = {
//   theName: "Ahmed",
//   theAge: 25,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: g,
//   skills: [, , three],
//   addresses: { ksa: k },
// } = user;

// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${g}`);
// console.log(`Your Last Skill Is: ${three}`);
// console.log(`Your Live In: ${k}`);
