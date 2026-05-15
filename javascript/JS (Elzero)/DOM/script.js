// let idElement = document.getElementById("my-div");
// let tagElements = document.getElementsByTagName("p");
// let classElement = document.getElementsByClassName("my-span");
// let queryElement = document.querySelector(".my-span");
// let queryAllElements = document.querySelectorAll(".my-span");

// console.log(idElement);
// console.log(tagElements);
// console.log(classElement);
// console.log(queryElement);
// console.log(queryAllElements);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[0].href);

///////////////////////////////////////////////

// let element = document.getElementById("my-div");
// console.log(element.innerHTML);
// console.log(element.textContent);

// element.innerHTML = `<div id="my-div">Hello Div from here</div>`;
// element.textContent = `<div id="my-div">Hello Div from here</div>`;

// document.images[0].src = "https://google.com";
// document.images[0].alt = "test";
// document.images[0].title = "pic";
// document.images[0].id = "id";
// document.images[0].className = "class";

// let link = document.querySelector(".link");

// console.log(link.getAttribute("class"));
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://twitter.com");
// link.setAttribute("title", "Twitter");

///////////////////////////////////////////////

// console.log(document.getElementsByTagName("p")[0].attributes);

// let p = document.getElementsByTagName("p")[0];
// if (p.hasAttribute("data-src")) {
//   if (p.getAttribute("data-src") === "") {
//     p.removeAttribute("data-src");
//   } else {
//     p.setAttribute("data-src", "value");
//   }
// } else {
//   console.log("not found");
// }

// if (p.hasAttributes()) {
//   console.log("has attributes");
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

///////////////////////////////////////////////

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("this is div!");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "test");

// myElement.appendChild(myComment);
// myElement.appendChild(myText);

// document.body.appendChild(myElement);

///////////////////////////////////////////////

// let mainElement = document.createElement("div");
// let heading = document.createElement("h2");
// let paragraph = document.createElement("p");

// let headingText = document.createTextNode("Product Title");
// let paraText = document.createTextNode("product description");

// heading.appendChild(headingText);
// mainElement.appendChild(heading);
// paragraph.appendChild(paraText);
// mainElement.appendChild(paragraph);

// mainElement.className = "product";

// document.body.appendChild(mainElement);

///////////////////////////////////////////////

// let element = document.getElementById("dom");
// console.log(element);
// console.log(element.children);
// console.log(element.children[0]);
// console.log(element.childNodes);
// console.log(element.childNodes[0]);
// console.log(element.firstChild);
// console.log(element.lastChild);
// console.log(element.firstElementChild);
// console.log(element.lastElementChild);

///////////////////////////////////////////////

// let Button1 = document.getElementById("id");

// function fun1() {
//   console.log("clicked");
// }

// function fun2() {
//   console.log("mouse left");
// }

// Button1.addEventListener("onclick", fun1);
// Button1.addEventListener("onmouseleave ", fun2);

///////////////////////////////////////////////

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (!userValid || !ageValid) {
//     e.preventDefault();
//   }
// };

///////////////////////////////////////////////

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };

// one.onblur = function () {
//   document.links[0].click();
// };

///////////////////////////////////////////////

// let element = document.getElementById("my-div2");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("one"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//   element.classList.toggle("show");
// };

// element.onmouseleave = function () {
//   element.classList.add("test2", "test3");
// };

// element.onblur = function () {
//   element.classList.remove("test2");
// };

///////////////////////////////////////////////

// let element = document.getElementById("my-div2");

// element.style.color = "red";
// element.style.fontSize = "50px";

// element.style.cssText = "font-weight: bold; color: green; opacity 0.7";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
// document.styleSheets[0].cssRules[0].style.setProperty(
//   "background-color",
//   "green"
// );

///////////////////////////////////////////////

// let element = document.getElementById("my-div2");
// let createdP = document.createElement("p");

// element.before("Hello");
// element.after(createdP);

// element.append("Hello");
// element.appendChild(createdP);

// element.remove();

///////////////////////////////////////////////

// let span = document.querySelector(".two");

// console.log(span.nextSibling);
// console.log(span.nextElementSibling);
// span.nextElementSibling.remove();

// console.log(span.previousSibling);
// console.log(span.previousElementSibling);

// span.onclick = function () {
//   span.parentElement.remove();
// };

///////////////////////////////////////////////

// let para = document.querySelector("p")[0].cloneNode(true);
// let div = document.querySelector("my-div2");

// para.id = `${para.id}-cloned`;

// div.appendChild(para);

///////////////////////////////////////////////

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });
