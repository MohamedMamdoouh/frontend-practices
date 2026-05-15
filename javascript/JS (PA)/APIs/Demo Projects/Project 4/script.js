const btn = document.getElementById("btn");
const log = document.getElementById("log");

function addLog(text) {
  const div = document.createElement("div");
  div.className = "item muted";
  div.textContent = text;
  log.prepend(div);
}

// Simulate a server: it either resolves after a delay or rejects
function fakeServer(name, delayMs, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error(`${name} failed`));
      else
        resolve({
          server: name,
          timeMs: delayMs,
          data: "✅ Hello from " + name,
        });
    }, delayMs);
  });
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  log.innerHTML = "";
  addLog("Trying multiple servers…");

  // Some servers fail, one succeeds — Promise.any returns the first success
  const servers = [
    fakeServer("Server A", 900, true),
    fakeServer("Server B", 700, true),
    fakeServer("Server C", 800, false),
  ];

  try {
    const winner = await Promise.any(servers);
    addLog(`Winner: ${winner.server} in ${winner.timeMs}ms → ${winner.data}`);
  } catch (e) {
    // If ALL servers fail, Promise.any rejects with AggregateError
    addLog(`❌ All failed: ${e.constructor.name}`);
  } finally {
    btn.disabled = false;
  }
});
