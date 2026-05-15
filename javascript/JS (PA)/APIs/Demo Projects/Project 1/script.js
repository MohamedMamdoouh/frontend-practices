const UI = {
  btnLoad: document.getElementById("btnLoad"),
  btnRetry: document.getElementById("btnRetry"),
  status: document.getElementById("status"),
  error: document.getElementById("error"),
  grid: document.getElementById("grid"),
  meta: document.getElementById("meta"),
  toast: document.getElementById("toast"),
};

if (Object.values(UI).includes((element) => element === null)) {
  console.error(
    "One or more UI elements could not be found. Please check your HTML."
  );
}

function showToast(message, duration = 2200) {
  if (!UI.toast) {
    console.error("Toast element not found");
    return;
  }

  UI.toast.textContent = message;
  UI.toast.style.display = "block";

  // Clear any existing timeout to prevent conflicts
  if (UI.toast.timeoutId) {
    clearTimeout(UI.toast.timeoutId);
  }

  // Store the timeout ID for potential clearing later
  UI.toast.timeoutId = setTimeout(() => {
    UI.toast.style.display = "none";
    UI.toast.timeoutId = null;
  }, duration);
}

function renderUsers(users) {
  UI.grid.innerHTML = users
    .map(
      (u) => `
        <div class="user">
          <div style="font-weight:700;">${u.name}</div>
          <div class="muted">@${u.username}</div>
          <div style="margin-top:8px;" class="muted">${u.email}</div>
        </div>
      `
    )
    .join("");
}

function loadUI() {
  UI.btnLoad.disabled = true;
  UI.btnRetry.disabled = true;
  UI.error.style.display = "none";
  UI.grid.innerHTML = "";
  UI.status.style.display = "flex";
  UI.meta.textContent = "";
}

function renderError(message) {
  if (!message) {
    message = "An unknown error occurred";
  }

  UI.error.textContent = `❌ Failed to load users: ${message}`;
  UI.error.style.display = "block";
  UI.btnRetry.disabled = false;

  showToast(`❌ Error: ${message}`, 5000);
}

async function fetchData() {
  try {
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Clear the timeout since the request completed
    clearTimeout(timeoutId);

    if (!res.ok) {
      renderError(`Server responded with ${res.status}: ${res.statusText}`);
      return null;
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      renderError("Invalid data format received from server");
      return null;
    }

    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      renderError("Request timed out. Please try again.");
    } else {
      renderError(err.message);
    }
    return null;
  } finally {
    UI.status.style.display = "none";
    UI.btnLoad.disabled = false;
  }
}

function renderSuccess(users) {
  if (!users || !Array.isArray(users)) {
    console.error("Invalid users data passed to renderSuccess");
    return;
  }

  UI.meta.textContent = `Loaded ${users.length.toLocaleString()} users`;
  showToast("✅ Loaded successfully");
}

async function loadUsers() {
  loadUI();
  const users = await fetchData();
  if (!users) return;
  renderUsers(users);
  renderSuccess(users);
}

UI.btnLoad.addEventListener("click", loadUsers);
UI.btnRetry.addEventListener("click", loadUsers);
