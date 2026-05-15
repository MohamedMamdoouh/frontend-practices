function showNavigatorInfo() {
  const info = `
        <div><span class="label">User Agent:</span> ${navigator.userAgent}</div>
        <div><span class="label">Language:</span> ${navigator.language}</div>
        <div><span class="label">Online:</span> ${navigator.onLine}</div>
        <div><span class="label">Cookies Enabled:</span> ${
          navigator.cookieEnabled
        }</div>
        <div><span class="label">Clipboard API:</span> ${
          navigator.clipboard ? "Available" : "Not Supported"
        }</div>
      `;
  document.getElementById("infoBox").innerHTML = info;
}

function getLocation() {
  if (!navigator.geolocation) {
    document.getElementById("infoBox").innerHTML =
      "<span class='label'>Geolocation:</span> Not supported";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      document.getElementById("infoBox").innerHTML = `
          <div><span class="label">Latitude:</span> ${position.coords.latitude}</div>
          <div><span class="label">Longitude:</span> ${position.coords.longitude}</div>
        `;
    },
    (error) => {
      document.getElementById(
        "infoBox"
      ).innerHTML = `<span class="label">Error:</span> ${error.message}`;
    }
  );
}
