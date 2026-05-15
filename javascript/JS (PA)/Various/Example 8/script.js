// ========== Activity Log Helper ==========
const activityLog = [];

function logActivity(method, url, status, type = "pending") {
  const timestamp = new Date().toLocaleTimeString();
  const entry = `[${timestamp}] ${method} ${url.substring(0, 50)} - ${status}`;
  activityLog.push({ entry, type });
  updateActivityLog();
}

function updateActivityLog() {
  const logElement = document.getElementById("activity-log");
  logElement.innerHTML = activityLog
    .map(
      (log) => `<div class="activity-log-entry ${log.type}">${log.entry}</div>`,
    )
    .join("");
  logElement.scrollTop = logElement.scrollHeight;
}

document.getElementById("btn-clear-log").addEventListener("click", () => {
  activityLog.length = 0;
  document.getElementById("activity-log").innerHTML =
    "<p><em>Log cleared...</em></p>";
});

// ========== 1. Fetch Requests ==========

// Fetch GET Request
document.getElementById("btn-fetch-get").addEventListener("click", async () => {
  logActivity(
    "GET",
    "https://jsonplaceholder.typicode.com/posts/1",
    "Pending...",
    "pending",
  );
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    logActivity(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/1",
      "200 OK",
      "success",
    );
    document.getElementById("fetch-output").innerHTML =
      `<strong>GET Success (200):</strong><br>${JSON.stringify(data, null, 2).substring(0, 200)}...`;
  } catch (error) {
    logActivity(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/1",
      "Error",
      "error",
    );
    document.getElementById("fetch-output").innerHTML =
      `<strong>Error:</strong> ${error.message}`;
  }
});

