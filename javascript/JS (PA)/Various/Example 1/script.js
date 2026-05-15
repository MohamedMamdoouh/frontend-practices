const form = document.getElementById("taskForm");

const objectOutput = document.getElementById("objectOutput");
const formDataOutput = document.getElementById("formDataOutput");
const objectEntriesOutput = document.getElementById("objectEntriesOutput");

form.addEventListener("submit", (event) => {
  // Prevent page reload
  event.preventDefault();

  // 1️⃣ Create FormData from the form
  const formData = new FormData(form);

  // 2️⃣ Convert FormData to a plain JavaScript object
  const data = Object.fromEntries(formData.entries());

  // 3️⃣ Log to console
  console.log("FormData object:", data);

  // 4️⃣ Show full object (formatted)
  objectOutput.textContent = JSON.stringify(data, null, 2);

  // 5️⃣ Show FormData entry by entry
  formDataOutput.innerHTML = "";
  for (const [key, value] of formData.entries()) {
    const li = document.createElement("li");
    li.textContent = `${key} → ${value}`;
    formDataOutput.appendChild(li);
  }

  // 6️⃣ Show Object entry by entry
  objectEntriesOutput.innerHTML = "";
  for (const key in data) {
    const li = document.createElement("li");
    li.textContent = `${key} → ${data[key]}`;
    objectEntriesOutput.appendChild(li);
  }
});
