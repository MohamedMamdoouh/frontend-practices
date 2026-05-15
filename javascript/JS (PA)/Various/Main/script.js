// Uses CSS selectors, return only first matching element
document.querySelector("#title"); // by id
document.querySelector(".text"); // by class
document.querySelector("p"); // by tag

// Uses CSS selectors, return all matching elements as NodeList
const items = document.querySelectorAll(".text");
items.forEach((el) => {
  el.style.color = "orange";
});

// Returns HTMLCollection of elements by class name
const items2 = document.getElementsByClassName("text");
for (const element of items2) {
  element.style.fontWeight = "bold";
}

// Returns HTMLCollection of elements by tag name
const items3 = document.getElementsByTagName("p");
for (const element of items3) {
  element.style.fontWeight = "bold";
}

//////////////////////////////////////

const title = document.getElementById("title");
title.textContent = "Welcome!";

document.getElementById("box").innerHTML = "<strong>Hello World</strong>";

const img = document.getElementById("photo");
img.setAttribute("src", "new.png");
const path = img.getAttribute("src");

const p = document.getElementById("text");
p.style.color = "orange";
p.style.fontSize = "20px";

const msg = document.getElementById("msg");
msg.classList.add("active");

element.classList.remove("className");
element.classList.toggle("className");

//////////////////////////////////////

const div = document.getElementById("container");
const p2 = document.createElement("p");

p2.textContent = "I am new here";
div.appendChild(p2);

const p3 = document.createElement("p");
p3.textContent = "This is a new paragraph.";
container.append("Hello ", p3, " world!"); // prefer append over appendChild

list.prepend(item); // add at beginning
list.insertBefore(newItem, list.children[1]); // insert at index 1

const item = document.getElementById("item");
item.remove();

////////////////////////////////////////////

// move up the DOM tree
const btn2 = document.querySelector(".delete");
const card = btn2.parentElement;

// move down the DOM tree
const card2 = document.querySelector(".card");
console.log(card.children);

// move across the DOM tree
const list2 = document.getElementById("list");
console.log(list2.previousElementSibling);
console.log(list2.nextElementSibling);

const btn4 = document.querySelector(".delete");
const card3 = btn4.closest(".card");

btn.matches("button");
btn.matches(".delete");

list.addEventListener("click", (e) => {
  if (e.target.matches(".delete")) {
    const card = e.target.closest(".card");
    card.remove();
  }
});

// 🧠 What happens:
// 🔹 User clicks somewhere
// 🔹 We check the clicked element
// 🔹 We find its parent component
// 🔹 We act on the correct DOM node

// matches() — “Is this the element I want?”

document.addEventListener("click", (e) => {
  if (e.target.matches("button.delete")) {
    console.log("Delete button clicked");
  }
});

// 📌 If the click target is exactly the button → works
// 📌 If click is inside the button → ❌ fails

// closest() — “Find the nearest parent that matches”

// 👉 Starts from the clicked element
// 👉 Walks upward in the DOM
// 👉 Stops at the first matching ancestor

element.closest(".card");

// ✔ Includes the element itself
// ✔ Stops early (efficient)
// ✔ Returns null if not found

/*
<div class="list">
  <div class="card">
    <button class="delete">
      <span>🗑️</span> Delete
    </button>
  </div>
</div>;
*/

document.querySelector(".list").addEventListener("click", (e) => {
  if (!e.target.closest(".delete")) return;

  const card = e.target.closest(".card");
  card.remove();
});

// 🧠 What happens:
// 🔹 Click anywhere inside delete button
// 🔹 closest(".delete") finds the button
// 🔹 closest(".card") finds the container
// 🔹 Correct element is removed

// 🧬 Why closest() Is Better Than parentElement

// ❌ Bad:
// e.target.parentElement.parentElement.remove();
// Problems:
// Breaks if HTML structure changes
// Hard to understand

// ✅ Good:
// e.target.closest(".card").remove();

// 📌 Meaning is clear
// 📌 Structure-independent

// 🔹 matches()
// 👉 Checks only the element itself

// 🔹 closest()
// 👉 Searches upward through parents

/////////////////////////////////////////

const btn7 = document.getElementById("btn");

btn7.addEventListener("click", (event) => {
  console.log("Type:", event.type);
  console.log("Target:", event.target);
});

