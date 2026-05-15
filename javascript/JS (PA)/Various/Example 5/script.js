// ========== Simple Function - Good for basic stepping ==========
function simpleFunction() {
  console.log("Starting simpleFunction");

  let name = "John";
  let age = 30;
  let city = "New York";

  console.log("Name:", name);
  console.log("Age:", age);
  console.log("City:", city);

  let message = `${name} is ${age} years old and lives in ${city}`;
  console.log("Message:", message);

  return message;
}

// ========== Loop with Conditional - Great for conditional breakpoints ==========
function loopWithConditional() {
  console.log("Starting loopWithConditional");

  const numbers = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    sum += currentNumber;
    count++;

    // Try setting a conditional breakpoint here: i === 5 or currentNumber > 25
    console.log(`Iteration ${i}: ${currentNumber}`);
  }

  console.log("Total sum:", sum);
  console.log("Count:", count);
  return sum;
}

// ========== Nested Functions - Good for stepping into/out of ==========
function calculateUserInfo() {
  console.log("Starting calculateUserInfo");

  let userData = getUser();
  let processedData = processData(userData);
  let result = formatResult(processedData);

  return result;
}

function getUser() {
  console.log("Inside getUser");

  let user = {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    salary: 75000,
  };

  return user;
}

function processData(user) {
  console.log("Inside processData");

  let processed = {
    fullName: user.firstName + " " + user.lastName,
    annualSalary: user.salary,
    monthlySalary: user.salary / 12,
    bonus: user.salary * 0.1,
  };

  return processed;
}

function formatResult(data) {
  console.log("Inside formatResult");

  let formatted = `
        Name: ${data.fullName}
        Annual Salary: $${data.annualSalary}
        Monthly Salary: $${data.monthlySalary.toFixed(2)}
        Bonus: $${data.bonus.toFixed(2)}
    `;

  return formatted;
}

// ========== Array Operations - Multiple code paths ==========
function arrayOperations() {
  console.log("Starting arrayOperations");

  const data = [
    { id: 1, value: 10, active: true },
    { id: 2, value: 20, active: false },
    { id: 3, value: 15, active: true },
    { id: 4, value: 30, active: true },
    { id: 5, value: 25, active: false },
  ];

  // Filter active items
  let activeItems = data.filter((item) => {
    // Try conditional breakpoint: item.value > 15
    return item.active === true;
  });

  // Map to new structure
  let mapped = activeItems.map((item) => {
    let newValue = item.value * 2;
    return {
      ...item,
      doubledValue: newValue,
    };
  });

  // Reduce to sum
  let total = mapped.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  console.log("Active Items:", activeItems);
  console.log("Mapped Items:", mapped);
  console.log("Total Value:", total);

  return { activeItems, mapped, total };
}

// ========== Object Manipulation - Complex operations ==========
function objectManipulation() {
  console.log("Starting objectManipulation");

  let user = {
    name: "Bob",
    age: 28,
    email: "bob@example.com",
    address: {
      street: "123 Main St",
      city: "Boston",
      zip: "02101",
    },
    hobbies: ["reading", "gaming", "coding"],
  };

  // Modify nested object
  user.address.city = "Cambridge";
  user.address.state = "MA";

  // Add new property
  user.isActive = true;

  // Modify array
  user.hobbies.push("hiking");
  user.hobbies.sort((a, b) => a.localeCompare(b));

  // Create new object from existing
  let userSummary = {
    name: user.name,
    location: `${user.address.city}, ${user.address.state}`,
    hobbiesCount: user.hobbies.length,
    isActive: user.isActive,
  };

  console.log("Original User:", user);
  console.log("User Summary:", userSummary);

  return userSummary;
}

// ========== Event Listeners ==========
document.getElementById("btn-simple").addEventListener("click", () => {
  console.log("=== Button: Simple Function ===");
  simpleFunction();
  displayOutput("Check console for simple function output");
});

document.getElementById("btn-loop").addEventListener("click", () => {
  console.log("=== Button: Loop with Conditional ===");
  loopWithConditional();
  displayOutput(
    "Check console for loop output. Try setting conditional breakpoint where i === 5",
  );
});

document.getElementById("btn-nested").addEventListener("click", () => {
  console.log("=== Button: Nested Functions ===");
  calculateUserInfo();
  displayOutput(
    "Check console for nested function output. Use F11 to step into functions",
  );
});

document.getElementById("btn-array").addEventListener("click", () => {
  console.log("=== Button: Array Operations ===");
  arrayOperations();
  displayOutput(
    "Check console for array operations. Try conditional breakpoint: item.value > 15",
  );
});

document.getElementById("btn-object").addEventListener("click", () => {
  console.log("=== Button: Object Manipulation ===");
  objectManipulation();
  displayOutput("Check console for object manipulation output");
});

// ========== Helper Function ==========
function displayOutput(message) {
  document.getElementById("output").innerHTML = `<p>${message}</p>`;
}
