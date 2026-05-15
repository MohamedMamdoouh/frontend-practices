const btn = document.getElementById("btn");
const grid = document.getElementById("grid");

function task(name, delayMs, fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) reject(new Error(`${name} failed`));
      else resolve(`${name} done in ${delayMs}ms`);
    }, delayMs);
  });
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  grid.innerHTML = "";

  // Run multiple tasks; we want *all* outcomes
  const results = await Promise.allSettled([
    task("Resize images", 600, false),
    task("Upload files", 900, true),
    task("Send emails", 500, false),
    task("Write logs", 300, true),
  ]);

  // Render the report
  grid.innerHTML = results
    .map((r, i) => {
      if (r.status === "fulfilled") {
        return `
            <div class="box">
              <div class="ok" style="font-weight:800;">✅ Fulfilled</div>
              <div class="muted" style="margin-top:6px;">${r.value}</div>
            </div>
          `;
      }
      return `
          <div class="box">
            <div class="bad" style="font-weight:800;">❌ Rejected</div>
            <div class="muted" style="margin-top:6px;">${r.reason.message}</div>
          </div>
        `;
    })
    .join("");

  btn.disabled = false;
});
