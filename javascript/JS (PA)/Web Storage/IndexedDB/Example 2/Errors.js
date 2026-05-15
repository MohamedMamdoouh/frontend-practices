class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

function validateUser(user) {
  if (!user.id || !user.name) {
    throw new ValidationError("User must have an id and a name.");
  }
}

async function addUserToDB(db, user) {
  try {
    validateUser(user);
    await db.put("users", user);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation Error:", error.message);
    } else {
      throw new DatabaseError("Failed to add user to the database.");
    }
  }
}

function calculateDiscount(price) {
  if (typeof price !== "number") {
    throw new TypeError("Price must be a number");
  }

  if (price < 0) {
    throw new RangeError("Price cannot be negative");
  }

  return price * 0.9;
}

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

function getUserName(user) {
  if (!user?.name) {
    throw new Error("User name is required");
  }
  return user.name;
}

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a * b;
}

////////////////////////////////////

const promise = Promise.reject(new Error("Something went wrong"));

const promise2 = new Promise(() => {
  throw new Error("Boom!");
});

fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

doStep1()
  .then(doStep2)
  .then(doStep3)
  .catch((err) => {
    console.error("Caught error:", err);
  });

async function loadData() {
  try {
    const data = await fetch("/api/data");
    console.log(data);
  } catch (error) {
    console.error("Failed to load data:", error);
  }
}

//////////////////////////////////

function withdraw(balance, amount) {
  if (amount <= 0) return "Invalid amount";
  if (amount > balance) return "Insufficient funds";

  return balance - amount;
}

// validation
function register(username) {
  if (!username) return "Invalid username";
  return "Registered";
}

// business logic - error
function transfer(balance, amount) {
  if (amount < 0) {
    throw new Error("Negative amount not allowed");
  }
  if (amount > balance) return "Insufficient funds";
  return balance - amount;
}

// Return → Expected situations, user mistakes
// Throw → System failure, invalid state, unsafe continuation

window.onerror = function (message, source, lineno, colno, error) {
  console.error("Global error caught:", message);
};

window.addEventListener("unhandledrejection", function (event) {
  console.error("Unhandled promise rejection:", event.reason);
});

function logError(error) {
  // Send error details to a logging service
  console.error("Logging error:", error);
}

// 🔁 How Errors Flow Globally
// 1️⃣ Error occurs
// 2️⃣ No local try/catch
// 3️⃣ Browser triggers:
// 🔹 window.onerror OR
// 🔹 unhandledrejection
// 4️⃣ Central logger records it
// 5️⃣ App reacts safely

// ❌ Global handlers do NOT replace local error handling
// ✔ They are a last resort

fetch("/api/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("API responded with status " + res.status);
    }
    return res.json();
  })
  .catch((err) => {
    console.error("API failure:", err.message);
  });

fetch("/data").catch((err) => {
  console.error("Network error:", err.message);
});

function submitAge(age) {
  if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
  }
}

// ✅ Best Practices
// ✔ Validate early (before processing)
// ✔ Never trust user input
// ✔ Give clear, human-friendly messages

// 👉 You don't control them (errors) — you prepare for them.

// 🧬 What Is a Trust Boundary?
// A trust boundary is where your code interacts with something you don’t control.

// 🧬 What Does “Designing for Failure” Mean?
// Assume that:
// 🔹 APIs will fail
// 🔹 Networks will drop
// 🔹 Data will be corrupted
// 🔹 Users will make mistakes

function getUserName(user) {
  return user?.profile?.name ?? "Guest";
}

// ✔ Prefer safe defaults
// ✔ Provide fallbacks
// ✔ Avoid crashes
// ✔ Keep the system running

// 💡 The best code is not the one that never fails —
// but the one that fails safely, clearly, and predictably.

// Validate what users control.
// Throw errors for what users should never cause.
