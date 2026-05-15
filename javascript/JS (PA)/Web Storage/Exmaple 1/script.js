// Local Storage
function saveLS() {
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("name", name);
  alert(`saved in local storage: ${name}`);
}

function loadLS() {
  let name = localStorage.getItem("name");
  document.getElementById("output").textContent = `Local Storage: ${
    name ?? "no value found"
  }`;
}

function clearLS() {
  localStorage.clear();
  document.getElementById("output").textContent = "";
  alert("localStorage cleared");
}

// Session Storage
function saveSS() {
  let name = document.getElementById("nameInput").value;
  sessionStorage.setItem("name", name);
  alert(`saved in session storage: ${name}`);
}

function loadSS() {
  let name = sessionStorage.getItem("name");
  document.getElementById("output").textContent = `Session Storage: ${
    name ?? "no value found"
  }`;
}

function clearSS() {
  sessionStorage.clear();
  document.getElementById("output").textContent = "";
  alert("sessionStorage cleared");
}
