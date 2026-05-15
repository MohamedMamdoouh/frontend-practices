// ========== Example 1: Dynamic Element Creation ==========
document.getElementById("btn-create-elements").addEventListener("click", () => {
  const container = document.getElementById("dynamic-container");
  container.innerHTML = "";

  // Create various types of elements with different structures
  for (let i = 1; i <= 3; i++) {
    const div = document.createElement("div");
    div.className = "dynamic-item";
    div.id = `item-${i}`;
    div.innerHTML = `
      <h4>Dynamic Element #${i}</h4>
      <p>This element was created via JavaScript</p>
      <span>New</span>
    `;
    container.appendChild(div);
  }
});

// ========== Example 2: Class & Attribute Manipulation ==========
let classToggleCount = 0;
document.getElementById("btn-toggle-class").addEventListener("click", () => {
  const styleBox = document.getElementById("style-box");
  const textElement = styleBox.querySelector(".text-default");

  classToggleCount++;

  // Toggle between different classes
  if (classToggleCount % 3 === 1) {
    styleBox.classList.remove("box-default", "box-error");
    styleBox.classList.add("box-active");
    textElement.classList.remove("text-default", "text-error");
    textElement.classList.add("text-active");
  } else if (classToggleCount % 3 === 2) {
    styleBox.classList.remove("box-default", "box-active");
    styleBox.classList.add("box-error");
    textElement.classList.remove("text-default", "text-active");
    textElement.classList.add("text-error");
  } else {
    styleBox.classList.remove("box-active", "box-error");
    styleBox.classList.add("box-default");
    textElement.classList.remove("text-active", "text-error");
    textElement.classList.add("text-default");
  }
});

document
  .getElementById("btn-change-attributes")
  .addEventListener("click", () => {
    const styleBox = document.getElementById("style-box");

    // Cycle through different data attributes
    const statuses = ["inactive", "active", "pending"];
    const currentStatus = styleBox.dataset.status;
    const nextIndex = (statuses.indexOf(currentStatus) + 1) % statuses.length;
    const nextStatus = statuses[nextIndex];

    styleBox.dataset.status = nextStatus;
    styleBox.dataset.timestamp = new Date().toISOString();
    styleBox.dataset.clicks = (
      Number.parseInt(styleBox.dataset.clicks || "0") + 1
    ).toString();
  });

// ========== Example 3: Event Delegation & DOM Events ==========
document.getElementById("btn-add-items").addEventListener("click", () => {
  const eventList = document.getElementById("event-list");
  const itemCount = eventList.children.length;

  for (let i = 1; i <= 2; i++) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.textContent = `Item ${itemCount + i}`;
    eventList.appendChild(li);
  }
});

// Event delegation on list items
document.getElementById("event-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    e.target.classList.toggle("selected");
  }
});

// ========== Example 4: Form Elements & State ==========
document.getElementById("btn-update-form").addEventListener("click", () => {
  const nameInput = document.getElementById("name-input");
  const colorSelect = document.getElementById("color-select");
  const textarea = document.getElementById("message-textarea");
  const outputBox = document.getElementById("form-output");

  // Change form values
  const names = ["John", "Jane", "Bob"];
  const colors = ["red", "blue", "green"];

  nameInput.value = names[Math.floor(Math.random() * names.length)];
  colorSelect.value = colors[Math.floor(Math.random() * colors.length)];
  textarea.value = `Updated at ${new Date().toLocaleTimeString()}`;

  // Display current values
  outputBox.innerHTML = `
    <strong>Current Form Values:</strong><br>
    Name: ${nameInput.value}<br>
    Color: ${colorSelect.value}<br>
    Message: ${textarea.value}
  `;
});

// ========== Example 5: CSS Transitions & Animations ==========
document.getElementById("btn-animate").addEventListener("click", () => {
  const animatedBox = document.getElementById("animated-box");

  // Remove class if it exists, then re-add to trigger animation
  animatedBox.classList.remove("animate");
  setTimeout(() => {
    animatedBox.classList.add("animate");
  }, 10);
});

// Hover animation
document.getElementById("animated-box").addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
});

// ========== Example 6: Complex Nested Structure ==========
document.getElementById("btn-inspect-nested").addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.classList.toggle("highlight");
    card.querySelector(".card-header").classList.toggle("highlight");

    // Add custom data attributes
    card.dataset.inspected = "true";
    card.dataset.index = index;
  });
});

// ========== Additional Style Modifications ==========
// Add dynamic CSS properties
document.addEventListener("DOMContentLoaded", () => {
  const styleBox = document.getElementById("style-box");
  styleBox.dataset.status = "inactive";
  styleBox.dataset.clicks = "0";

  console.log("✓ DOM loaded! Elements are ready for inspection");
  console.log("✓ Try:");
  console.log("  1. Right-click any element and select 'Inspect'");
  console.log("  2. Modify CSS in the Elements panel");
  console.log("  3. Edit HTML attributes directly");
  console.log("  4. Watch the Styles panel as you toggle classes");
});
