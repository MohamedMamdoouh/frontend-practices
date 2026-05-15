const btn = document.getElementById("btnFetch");
const msInput = document.getElementById("ms");
const out = document.getElementById("out");

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
const DEFAULT_TIMEOUT = 600;
const MAX_TIMEOUT = 30000;

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      const error = new Error(`Request timed out after ${ms}ms`);
      error.name = "TimeoutError";
      reject(error);
    }, ms);
  });
}

function handleApiError(error) {
  return `❌ Error: ${error.message}`;
}

async function fetchWithTimeout(url, ms) {
  try {
    const res = await Promise.race([fetch(url), timeout(ms)]);

    if (!res.ok) {
      throw new Error(
        `Server responded with status: ${res.status} ${res.statusText}`
      );
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new Error("Invalid response format: Expected JSON");
    }

    return res.json();
  } catch (error) {
    console.error("Error occurred:", error.message);
    throw error;
  }
}

function validateTimeout(value) {
  if (!value.trim()) {
    return null;
  }

  const ms = Number(value);

  if (Number.isNaN(ms) || ms < DEFAULT_TIMEOUT) {
    return null;
  }

  if (ms > MAX_TIMEOUT) {
    return null;
  }

  return ms;
}

async function handleFetchClick() {
  const validatedTimeout = validateTimeout(msInput.value);

  if (!validatedTimeout) {
    out.textContent = `Invalid timeout value. Please enter a value between ${DEFAULT_TIMEOUT} and ${MAX_TIMEOUT}.`;
    return;
  }

  btn.disabled = true;
  out.textContent = "Loading…";
  out.classList.add("loading");

  try {
    const data = await fetchWithTimeout(API_URL, validatedTimeout);
    out.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    out.textContent = handleApiError(error);
  } finally {
    btn.disabled = false;
    out.classList.remove("loading");
  }
}

btn.addEventListener("click", handleFetchClick);
msInput.value = DEFAULT_TIMEOUT;
