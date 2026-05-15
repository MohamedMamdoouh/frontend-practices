function startTasbeeh() {
  const Status = document.getElementById("status");
  const startBtn = document.getElementById("startBtn");

  startBtn.disabled = true;

  let count = 0;
  let phase = 1;

  function updateMessage() {
    count++;

    if (phase === 1) {
      Status.textContent = "سبحان الله - " + count;
      Status.style.color = "white";

      if (count === 33) {
        phase = 2;
        count = 0;
      }
    } else if (phase === 2) {
      Status.textContent = "الحمد لله - " + count;
      Status.style.color = "red";

      if (count === 33) {
        phase = 3;
        count = 0;
      }
    } else if (phase === 3) {
      Status.textContent = "الله أكبر - " + count;
      Status.style.color = "#d4af37";

      if (count === 33) {
        phase = 4;
        count = 0;
      }
    } else if (phase === 4) {
      Status.textContent =
        "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير";
      Status.style.color = "green";

      clearInterval(intervalID);

      setTimeout(() => alert("في ميزان حسناتكم"), 1000);

      startBtn.disabled = false;
    }
  }

  let intervalID = setInterval(updateMessage, 500);
}
