const UI = {
  btnLoad: document.getElementById("btnLoad"),
  error: document.getElementById("error"),
  grid: document.getElementById("stats-grid"),
  pill: document.getElementById("pill"),
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

  UI.toast.timeoutId = setTimeout(() => {
    UI.toast.style.display = "none";
  }, duration);
}

class StatCard {
  constructor(title, value, note) {
    this.title = title;
    this.value = value;
    this.note = note;
  }

  render() {
    const cardElement = document.createElement("div");
    cardElement.className = "state";

    const titleElement = document.createElement("div");
    titleElement.className = "muted";
    titleElement.textContent = this.title;

    const valueElement = document.createElement("div");
    valueElement.className = "value";
    valueElement.textContent = this.value;

    const noteElement = document.createElement("div");
    noteElement.className = "muted";
    noteElement.textContent = this.note;

    cardElement.appendChild(titleElement);
    cardElement.appendChild(valueElement);
    cardElement.appendChild(noteElement);

    return cardElement.outerHTML;
  }

  static create(title, value, note) {
    const card = new StatCard(title, value, note);
    return card.render();
  }
}

function loadUI() {
  UI.btnLoad.disabled = true;
  UI.error.style.display = "none";
  UI.grid.innerHTML = "";
  UI.pill.textContent = "idle";
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

    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);

    // Clear the timeout since the request completed
    clearTimeout(timeoutId);

    if (!usersRes.ok || !postsRes.ok) return null;

    const [users, posts] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
    ]);

    if (!Array.isArray(users) || !Array.isArray(posts)) {
      renderError("Invalid users data format received from server");
      return null;
    }

    return { users, posts };
  } catch (err) {
    if (err.name === "AbortError") {
      renderError("Request timed out. Please try again.");
    } else {
      renderError(err.message);
    }
    return null;
  } finally {
    UI.btnLoad.disabled = false;
  }
}

function renderSuccess(users, posts) {
  if (!users || !Array.isArray(users) || !posts || !Array.isArray(posts)) {
    console.error("Invalid users or posts data passed to renderSuccess");
    return;
  }

  UI.pill.textContent = `✅ Ready`;
  showToast("✅ Loaded successfully");
}

async function loadUsers() {
  loadUI();
  const { users, posts } = await fetchData();
  if (!users || !posts) return;

  const postsPerUser = Math.round(posts.length / users.length);

  UI.grid.innerHTML = [
    StatCard.create("Users", users.length.toLocaleString(), "Fetched from API"),
    StatCard.create("Posts", posts.length.toLocaleString(), "Fetched from API"),
    StatCard.create(
      "Avg posts/user",
      postsPerUser.toLocaleString(),
      "Calculated from data"
    ),
  ].join("");

  renderSuccess(users, posts);
}

UI.btnLoad.addEventListener("click", loadUsers);
