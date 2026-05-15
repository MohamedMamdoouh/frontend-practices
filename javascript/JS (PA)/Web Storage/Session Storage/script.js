function saveCookies() {
  const name = document.getElementById("nameBox").value;
  const color = document.getElementById("colorBox").value;

  const expiration = new Date();
  expiration.setDate(expiration.getDate() + 7);

  document.cookie = `name=${encodeURIComponent(
    name
  )}; expires=${expiration.toUTCString()}; path=/`;

  document.cookie = `color=${encodeURIComponent(
    color
  )}; expires=${expiration.toUTCString()}; path=/`;
  alert("Cookies saved!");
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(rest.join("="));
    }
  }

  return null;
}

function readSpecificCookies() {
  const name = getCookie("name");
  const color = getCookie("color");

  const resultBox = document.getElementById("result");

  resultBox.innerHTML = `<strong>Saved Cookies:</strong><br><br>
         Username: ${name ?? "Not Found"}<br>
         Favorite Color: ${color ?? "Not Found"}`;
}

function deleteCookie(name, path = "/") {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970; path=${path}`;
}
