const form = document.getElementById("demoForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  console.log("Form submitted successfully");
  alert("Form submitted successfully");

  form.reset();
});
