// Basic console.log
console.log("Hello, World! This is a basic log message.");

// console.table for tabular data
const users = [
  { name: "John Doe", age: 30, role: "Developer" },
  { name: "Jane Smith", age: 25, role: "Designer" },
  { name: "Bob Johnson", age: 35, role: "Manager" },
];
console.table(users);

// console.group for grouping logs
console.group("User Information");
console.log("Processing user data...");
console.log("Users count:", users.length);
console.groupCollapsed("User Details");
users.forEach((user, index) => {
  console.log(`User ${index + 1}:`, user.name);
});
console.groupEnd();
console.groupEnd();

// console.time for timing operations
console.time("Data Processing Time");
setTimeout(() => {
  console.timeEnd("Data Processing Time");
  console.log("Data processing completed.");
}, 1000);

// console.warn for warnings
console.warn("This is a warning message. Something might be wrong.");

// console.error for errors
console.error("This is an error message. An error occurred.");

// console.assert for assertions
console.assert(1 === 2, "Assertion failed: 1 is not equal to 2");
console.assert(2 + 2 === 4, "Assertion passed: 2 + 2 equals 4");

// console.count for counting occurrences
console.count("Button Click");
console.count("Button Click");
console.count("Page Load");

// console.trace for stack trace
function someFunction() {
  anotherFunction();
}
function anotherFunction() {
  console.trace("Stack trace from anotherFunction");
}
someFunction();

// console.dir for object inspection
const obj = { a: 1, b: { c: 2 } };
console.dir(obj);

// console.clear();
