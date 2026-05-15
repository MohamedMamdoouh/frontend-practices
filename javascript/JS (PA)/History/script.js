function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}

function goBackTwo() {
  history.go(-2);
}

function reloadPage() {
  history.go(0);
}

function showLength() {
  document.getElementById(
    "InfoBox"
  ).innerHTML = `<span class="label">History Length:</span> ${history.length}`;
}
