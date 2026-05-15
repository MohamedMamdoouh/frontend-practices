const savedText = sessionStorage.getItem("draftText");
if (savedText !== null) {
  document.getElementById("textBox2").value = savedText;
}

const textBox2 = document.getElementById("textBox2");

textBox2.addEventListener("input", function () {
  sessionStorage.setItem("draftText", textBox2.value);
});
