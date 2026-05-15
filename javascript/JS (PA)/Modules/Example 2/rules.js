// Good Example (One Responsibility)
// // math.js
// export function add(a, b) {
//   return a + b;
// }
// ✔ This module handles math logic only.

// Bad Example (God Module ❌)
// // app.js
// export function add() {}
// export function login() {}
// export function fetchUsers() {}
// export function renderUI() {}
// ❌ This file:

// Does too many things
// Is hard to understand
// Is hard to maintain
// 📌 This is called a God Module (everything inside one file).

///////////////////////////////////////////

// Export Only What Users Need
// export function calculate() {}

// ✔ This is part of the public API.

// Helper functions should stay private:

// function validateInput() {
//   // helper logic
// }

// 📌 If it’s not exported, it’s hidden—and that’s good.

//////////////////////////

// Recommended Structure
// /modules
//   math.js
//   user.js
//   api.js
// 📌 Why this works:

// Easy to navigate
// Logical separation
// Scales well

// Beginner Tip
// 🔹 Group files by responsibility, not size
// 🔹 Avoid deep nesting at the beginning
// 🔹 Keep names clear and meaningful

// 📌 A well-structured project is easier to manage and understand.

// 🔗 Interconnection
// 🔹 One responsibility → Easier understanding
// 🔹 Small public API → Safer usage
// 🔹 No circular dependencies → Stable runtime
// 🔹 Clean folder structure → Scalable project