//////////////////////////////////

// 🧬 input — Value Changed (Live)
// 📌 Use input when you need real-time feedback.

//🧬 change — Value Committed
// 📌 Use change when you need the final value.

// 🧬 submit — Form Intent
// 📌 Use submit to handle form submissions
// Never rely on button click for forms.

//🧬 keydown — Key Pressed (Before Value Change)
// 📌 Use keydown to intercept keys before they affect input.
// 📌 Use for control logic, not value reading.

//🧬 focus — Element Activated
// 📌 Use focus to prepare UI for user input.

// 🧬 blur — Element Deactivated
// 📌 Use blur to validate or save data when user leaves input.
// 📌 focus + blur always come as a pair.

// 🔹 Live typing → input
// 🔹 Dropdown / checkbox → change
// 🔹 Form submission → submit
// 🔹 Keyboard shortcuts → keydown
// 🔹 Read value after key → keyup
// 🔹 Show active state → focus
// 🔹 Validate on exit → blur

//////////////////////////////////////////

// 🧬 Debounce — “Wait Until the User Stops”
// Example use cases
// 🔹 Search-as-you-type
// 🔹 Auto-saving forms
// 🔹 Input validation

// 🧬 Throttle — “Run at Most Once Every X ms”
// Example use cases
// 🔹 Scroll position updates
// 🔹 Infinite scroll loading
// 🔹 Mouse movement tracking

// 🧬 Debounce vs Throttle
// 🔹 Debounce
// 👉 Waits until events stop
// 👉 Executes once at the end
// 👉 Best for text input & final actions

// 🔹 Throttle
// 👉 Runs at a fixed interval
// 👉 Executes continuously but limited
// 👉 Best for scrolling & live updates

// 🧠 Ask yourself:
// “Do I want the final result or continuous updates?”
// debounce → final result, throttle → continuous updates

///////////////////////////

const input = document.getElementById("text");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

// Add items dynamically
button.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.textContent = value;
  li.classList.add("item");

  list.append(li);
  input.value = "";
});

// Event Delegation (ONE listener)
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    event.target.remove();
  }
});

///////////////////////////

/* <div class="card" data-id="7">
  <button data-action="edit">Edit</button>
  <button data-action="delete">Delete</button>
  <button data-test-btn="test">Test</button>
</div> */

document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const action = e.target.dataset.action;
  const card = e.target.closest(".card");
  const id = card.dataset.id;

  if (action === "edit") {
    console.log("Edit item", id);
  }

  if (action === "delete") {
    console.log("Delete item", id);
  }

  const testBtn = e.target.dataset.testBtn;
  if (!testBtn) {
    console.log("Test button clicked for item");
  }

  e.target.dataset.testBtn === "test33";
});

// dataset Values Are Always Strings

////////////////////////////////////////////

// 🔹 ||= → assign if falsy
// 🔹 &&= → assign if truthy
// 🔹 ??= → assign if null or undefined

// Falsy values include:
// false, 0, "", null, undefined, NaN
// Nullish values:
// null, undefined (only)

let username = "";
username ||= "Guest";

console.log(username); // "Guest"

let isLoggedIn = true;
isLoggedIn &&= "Welcome";

console.log(isLoggedIn); // "Welcome"

let theme = null;
theme ??= "dark";

console.log(theme); // "dark"

let volume = 0;
let actual = volume ?? 5;

console.log(actual); // 0

///////////////////////////

const user = {
  name: "Lina",
  age: 25,
  role: "admin",
};

console.log(Object.keys(user)); // ["name", "age", "role"]
console.log(Object.values(user)); // ["Lina", 25, "admin"]
console.log(Object.entries(user)); // [["name", "Lina"], ["age", 25], ["role", "admin"]]

const obj = Object.fromEntries([
  ["name", "Lina"],
  ["age", 25],
  ["role", "admin"],
]); // { name: "Lina", age: 25, role: "admin" }

// Object utilities return new arrays / objects — they do not modify the original object.

Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "email"); // false

//////////////////////////////////////////

const user99 = {
  name: "Ali",
  settings: {
    theme: "dark",
  },
};

const copy = { ...user99 };

copy.settings.theme = "light";

