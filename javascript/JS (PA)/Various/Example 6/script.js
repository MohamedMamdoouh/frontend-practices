// ========== GLOBAL VARIABLE FOR SCOPE INSPECTION ==========
let globalCounter = 0;
const globalConfig = {
  maxRetries: 3,
  timeout: 5000,
  apiVersion: "v2",
};

// ========== Example 1: Scope Chain - Local, Function, and Global Scope ==========
function exploreScopeChain() {
  console.log("=== Exploring Scope Chain ===");

  let localVariable = "I am local to exploreScopeChain";
  let count = 0;
  let config = { mode: "debug" };

  // Add breakpoint here to inspect Scope panel
  globalCounter++;
  count++;
  config.timestamp = Date.now();

  function innerFunction() {
    let innerLocal = "I am local to innerFunction";
    let innerCount = count + 10;

    // Add breakpoint here to see closure variables
    console.log(innerLocal);
    console.log(globalCounter, localVariable, innerCount);

    return innerLocal + " from level 1";
  }

  function deeperFunction() {
    let deeperLocal = "I am local to deeperFunction";
    let result = innerFunction();

    // Inspect Scope: local, parent scopes, and global
    console.log(deeperLocal, result);

    return deeperLocal;
  }

  return deeperFunction();
}

// ========== Example 2: Watch Expression Demo ==========
function watchVariablesDemo() {
  console.log("=== Watch Variables Demo ===");

  let price = 100;
  let quantity = 5;
  let discount = 0.1;

  // Add these to Watch panel: price, quantity, price * quantity, (price * quantity) * (1 - discount)
  price = 120; // Watch the price change
  quantity = 8; // Watch quantity change
  discount = 0.15; // Watch discount change

  let subtotal = price * quantity;
  let discountAmount = subtotal * discount;
  let total = subtotal - discountAmount;

  // SET BREAKPOINT HERE to watch expressions update
  console.log(
    "Subtotal:",
    subtotal,
    "Discount:",
    discountAmount,
    "Total:",
    total,
  );

  return { price, quantity, discount, subtotal, discountAmount, total };
}

// ========== Example 3: Call Stack Demo ==========
function functionLevel1() {
  console.log("At Level 1");
  globalCounter++;
  return functionLevel2();
}

function functionLevel2() {
  console.log("At Level 2");
  globalCounter++;
  return functionLevel3();
}

function functionLevel3() {
  console.log("At Level 3");
  globalCounter++;
  return functionLevel4();
}

function functionLevel4() {
  console.log("At Level 4");
  let stackVariable = "I'm in the deepest level";

  // SET BREAKPOINT HERE to see full call stack
  console.log(stackVariable);

  return "Completed call stack demo";
}

function callStackDemo() {
  console.log("=== Call Stack Demo ===");
  let result = functionLevel1();
  return result;
}

// ========== Example 4: Closure Scope - Captured Variables ==========
function createCounterWithClosure() {
  console.log("=== Closure Scope Demo ===");

  let count = 0; // Captured by closures
  let history = []; // Captured by closures

  return {
    increment: function () {
      count++;
      history.push(count);
      // SET BREAKPOINT HERE to see 'count' and 'history' in closure
      console.log("Count:", count);
      return count;
    },
    decrement: function () {
      count--;
      history.push(count);
      // SET BREAKPOINT HERE to see updated 'count' and 'history'
      console.log("Count:", count);
      return count;
    },
    getHistory: function () {
      return history;
    },
  };
}

// ========== Event Listeners ==========
document.getElementById("btn-scope").addEventListener("click", () => {
  exploreScopeChain();
  displayOutput(
    "In Sources tab, find the breakpoint and inspect the Scope panel to see local, closure, and global variables.",
  );
});

document.getElementById("btn-watch").addEventListener("click", () => {
  watchVariablesDemo();
  displayOutput(
    "In Sources tab, add to Watch: 'price', 'quantity', 'price * quantity', 'total'. Click button again to see values update.",
  );
});

document.getElementById("btn-callstack").addEventListener("click", () => {
  callStackDemo();
  displayOutput(
    "In Sources tab, inspect the Call Stack panel to see the chain: callStackDemo → functionLevel1 → functionLevel2 → functionLevel3 → functionLevel4",
  );
});

document.getElementById("btn-closure").addEventListener("click", () => {
  const counter = createCounterWithClosure();
  counter.increment();
  counter.increment();
  counter.decrement();
  displayOutput(
    "In Sources tab, inspect Scope to see 'count' and 'history' variables captured in closure scope.",
  );
});

// ========== Helper Function ==========
function displayOutput(message) {
  document.getElementById("output").innerHTML = `<p>${message}</p>`;
}
