// IndexedDB setup
const DB_NAME = "BlogAppDB";
const DB_VERSION = 1;
let db;

// Initialize IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create users store
      if (!db.objectStoreNames.contains("users")) {
        const usersStore = db.createObjectStore("users", {
          keyPath: "username",
        });
        usersStore.createIndex("email", "email", { unique: true });
      }

      // Create posts store
      if (!db.objectStoreNames.contains("posts")) {
        const postsStore = db.createObjectStore("posts", {
          keyPath: "id",
          autoIncrement: true,
        });
        postsStore.createIndex("username", "username", { unique: false });
      }
    };
  });
}

// Auth Functions
async function registerUser(username, email, password) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");

    const user = {
      username,
      email,
      password, // In production, this should be hashed
      createdAt: new Date().toISOString(),
    };

    const request = store.add(user);

    request.onsuccess = () => resolve(user);
    request.onerror = () => reject(request.error);
  });
}

async function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["users"], "readonly");
    const store = transaction.objectStore("users");
    const request = store.get(username);

    request.onsuccess = () => {
      const user = request.result;
      if (user && user.password === password) {
        resolve(user);
      } else {
        reject(new Error("Invalid credentials"));
      }
    };
    request.onerror = () => reject(request.error);
  });
}

// Blog Functions
async function createPost(username, title, content) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["posts"], "readwrite");
    const store = transaction.objectStore("posts");

    const post = {
      username,
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const request = store.add(post);

    request.onsuccess = () => resolve(post);
    request.onerror = () => reject(request.error);
  });
}

async function getAllPosts() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["posts"], "readonly");
    const store = transaction.objectStore("posts");
    const request = store.getAll();

    request.onsuccess = () => {
      const posts = request.result;
      // Sort by creation date (newest first)
      posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      resolve(posts);
    };
    request.onerror = () => reject(request.error);
  });
}

async function updatePost(postId, title, content) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["posts"], "readwrite");
    const store = transaction.objectStore("posts");
    const getRequest = store.get(postId);

    getRequest.onsuccess = () => {
      const post = getRequest.result;
      post.title = title;
      post.content = content;
      post.updatedAt = new Date().toISOString();

      const updateRequest = store.put(post);
      updateRequest.onsuccess = () => resolve(post);
      updateRequest.onerror = () => reject(updateRequest.error);
    };
    getRequest.onerror = () => reject(getRequest.error);
  });
}

async function deletePost(postId) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["posts"], "readwrite");
    const store = transaction.objectStore("posts");
    const request = store.delete(postId);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// UI Functions
function showToast(message, type = "error") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.background = type === "success" ? "#4caf50" : "#f44336";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function showAuthForm(formId) {
  document.querySelectorAll(".form-container").forEach((form) => {
    form.classList.remove("active");
  });
  document.getElementById(formId).classList.add("active");
}

function showBlogPage() {
  document.getElementById("auth-container").classList.add("hidden");
  document.getElementById("blog-container").classList.remove("hidden");
}

function showAuthPage() {
  document.getElementById("blog-container").classList.add("hidden");
  document.getElementById("auth-container").classList.remove("hidden");
}

function renderPosts(posts) {
  const postsList = document.getElementById("posts-list");
  postsList.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <div class="post-header">
                <h3 class="post-title">${escapeHtml(post.title)}</h3>
                <div class="post-meta">
                    <span>By ${escapeHtml(post.username)}</span>
                    <span>${new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
            <div class="post-content">${escapeHtml(post.content)}</div>
            <div class="post-actions">
                <button class="edit-btn" data-id="${post.id}">Edit</button>
                <button class="delete-btn" data-id="${post.id}">Delete</button>
            </div>
        `;
    postsList.appendChild(postElement);
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", async () => {
  try {
    initDB();

    // Check if user is already logged in (from localStorage)
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const user = JSON.parse(currentUser);
      document.getElementById("user-display").textContent =
        `Welcome, ${user.username}`;
      showBlogPage();
      const posts = await getAllPosts();
      renderPosts(posts);
    }

    // Form switching
    document.getElementById("show-signup").addEventListener("click", (e) => {
      e.preventDefault();
      showAuthForm("signup-form");
    });

    document.getElementById("show-signin").addEventListener("click", (e) => {
      e.preventDefault();
      showAuthForm("signin-form");
    });

    // Sign up
    document
      .getElementById("register-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document
          .getElementById("register-username")
          .value.trim();
        const email = document.getElementById("register-email").value.trim();
        const password = document.getElementById("register-password").value;
        const confirmPassword = document.getElementById(
          "register-confirm-password",
        ).value;

        // Basic validation
        if (password.length < 6) {
          showToast("Password must be at least 6 characters");
          return;
        }

        if (password !== confirmPassword) {
          showToast("Passwords do not match");
          return;
        }

        try {
          await registerUser(username, email, password);
          showToast("Registration successful! Please sign in.", "success");
          showAuthForm("signin-form");
          document.getElementById("register-form").reset();
        } catch (error) {
          if (error.name === "ConstraintError") {
            showToast("Username or email already exists");
          } else {
            showToast("Registration failed");
          }
        }
      });

    // Sign in
    document
      .getElementById("login-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value;

        try {
          const user = await loginUser(username, password);
          localStorage.setItem("currentUser", JSON.stringify(user));
          document.getElementById("user-display").textContent =
            `Welcome, ${user.username}`;
          showBlogPage();
          const posts = await getAllPosts();
          renderPosts(posts);
          document.getElementById("login-form").reset();
          showToast("Login successful!", "success");
        } catch (error) {
          showToast(`Invalid username or password ${error.message}`);
        }
      });

    // Logout
    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      showAuthPage();
      showToast("Logged out successfully", "success");
    });

    // Create post
    document
      .getElementById("post-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const title = document.getElementById("post-title").value.trim();
        const content = document.getElementById("post-content").value.trim();

        try {
          await createPost(currentUser.username, title, content);
          const posts = await getAllPosts();
          renderPosts(posts);
          document.getElementById("post-form").reset();
          showToast("Post created successfully!", "success");
        } catch (error) {
          showToast(`Failed to create post ${error.message}`);
        }
      });

    // Edit and delete post handlers
    document
      .getElementById("posts-list")
      .addEventListener("click", async (e) => {
        if (e.target.classList.contains("edit-btn")) {
          const postId = Number.parseInt(e.target.dataset.id);
          const postElement = e.target.closest(".post");
          const titleElement = postElement.querySelector(".post-title");
          const contentElement = postElement.querySelector(".post-content");

          const newTitle = prompt("Enter new title:", titleElement.textContent);
          if (newTitle === null) return;

          const newContent = prompt(
            "Enter new content:",
            contentElement.textContent,
          );
          if (newContent === null) return;

          try {
            await updatePost(postId, newTitle.trim(), newContent.trim());
            const posts = await getAllPosts();
            renderPosts(posts);
            showToast("Post updated successfully!", "success");
          } catch (error) {
            showToast(`Failed to update post ${error.message}`);
          }
        }

        if (e.target.classList.contains("delete-btn")) {
          const postId = Number.parseInt(e.target.dataset.id);
          if (confirm("Are you sure you want to delete this post?")) {
            try {
              await deletePost(postId);
              const posts = await getAllPosts();
              renderPosts(posts);
              showToast("Post deleted successfully!", "success");
            } catch (error) {
              showToast(`Failed to delete post ${error.message}`);
            }
          }
        }
      });
  } catch (error) {
    console.error("Failed to initialize database:", error);
    showToast("Failed to initialize application");
  }
});
