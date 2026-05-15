let rows,
  cols,
  currentCol,
  currentRow,
  randomWord,
  cellMap,
  attempts,
  currentStreak,
  bestStreak,
  WORDS = [],
  DICTIONARY = {},
  isGameDone = false;

const board = document.getElementById("board");
const checkBtn = document.getElementById("checkBtn");
const hintBtn = document.getElementById("hintBtn");
const colsInput = document.getElementById("cols");
const rowsInput = document.getElementById("rows");
const applySettingsBtn = document.getElementById("applySettings");
const notificationContainer = document.getElementById("notificationContainer");

async function loadDictionary(wordSize) {
  const res = await fetch("words.json");
  DICTIONARY = await res.json();
  WORDS = DICTIONARY[wordSize] || [];
  WORDS = WORDS.map((word) => word.toUpperCase().trim());
}

function loadStats() {
  const savedStats = localStorage.getItem("wordGameStats");
  if (savedStats) {
    // not null or undefined
    const stats = JSON.parse(savedStats);
    currentStreak = stats.currentStreak || 0;
    bestStreak = stats.bestStreak || 0;
  }

  updateStatsDisplay();
}

function updateStatsDisplay() {
  document.getElementById("currentStreak").textContent = currentStreak;
  document.getElementById("bestStreak").textContent = bestStreak;
}

function saveStats() {
  const stats = {
    currentStreak: currentStreak,
    bestStreak: bestStreak,
  };

  localStorage.setItem("wordGameStats", JSON.stringify(stats));
  updateStatsDisplay();
}

loadStats();

// Notification system
function showNotification(message, type = "info", duration = 3000) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  let icon = "";
  switch (type) {
    case "success":
      icon = "✓";
      break;
    case "error":
      icon = "✗";
      break;
    case "warning":
      icon = "⚠";
      break;
    case "info":
    default:
      icon = "ℹ";
  }

  notification.innerHTML = `
    <span class="notification-icon">${icon}</span>
    <span class="notification-message">${message}</span>
    <span class="notification-close">&times;</span>
  `;

  notificationContainer.appendChild(notification);

  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  });

  // Trigger animation
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Auto remove after duration
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, duration);
}

// Create game grid
function buildBoard() {
  for (let r = 0; r < rows; r++) {
    // Create row container
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");

    // Add try number label
    const tryLabel = document.createElement("div");
    tryLabel.classList.add("try-label");
    tryLabel.textContent = `Try ${r + 1}`;
    rowContainer.appendChild(tryLabel);

    // Create cells container
    const cellsContainer = document.createElement("div");
    cellsContainer.classList.add("cells-container");

    for (let c = 0; c < cols; c++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = r;
      cell.dataset.col = c;
      cellsContainer.appendChild(cell);

      cellMap[`${r}-${c}`] = cell;
    }

    rowContainer.appendChild(cellsContainer);
    board.appendChild(rowContainer);
  }

  // Update row styles based on current row
  updateRowStyles();
}

applySettingsBtn.addEventListener("click", applySettings);
applySettingsBtn.click();

// Listen for keyboard input
document.addEventListener("keydown", handleInput);

function handleInput(e) {
  // A-Z only
  if (e.key.match(/^[a-z]$/i)) {
    if (currentCol < cols) {
      let cell = getCell(currentRow, currentCol);
      if (cell === null) return;
      cell.textContent = e.key.toUpperCase();
      currentCol++;
    }
  }

  // backspace
  if (e.key === "Backspace") {
    if (currentCol > 0) {
      currentCol--;
      let cell = getCell(currentRow, currentCol);
      cell.textContent = "";
    }
  }

  // enter => move to the next & check result
  if (e.key === "Enter") {
    checkBtn.click();
  }
}

function getCell(currentRow, currentCol) {
  return cellMap[`${currentRow}-${currentCol}`] || null;
}

hintBtn.addEventListener("click", () => {
  showNotification(`Hint: The word starts with "${randomWord[0]}"`, "info");
});

checkBtn.addEventListener("click", handleCheckBtn);

function handleCheckBtn() {
  if (currentCol !== cols) {
    showNotification("Please complete the word before checking!", "warning");
    return;
  }

  attempts++;

  const guessedWord = buildGuessedWordAndApplyColors();

  moveToNextRow();

  checkWordAndShowResult(guessedWord);

  if (isGameDone) return;

  handleGameEndOrContinue();
}

