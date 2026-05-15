function showScroll() {
  document.getElementById(
    "output"
  ).textContent = `Current Scroll: X = ${window.scrollX}, Y = ${window.scrollY}`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollDown() {
  window.scrollBy({ top: 200, behavior: "smooth" });
}

function scrollSmooth() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

window.addEventListener("scroll", showScroll);

const btn = document.getElementById("scrollUp");
btn.addEventListener("click", scrollToTop);
