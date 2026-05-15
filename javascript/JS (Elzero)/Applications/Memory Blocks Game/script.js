document.addEventListener("DOMContentLoaded", () => {
  // Game configuration
  const cardValues = ["🍎", "🍌", "🍒", "🍓", "🍇", "🍉", "🍊", "🍋", "🍍"];
  const grid = document.getElementById("game-grid");
  const wrongTriesElement = document.getElementById("wrong-tries");
  const timerElement = document.getElementById("timer");

  // Game state
  let flippedCards = [];
  let matchedPairs = 0;
  let wrongTries = 0;
  let isProcessing = false;
  const timeLeftConstant = 60;
  let timeLeft = timeLeftConstant;
  let timerInterval;

  // Show name input dialog
  const nameDialog = document.getElementById("name-input-dialog");
  const nameInput = document.getElementById("player-name-input");
  const startBtn = document.getElementById("start-game-btn");

  // Show the name input dialog immediately
  nameDialog.style.display = "flex";

  // Start game when button is clicked
  startBtn.addEventListener("click", handleStartBtn);

  // Allow pressing Enter to start game
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      startBtn.click();
    }
  });

  function handleStartBtn() {
    const playerName = nameInput.value.trim();
    document.getElementById("player-name").textContent = /^[a-z]/i.test(
      playerName
    )
      ? playerName
      : "Player";

    // Hide dialog and start game
    nameDialog.style.display = "none";
    initGame();
  }

  // Initialize game
  function initGame() {
    const gameCards = [...cardValues, ...cardValues];

    // Shuffle cards
    gameCards.sort(() => Math.random() - 0.5);

    // Clear existing cards
    grid.innerHTML = "";

    // Create card elements
    for (const value of gameCards) {
      const card = createCard(value);
      grid.appendChild(card);
    }

    // Reset game state
    flippedCards = [];
    matchedPairs = 0;
    wrongTries = 0;
    timeLeft = timeLeftConstant;
    updateWrongTries();
    updateTimerDisplay();

    // Clear any existing timer
    clearInterval(timerInterval);

    // Start the timer
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      // Check if time is up
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showTimeUpNotification();
      }
    }, 1000);
  }

  // Create a card element
  function createCard(value) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;

    const inner = document.createElement("div");
    inner.classList.add("inner");

    const front = document.createElement("div");
    front.classList.add("front");
    front.textContent = "?";

    const back = document.createElement("div");
    back.classList.add("back");
    back.textContent = value;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Add click event listener
    card.addEventListener("click", () => flipCard(card));

    return card;
  }

  // Flip a card
  function flipCard(card) {
    if (isProcessing || card.classList.contains("flipped")) {
      return;
    }

    // Flip the card
    card.classList.add("flipped");
    flippedCards.push(card);

    // Check for match if two cards are flipped
    if (flippedCards.length === 2) {
      isProcessing = true;
      checkForMatch();
    }
  }

  // Check  match function
  function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
      matchedPairs++;
      flippedCards = [];
      isProcessing = false;

      // Check for win condition
      if (matchedPairs === cardValues.length) {
        clearInterval(timerInterval);
        showVictoryNotification();
      }
    } else {
      wrongTries++;
      updateWrongTries();
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
        isProcessing = false;
      }, 1000);
    }
  }

  // update wrong tries display
  function updateWrongTries() {
    wrongTriesElement.textContent = `${wrongTries}`;
  }

  // update timer display
  function updateTimerDisplay() {
    timerElement.textContent = timeLeft;
  }

  // Show victory notification
  function showVictoryNotification() {
    const notification = document.getElementById("victory-notification");
    const finalWrongTries = document.getElementById("final-wrong-tries");
    const finalTime = document.getElementById("final-time");
    const playAgainBtn = document.getElementById("play-again-btn");

    // Update final wrong tries count
    finalWrongTries.textContent = wrongTries;

    // Update time taken
    finalTime.textContent = timeLeftConstant - timeLeft;

    // Show notification
    notification.style.display = "flex";

    // Add event listener to play again button
    playAgainBtn.onclick = () => {
      notification.style.display = "none";
      initGame();
    };
  }

  // Show time up notification
  function showTimeUpNotification() {
    const notification = document.getElementById("victory-notification");
    const finalWrongTries = document.getElementById("final-wrong-tries");
    const finalTime = document.getElementById("final-time");
    const playAgainBtn = document.getElementById("play-again-btn");
    const notificationTitle = notification.querySelector("h2");
    const notificationMessage = notification.querySelector("p");

    // Update notification text for time up scenario
    notificationTitle.textContent = "Time's Up!";
    notificationMessage.textContent = `You matched ${matchedPairs} out of ${cardValues.length} pairs!`;

    // Update final wrong tries count
    finalWrongTries.textContent = wrongTries;

    // Update time taken
    finalTime.textContent = timeLeftConstant - timeLeft;

    // Show notification
    notification.style.display = "flex";

    // Add event listener to play again button
    playAgainBtn.onclick = () => {
      notification.style.display = "none";
      initGame();
    };
  }
});
