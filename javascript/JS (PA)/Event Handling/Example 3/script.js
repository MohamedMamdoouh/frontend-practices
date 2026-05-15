const btn = document.getElementById("btn");
const removeBtn = document.getElementById("removeBtn");

function showMessage() {
  alert("Button clicked!");
}

function removeClick() {
  btn.removeEventListener("click", showMessage);
  alert("Click event removed!");
}

btn.addEventListener("click", showMessage);
removeBtn.addEventListener("click", removeClick);
