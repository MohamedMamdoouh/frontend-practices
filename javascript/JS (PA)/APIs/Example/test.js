try {
  const response = await fetch("/api/data"); // here, a network error may occur => it's different from HTTP errors
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  if (response.status === 204) {
    console.log("No Content");
    return;
  }
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
  throw error; // optional: rethrow
}

// Why Manual Handling Is Required
// 🔹 HTTP errors are valid responses
// 🔹 Server responded successfully (technically), but the response body may not be what you expect.
// 🔹 JavaScript must interpret the result

// 👉 Fetch gives you control, not assumptions.
// 👉 Always check response.ok and response.status.

// The difference between network and HTTP errors (IMPORTANT)
// 🔹 Network errors: fetch() promise rejects
// 🔹 HTTP errors: fetch() promise resolves, but response.ok is false

await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Ali",
    email: "ali@example.com",
  }),
});

await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Ali",
    email: "a@gmail.com",
  }),
});

await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Ali",
  }),
  credentials: "include",
  cache: "no-cache",
});

async function loadData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

const controller = new AbortController();

setTimeout(() => {
  controller.abort();
}, 5000);

fetch(url, { signal: controller.signal });

// 👉 Silent failures are worse than crashes.

// Fetch Best Practices
// 1. Always check response.ok
// 2. Handle different status codes explicitly
// 3. Use try-catch for network errors
// 4. Consider timeouts with AbortController
// 5. Log errors for debugging

//  Separation of Concerns => Fetch should only fetch data, not parse it or handle UI.
// API Service Layers => Create a dedicated layer for API interactions.

// Reusable Fetch Wrappers => Encapsulate fetch logic in reusable functions or classes.
// Example:
async function apiFetch(url, options = {}) {
  // options: method, headers, body, credentials, cache, signal, etc.
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

// use the wrapper
try {
  const data = await apiFetch("/api/data", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    signal: controller.signal,
  });
  console.log(data);
} catch (error) {
  console.error("Failed to load data:", error);
}
