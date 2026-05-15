const bnt1 = document.getElementById("btn1");
const output = document.getElementById("output");

function firstOnClick() {
  console.log("First onclick handler");
}

function secondOnClick() {
  console.log("Second onclick handler (overwrites first)");
}

bnt1.onclick = firstOnClick;
bnt1.onclick = secondOnClick;

///////////////////////////////////

function firstListener() {
  console.log("First addEventListener handler");
}

function secondListener() {
  console.log("Second addEventListener handler");
}

function updateOutput() {
  output.textContent = "Button clicked — check the console!";
}

bnt1.addEventListener("click", firstListener);
bnt1.addEventListener("click", secondListener);
bnt1.addEventListener("click", updateOutput);