function buildGuessedWordAndApplyColors() {
  let guessedWord = "";
  const letterCount = {};

  // Count letters in the random word
  for (const letter of randomWord) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // First pass: mark correct letters
  for (let c = 0; c < cols; c++) {
    const cell = getCell(currentRow, c);
    const letter = cell.textContent;

    if (letter === randomWord[c]) {
      cell.classList.add("correct");
      letterCount[letter]--;
    }
    guessedWord += letter;
  }

  // Second pass: mark present letters
  for (let c = 0; c < cols; c++) {
    const cell = getCell(currentRow, c);
    const letter = cell.textContent;

    if (letter !== randomWord[c] && letterCount[letter] > 0) {
      cell.classList.add("present");
      letterCount[letter]--;
    } else if (letter !== randomWord[c]) {
      cell.classList.add("wrong");
    }
  }

  return guessedWord;
}

function moveToNextRow() {
  currentRow++;
  currentCol = 0;
  updateRowStyles();
}

function checkWordAndShowResult(guessedWord) {
  if (guessedWord === randomWord) {
    document.removeEventListener("keydown", handleInput);
    currentStreak++;
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }

    saveStats();

    showCelebration();

    showNotification(
      `Congratulations! You guessed the word successfully in ${attempts} attempts!`,
      "success",
      5000
    );

    isGameDone = true;
    checkBtn.disabled = true;
    hintBtn.disabled = true;

    setTimeout(() => {
      showNotification("Starting a new game in 5 seconds...", "info", 5000);
      setTimeout(() => {
        return applySettingsBtn.click();
      }, 5000);
    }, 5000);
  } else {
    showNotification("Try Again!", "error");
  }
}

function handleGameEndOrContinue() {
  if (currentRow >= rows) {
    document.removeEventListener("keydown", handleInput);
    currentStreak = 0;
    saveStats();

    showNotification(
      `Game Over! The word was "${randomWord}". Starting a new game in 5 seconds...`,
      "error",
      5000
    );
    setTimeout(() => {
      return applySettingsBtn.click();
    }, 5000);
  }
}

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function showCelebration() {
  const celebrationContainer = document.createElement("div");
  celebrationContainer.classList.add("celebration-container");
  document.body.appendChild(celebrationContainer);

  // Create multiple confetti elements
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random color for confetti
    const colors = ["#ff4e4e", "#2bbf9f", "#0276ff", "#ff9800", "#4CAF50"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = randomColor;

    // Random position and animation
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";

    celebrationContainer.appendChild(confetti);
  }

  // Remove celebration after animation completes
  setTimeout(() => {
    celebrationContainer.remove();
  }, 3000);
}

function updateRowStyles() {
  const rowContainers = document.querySelectorAll(".row-container");

  rowContainers.forEach((container, index) => {
    const tryLabel = container.querySelector(".try-label");
    const cells = container.querySelectorAll(".cell");

    if (index === currentRow) {
      // Current row: bold label and normal cells
      tryLabel.classList.add("current-try");
      tryLabel.classList.remove("past-try", "future-try");
      cells.forEach((cell) => {
        cell.classList.add("current-row-cell");
        cell.classList.remove("past-row-cell", "future-row-cell");
      });
    } else if (index < currentRow) {
      // Past rows: greyed out label and cells
      tryLabel.classList.add("past-try");
      tryLabel.classList.remove("current-try", "future-try");
      cells.forEach((cell) => {
        cell.classList.add("past-row-cell");
        cell.classList.remove("current-row-cell", "future-row-cell");
      });
    } else {
      // Future rows: greyed out label and cells
      tryLabel.classList.add("future-try");
      tryLabel.classList.remove("current-try", "past-try");
      cells.forEach((cell) => {
        cell.classList.add("future-row-cell");
        cell.classList.remove("current-row-cell", "past-row-cell");
      });
    }
  });
}

async function applySettings() {
  isGameDone = false;
  checkBtn.disabled = false;
  hintBtn.disabled = false;

  document.addEventListener("keydown", handleInput);
  await loadDictionary(document.getElementById("cols").value);

  cols = Number.parseInt(colsInput.value);
  rows = Number.parseInt(rowsInput.value);
  document.documentElement.style.setProperty("--numsOfCols", cols);

  currentRow = 0;
  currentCol = 0;
  attempts = 0;

  randomWord = getRandomWord();
  console.log("New Random Word (for testing):", randomWord);

  board.innerHTML = "";
  cellMap = new Map();
  buildBoard();
}

applySettingsBtn.addEventListener("click", applySettings);
