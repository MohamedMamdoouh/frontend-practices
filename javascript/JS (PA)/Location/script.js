function showInfo() {
  document.getElementById("InfoBox").innerHTML = `
          <div><span class="label">href:</span> ${location.href}</div>
          <div><span class="label">hostname:</span> ${location.hostname}</div>
          <div><span class="label">pathname:</span> ${location.pathname}</div>
          <div><span class="label">protocol:</span> ${location.protocol}</div>
          <div><span class="label">port:</span> ${
            location.port || "(default)"
          }</div>
          <div><span class="label">search:</span> ${
            location.search || "(none)"
          }</div>
          <div><span class="label">hash:</span> ${
            location.hash || "(none)"
          }</div>
        `;
}

function goToGoogle() {
  location.assign("https://www.google.com");
}

function replacePage() {
  location.replace("https://www.google.com");
}

function reloadPage() {
  location.reload();
}
