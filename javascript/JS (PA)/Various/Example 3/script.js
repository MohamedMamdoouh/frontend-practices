document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("userInput").value;
    const sanitizedInput = DOMPurify.sanitize(userInput);

    document.getElementById("output").innerHTML = sanitizedInput;
  });