// Fetch POST Request
document
  .getElementById("btn-fetch-post")
  .addEventListener("click", async () => {
    logActivity(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      "Pending...",
      "pending",
    );
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Test Post",
            body: "This is a test",
            userId: 1,
          }),
        },
      );
      const data = await response.json();
      logActivity(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        "201 Created",
        "success",
      );
      document.getElementById("fetch-output").innerHTML =
        `<strong>POST Success (201):</strong><br>${JSON.stringify(data, null, 2)}`;
    } catch (error) {
      logActivity(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        "Error",
        "error",
      );
      document.getElementById("fetch-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Fetch JSON
document
  .getElementById("btn-fetch-json")
  .addEventListener("click", async () => {
    logActivity(
      "GET",
      "https://jsonplaceholder.typicode.com/users",
      "Pending...",
      "pending",
    );
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      logActivity(
        "GET",
        "https://jsonplaceholder.typicode.com/users",
        `200 OK (${data.length} items)`,
        "success",
      );
      document.getElementById("fetch-output").innerHTML =
        `<strong>JSON Response (200):</strong><br>Fetched ${data.length} users`;
    } catch (error) {
      logActivity(
        "GET",
        "https://jsonplaceholder.typicode.com/users",
        "Error",
        "error",
      );
      document.getElementById("fetch-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Slow Fetch (5 seconds)
document
  .getElementById("btn-fetch-slow")
  .addEventListener("click", async () => {
    logActivity("GET", "Slow Request (5s delay)", "Pending...", "pending");
    const startTime = Date.now();
    try {
      await fetch("https://httpstat.us/200?sleep=5000");
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
      logActivity(
        "GET",
        "Slow Request (5s delay)",
        `200 OK (${elapsed}s)`,
        "success",
      );
      document.getElementById("fetch-output").innerHTML =
        `<strong>Slow Request Complete:</strong><br>Took ${elapsed} seconds`;
    } catch (error) {
      logActivity("GET", "Slow Request (5s delay)", "Error", "error");
      document.getElementById("fetch-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Fetch 404 Error
document
  .getElementById("btn-fetch-error")
  .addEventListener("click", async () => {
    logActivity(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/999999",
      "Pending...",
      "pending",
    );
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/999999",
      );
      if (!response.ok) {
        logActivity(
          "GET",
          "https://jsonplaceholder.typicode.com/posts/999999",
          "404 Not Found",
          "error",
        );
        document.getElementById("fetch-output").innerHTML =
          `<strong>404 Not Found:</strong><br>Resource does not exist`;
      }
    } catch (error) {
      logActivity(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/999999",
        "Error",
        "error",
      );
      document.getElementById("fetch-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// ========== 3. Image Resources ==========

// Load Single Image
document.getElementById("btn-load-image").addEventListener("click", () => {
  logActivity(
    "GET (Image)",
    "https://via.placeholder.com/200",
    "Pending...",
    "pending",
  );
  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/200?text=Sample+Image";
  img.onload = () => {
    logActivity(
      "GET (Image)",
      "https://via.placeholder.com/200",
      "200 OK",
      "success",
    );
  };
  img.onerror = () => {
    logActivity(
      "GET (Image)",
      "https://via.placeholder.com/200",
      "Error",
      "error",
    );
  };
  document.getElementById("image-container").innerHTML = "";
  document.getElementById("image-container").appendChild(img);
});

// Load Multiple Images
document
  .getElementById("btn-load-images-multiple")
  .addEventListener("click", () => {
    const container = document.getElementById("image-container");
    container.innerHTML = "";
    for (let i = 1; i <= 4; i++) {
      logActivity(
        "GET (Image)",
        `https://via.placeholder.com/${100 + i * 10}`,
        "Pending...",
        "pending",
      );
      const img = document.createElement("img");
      img.src = `https://via.placeholder.com/${100 + i * 10}?text=Image+${i}`;
      img.onload = () => {
        logActivity(
          "GET (Image)",
          `https://via.placeholder.com/${100 + i * 10}`,
          "200 OK",
          "success",
        );
      };
      container.appendChild(img);
    }
  });

// ========== 4. Different Request Types ==========

// Large Payload
document
  .getElementById("btn-large-payload")
  .addEventListener("click", async () => {
    logActivity(
      "POST (Large Payload)",
      "Large data request",
      "Pending...",
      "pending",
    );
    const largeArray = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      data: "x".repeat(100),
    }));
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(largeArray),
      });
      logActivity(
        "POST (Large Payload)",
        "Large data request",
        "201 Created",
        "success",
      );
      document.getElementById("request-output").innerHTML =
        `<strong>Large Payload (201):</strong><br>Sent ${JSON.stringify(largeArray).length} bytes of data`;
    } catch (error) {
      logActivity(
        "POST (Large Payload)",
        "Large data request",
        "Error",
        "error",
      );
      document.getElementById("request-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Streaming Response
document.getElementById("btn-streaming").addEventListener("click", async () => {
  logActivity(
    "GET (Streaming)",
    "Streaming data endpoint",
    "Pending...",
    "pending",
  );
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10",
    );
    const data = await response.json();
    logActivity(
      "GET (Streaming)",
      "Streaming data endpoint",
      `200 OK (${data.length} items)`,
      "success",
    );
    document.getElementById("request-output").innerHTML =
      `<strong>Streaming Response (200):</strong><br>Received ${data.length} items in stream`;
  } catch (error) {
    logActivity("GET (Streaming)", "Streaming data endpoint", "Error", "error");
    document.getElementById("request-output").innerHTML =
      `<strong>Error:</strong> ${error.message}`;
  }
});

// ========== 4. Request Timing Analysis ==========

// Normal Speed
document
  .getElementById("btn-timing-normal")
  .addEventListener("click", async () => {
    const start = performance.now();
    logActivity("GET", "Normal speed request", "Pending...", "pending");
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts");
      const elapsed = (performance.now() - start).toFixed(2);
      logActivity(
        "GET",
        "Normal speed request",
        `200 OK (${elapsed}ms)`,
        "success",
      );
      document.getElementById("timing-output").innerHTML =
        `<strong>Timing Analysis:</strong><br>Total time: ${elapsed}ms`;
    } catch (error) {
      logActivity("GET", "Normal speed request", "Error", "error");
      document.getElementById("timing-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Slow Connection
document
  .getElementById("btn-timing-slow")
  .addEventListener("click", async () => {
    const start = performance.now();
    logActivity("GET", "Slow connection test", "Pending...", "pending");
    try {
      await fetch("https://httpstat.us/200?sleep=3000");
      const elapsed = (performance.now() - start).toFixed(2);
      logActivity(
        "GET",
        "Slow connection test",
        `200 OK (${elapsed}ms)`,
        "success",
      );
      document.getElementById("timing-output").innerHTML =
        `<strong>Slow Connection Timing:</strong><br>Total time: ${elapsed}ms`;
    } catch (error) {
      logActivity("GET", "Slow connection test", "Error", "error");
      document.getElementById("timing-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Multiple Requests
document
  .getElementById("btn-timing-multiple")
  .addEventListener("click", async () => {
    const start = performance.now();
    logActivity("GET", "Multiple requests", "Pending...", "pending");
    try {
      await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/2"),
        fetch("https://jsonplaceholder.typicode.com/posts/3"),
      ]);
      const elapsed = (performance.now() - start).toFixed(2);
      logActivity(
        "GET",
        "Multiple requests",
        `200 OK (${elapsed}ms)`,
        "success",
      );
      document.getElementById("timing-output").innerHTML =
        `<strong>Parallel Requests Timing:</strong><br>3 requests completed in ${elapsed}ms`;
    } catch (error) {
      logActivity("GET", "Multiple requests", "Error", "error");
      document.getElementById("timing-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// ========== 5. Error Scenarios ==========

// 404 Error
document.getElementById("btn-error-404").addEventListener("click", async () => {
  logActivity("GET", "https://httpstat.us/404", "Pending...", "pending");
  try {
    const response = await fetch("https://httpstat.us/404");
    logActivity("GET", "https://httpstat.us/404", "404 Not Found", "error");
    document.getElementById("error-output").innerHTML =
      `<strong>404 Error:</strong><br>Resource not found. Status: ${response.status}`;
  } catch (error) {
    logActivity("GET", "https://httpstat.us/404", "Error", "error");
    document.getElementById("error-output").innerHTML =
      `<strong>Error:</strong> ${error.message}`;
  }
});

// 500 Server Error
document.getElementById("btn-error-500").addEventListener("click", async () => {
  logActivity("GET", "https://httpstat.us/500", "Pending...", "pending");
  try {
    const response = await fetch("https://httpstat.us/500");
    logActivity("GET", "https://httpstat.us/500", "500 Server Error", "error");
    document.getElementById("error-output").innerHTML =
      `<strong>500 Error:</strong><br>Server error occurred. Status: ${response.status}`;
  } catch (error) {
    logActivity("GET", "https://httpstat.us/500", "Error", "error");
    document.getElementById("error-output").innerHTML =
      `<strong>Error:</strong> ${error.message}`;
  }
});

// Timeout
document
  .getElementById("btn-error-timeout")
  .addEventListener("click", async () => {
    logActivity("GET", "Timeout test", "Pending...", "pending");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    try {
      await fetch("https://httpstat.us/200?sleep=5000", {
        signal: controller.signal,
      });
      logActivity("GET", "Timeout test", "200 OK", "success");
    } catch (error) {
      logActivity("GET", "Timeout test", "Timeout/Aborted", "error");
      document.getElementById("error-output").innerHTML =
        `<strong>Timeout:</strong><br>Request was aborted after 2 seconds. ${error.message}`;
    }
    clearTimeout(timeoutId);
  });

// CORS Error (attempting a cross-origin request that violates CORS policy)
document
  .getElementById("btn-error-cors")
  .addEventListener("click", async () => {
    logActivity("GET", "CORS request", "Pending...", "pending");
    try {
      await fetch("https://example.com/api/data");
      logActivity("GET", "CORS request", "200 OK", "success");
    } catch (error) {
      logActivity("GET", "CORS request", "CORS Error", "error");
      document.getElementById("error-output").innerHTML =
        `<strong>CORS Error:</strong><br>Cross-Origin Request Blocked. Check Network tab for details. ${error.message}`;
    }
  });

// ========== 6. Request Headers & Auth ==========

// Custom Headers
document
  .getElementById("btn-custom-headers")
  .addEventListener("click", async () => {
    logActivity("GET", "Custom headers request", "Pending...", "pending");
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          "X-Custom-Header": "CustomValue123",
          "X-Request-ID": Date.now().toString(),
          "User-Agent": "CustomAgent/1.0",
        },
      });
      logActivity("GET", "Custom headers request", "200 OK", "success");
      document.getElementById("header-output").innerHTML =
        `<strong>Custom Headers Sent (200):</strong><br>Check Network tab to see request headers`;
    } catch (error) {
      logActivity("GET", "Custom headers request", "Error", "error");
      document.getElementById("header-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Bearer Token Auth
document
  .getElementById("btn-auth-bearer")
  .addEventListener("click", async () => {
    logActivity("GET", "Bearer token auth", "Pending...", "pending");
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp9...",
        },
      });
      logActivity("GET", "Bearer token auth", "200 OK", "success");
      document.getElementById("header-output").innerHTML =
        `<strong>Bearer Token Auth (200):</strong><br>Authorization header sent with bearer token`;
    } catch (error) {
      logActivity("GET", "Bearer token auth", "Error", "error");
      document.getElementById("header-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });

// Different Content-Type
document
  .getElementById("btn-content-type")
  .addEventListener("click", async () => {
    logActivity("POST", "Different content-type", "Pending...", "pending");
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "title=Test&body=Content&userId=1",
      });
      logActivity("POST", "Different content-type", "201 Created", "success");
      document.getElementById("header-output").innerHTML =
        `<strong>Form-Encoded Content (201):</strong><br>Content-Type: application/x-www-form-urlencoded`;
    } catch (error) {
      logActivity("POST", "Different content-type", "Error", "error");
      document.getElementById("header-output").innerHTML =
        `<strong>Error:</strong> ${error.message}`;
    }
  });