console.log(user99.settings.theme); // "light" ❌
// Spread (...) does NOT deep copy nested objects.

const deep = structuredClone(user99);
deep.settings.theme = "light";

console.log(user99.settings.theme); // "dark" ✅
// structuredClone() creates a deep copy of the object.

//////////////////////////////////////////

// Objects → for…in
// Iterables (arrays, strings) → for…of
// Side effects (function on each element) → forEach
//  Use forEach when you don’t need control flow (no break, no continue, no await/async/promise, no error handling).

// Transform data → map
// Filter data → filter
// Reduce to single value → reduce

//////////////////////////////////////////

// 🔹 URLSearchParams
const params = new URLSearchParams({
  search: "web dev",
  page: 2,
  limit: 10,
});
console.log(params.toString()); // "search=web+dev&page=2&limit=10"

const url = new URL("https://api.example.com/items");
url.searchParams.set("search", "web dev");
url.searchParams.set("page", 2);
url.searchParams.set("limit", 10);
console.log(url.toString()); // "https://api.example.com/items?search=web+dev&page=2&limit=10"

// read parameters
const search = url.searchParams.get("search"); // "web dev"
const page = url.searchParams.get("page"); // "2"
const limit = url.searchParams.get("limit"); // "10"

const params2 = new URLSearchParams(window.location.search);
const category = params.get("category");
const sort = params2.get("sort");

params.set("page", 2);
params.delete("sort");
params.has("category");

//////////////////////////////////////////

//🧬 Content-Type (What Am I Sending?)
fetch("/api/students", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Omar",
    age: 21,
  }),
});

// 🧬 Accept (What Do I Want Back?)
fetch("/api/students", {
  headers: {
    Accept: "application/json",
  },
});

// 🧬 Authorization (Who Am I?)
fetch("/api/protected", {
  headers: {
    Authorization: "Bearer YOUR_TOKEN_HERE",
  },
});
// Never hard-code real tokens in frontend code.
// Use secure storage and retrieval methods.

fetch("/api/tasks", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer token_here",
  },
  body: JSON.stringify({
    title: "Learn Headers",
  }),
});
// 🧬 Headers Are Case-Insensitive (But Be Consistent)

//////////////////////////////////////////

const url2 = new URL("/students", "https://api.school.com");

url2.searchParams.set("page", 2);
url2.searchParams.set("limit", 10);

fetch(url2);

//////////////////////////////////////////

//Cursor-Based Pagination

// How it works
// 1️⃣ Client requests first page
// 2️⃣ Server responds with data + nextCursor
// 3️⃣ Client uses nextCursor for the next request

let nextCursor = null;

async function loadStudents() {
  const response = await fetch(`/students?cursor=${nextCursor}&limit=10`);
  const { data, nextCursor: newCursor } = await response.json();
  nextCursor = newCursor;
  // render data
}

// ⚠️ Important!
// Pagination is a contract between client and server.

// 🧠 If data changes frequently → use cursor-based pagination
// 🧠 If data is mostly stable → page/limit is fine

//////////////////////////////////////////

// Request
//   ↓
// Success → Done
//   ↓
// Failure
//   ↓
// Is retryable (network error, server error, timeout, etc..)?
//   ↓
// Yes → Wait → Retry (limited times "2-5 times", every wait is longer than previous)
//   ↓
// No → Show error

// Good retry behavior:
// 🔹 Shows loading state
// 🔹 Prevents duplicate clicks
// 🔹 Explains failure clearly

// 🧠 Ask two questions before retrying:

// 1️⃣ Is the request safe to repeat?
// 2️⃣ Will retrying cause side effects?

// If both answers are:
// ✔ Yes → Retry
// ❌ No → Do not retry

///////////////////////

//   <form id="form">
//     <input id="name" placeholder="Name"><br><br>
//     <input id="email" placeholder="Email"><br><br>
//     <button type="submit">Submit</button>
//   </form>

//   <p id="message"></p>

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  message.textContent = "";
  message.className = "";

  if (!name) {
    message.textContent = "Name is required";
    message.className = "error";
    return;
  }

  if (!email?.includes("@")) {
    message.textContent = "Valid email is required";
    message.className = "error";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.className = "success";

  form.reset();
});

//////////////////////////////////////
