// ========== Execution Performance ==========

// Simple task with timing
document.getElementById("btn-simple-task").addEventListener("click", () => {
  performance.mark("simple-start");

  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }

  performance.mark("simple-end");
  performance.measure("simple-task", "simple-start", "simple-end");

  const measure = performance.getEntriesByName("simple-task")[0];
  document.getElementById("execution-output").innerHTML =
    `<strong>✓ Simple Task Completed</strong><br>
    <p>Time: ${measure.duration.toFixed(2)}ms</p>
    <p>Sum: ${sum}</p>`;
});

// Heavy task with timing
document.getElementById("btn-heavy-task").addEventListener("click", () => {
  performance.mark("heavy-start");

  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }

  performance.mark("heavy-end");
  performance.measure("heavy-task", "heavy-start", "heavy-end");

  const measure = performance.getEntriesByName("heavy-task")[0];
  document.getElementById("execution-output").innerHTML =
    `<strong>✓ Heavy Task Completed</strong><br>
    <p>Time: ${measure.duration.toFixed(2)}ms</p>
    <p>Result: ${result.toFixed(2)}</p>`;
});

// Show all measurements
document.getElementById("btn-measure").addEventListener("click", () => {
  const measures = performance.getEntriesByType("measure");
  if (measures.length === 0) {
    document.getElementById("execution-output").innerHTML =
      `<strong>No measurements recorded</strong><br><p>Run tasks first to see measurements</p>`;
    return;
  }

  let output = `<strong>Performance Measurements:</strong><br>`;
  measures.forEach((measure) => {
    output += `<p>${measure.name}: ${measure.duration.toFixed(2)}ms</p>`;
  });
  document.getElementById("execution-output").innerHTML = output;
});

// ========== DOM Manipulation Performance ==========

// Inefficient DOM updates (causes reflows)
document.getElementById("btn-add-elements").addEventListener("click", () => {
  performance.mark("dom-inefficient-start");

  const container = document.getElementById("element-container");
  container.innerHTML = ""; // Clear first

  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.className = "element";
    div.textContent = `Element ${i + 1}`;
    container.appendChild(div); // Triggers reflow each time
  }

  performance.mark("dom-inefficient-end");
  performance.measure(
    "dom-inefficient",
    "dom-inefficient-start",
    "dom-inefficient-end",
  );

  const measure = performance.getEntriesByName("dom-inefficient")[0];
  document.getElementById("dom-output").innerHTML +=
    `<p><strong>Inefficient Update:</strong> ${measure.duration.toFixed(2)}ms (100 reflows)</p>`;
});

// Efficient DOM updates (batch update)
document.getElementById("btn-batch-elements").addEventListener("click", () => {
  performance.mark("dom-efficient-start");

  const container = document.getElementById("element-container");
  container.innerHTML = ""; // Clear first

  // Use DocumentFragment to batch updates
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.className = "element";
    div.textContent = `Element ${i + 1}`;
    fragment.appendChild(div); // No reflow
  }
  container.appendChild(fragment); // Single reflow

  performance.mark("dom-efficient-end");
  performance.measure(
    "dom-efficient",
    "dom-efficient-start",
    "dom-efficient-end",
  );

  const measure = performance.getEntriesByName("dom-efficient")[0];
  document.getElementById("dom-output").innerHTML +=
    `<p><strong>Efficient Update (Batch):</strong> ${measure.duration.toFixed(2)}ms (1 reflow)</p>`;
});

// Clear DOM elements
document.getElementById("btn-clear-dom").addEventListener("click", () => {
  document.getElementById("element-container").innerHTML = "";
  document.getElementById("dom-output").innerHTML =
    `<strong>✓ DOM Cleared</strong><br>
    <p>Try both methods to compare performance in DevTools Performance tab</p>
    <div id="element-container"></div>`;
});

// ========== Memory Management ==========

let allocatedObjects = [];

document.getElementById("btn-allocate-memory").addEventListener("click", () => {
  allocatedObjects = [];
  performance.mark("memory-alloc-start");

  for (let i = 0; i < 10000; i++) {
    allocatedObjects.push({
      id: i,
      data: new Array(1000).fill(Math.random()),
      timestamp: Date.now(),
    });
  }

  performance.mark("memory-alloc-end");
  performance.measure(
    "memory-allocation",
    "memory-alloc-start",
    "memory-alloc-end",
  );

  const measure = performance.getEntriesByName("memory-allocation")[0];
  document.getElementById("memory-output").innerHTML =
    `<strong>✓ Memory Allocated</strong><br>
    <p>Time: ${measure.duration.toFixed(2)}ms</p>
    <p>Objects: ${allocatedObjects.length}</p>
    <p>💾 Watch Memory tab to see heap size increase</p>`;
});

// Simulate memory leak
let leakedReferences = [];

document.getElementById("btn-memory-leak").addEventListener("click", () => {
  for (let i = 0; i < 5000; i++) {
    leakedReferences.push({
      largeData: new Array(5000).fill(Math.random()),
      timestamp: Date.now(),
    });
  }

  document.getElementById("memory-output").innerHTML =
    `<strong>⚠️ Memory Leak Simulated</strong><br>
    <p>Leaked references: ${leakedReferences.length}</p>
    <p>📊 Check Memory profiler - heap won't be released</p>
    <p>Click "Cleanup" to free memory</p>`;
});

// Cleanup memory
document.getElementById("btn-cleanup-memory").addEventListener("click", () => {
  allocatedObjects = [];
  leakedReferences = [];

  document.getElementById("memory-output").innerHTML =
    `<strong>✓ Memory Cleaned Up</strong><br>
    <p>All references removed</p>
    <p>💡 Heap size will decrease after garbage collection</p>`;
});

// ========== Paint & Layout Performance ==========

document.getElementById("btn-trigger-layout").addEventListener("click", () => {
  const box = document.getElementById("animated-box");
  performance.mark("layout-start");

  for (let i = 0; i < 100; i++) {
    box.style.width = Math.random() * 100 + 50 + "px";
    box.style.height = Math.random() * 100 + 50 + "px";
  }

  performance.mark("layout-end");
  performance.measure("layout-thrashing", "layout-start", "layout-end");

  const measure = performance.getEntriesByName("layout-thrashing")[0];
  document.getElementById("paint-output").innerHTML =
    `<strong>⚠️ Layout Thrashing Triggered</strong><br>
    <p>Time: ${measure.duration.toFixed(2)}ms</p>
    <p>This forces 100 layout recalculations!</p>`;
});

document.getElementById("btn-trigger-paint").addEventListener("click", () => {
  const box = document.getElementById("animated-box");
  performance.mark("paint-start");

  for (let i = 0; i < 50; i++) {
    box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    box.style.borderRadius = Math.random() * 50 + "%";
  }

  performance.mark("paint-end");
  performance.measure("paint-trigger", "paint-start", "paint-end");

  const measure = performance.getEntriesByName("paint-trigger")[0];
  document.getElementById("paint-output").innerHTML =
    `<strong>✓ Paint Triggered</strong><br>
    <p>Time: ${measure.duration.toFixed(2)}ms</p>
    <p>Check Performance tab for paint records</p>`;
});

document.getElementById("btn-animation").addEventListener("click", () => {
  const box = document.getElementById("animated-box");
  box.style.animation = "none";
  setTimeout(() => {
    box.style.animation = "slideAnimation 2s ease-in-out";
  }, 10);

  document.getElementById("paint-output").innerHTML =
    `<strong>✓ CSS Animation Started</strong><br>
    <p>Check Performance tab to see frame rendering</p>`;
});

// ========== Network Simulation ==========

function simulateRequest(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

document
  .getElementById("btn-fetch-slow")
  .addEventListener("click", async () => {
    const btn = document.getElementById("btn-fetch-slow");
    btn.disabled = true;
    btn.textContent = "Loading...";

    performance.mark("fetch-slow-start");

    await simulateRequest(3000);

    performance.mark("fetch-slow-end");
    performance.measure("fetch-slow", "fetch-slow-start", "fetch-slow-end");

    const measure = performance.getEntriesByName("fetch-slow")[0];
    document.getElementById("network-output").innerHTML =
      `<strong>✓ Slow Request Completed</strong><br>
    <p>Duration: ${measure.duration.toFixed(0)}ms (3000ms)</p>`;

    btn.disabled = false;
    btn.textContent = "Slow Request (3s)";
  });

document
  .getElementById("btn-fetch-fast")
  .addEventListener("click", async () => {
    const btn = document.getElementById("btn-fetch-fast");
    btn.disabled = true;
    btn.textContent = "Loading...";

    performance.mark("fetch-fast-start");

    await simulateRequest(500);

    performance.mark("fetch-fast-end");
    performance.measure("fetch-fast", "fetch-fast-start", "fetch-fast-end");

    const measure = performance.getEntriesByName("fetch-fast")[0];
    document.getElementById("network-output").innerHTML =
      `<strong>✓ Fast Request Completed</strong><br>
    <p>Duration: ${measure.duration.toFixed(0)}ms (500ms)</p>`;

    btn.disabled = false;
    btn.textContent = "Fast Request (0.5s)";
  });
