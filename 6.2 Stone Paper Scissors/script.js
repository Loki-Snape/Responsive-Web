// Map text to Emojis
const handSigns = {
  Rock: "✊",
  Paper: "✋",
  Scissors: "✌️"
};

let playerScore = 0;
let computerScore = 0;

const playerHandDisp = document.getElementById("player-hand");
const computerHandDisp = document.getElementById("computer-hand");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function showResults(userOption) {
  const computerOption = getRandomComputerResult();

  // Update the big hands
  playerHandDisp.innerText = handSigns[userOption];
  computerHandDisp.innerText = handSigns[computerOption];

  // Logic for the round
  if (hasPlayerWonTheRound(userOption, computerOption)) {
    playerScore++;
    roundResultsMsg.innerText = `You won this round!`;
  } else if (userOption === computerOption) {
    roundResultsMsg.innerText = `It is a tie!`;
  } else {
    computerScore++;
    roundResultsMsg.innerText = `Computer won this round!`;
  }

  // Update scores
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;

  // Check for game winner
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = playerScore === 3 ? "You won the whole game!" : "The computer won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.innerText = "0";
  computerScoreSpan.innerText = "0";
  playerHandDisp.innerText = "?";
  computerHandDisp.innerText = "?";
  roundResultsMsg.innerText = "First to 3 points wins!";
  winnerMsgElement.innerText = "";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
}

// Event Listeners
document.getElementById("rock-btn").addEventListener("click", () => showResults("Rock"));
document.getElementById("paper-btn").addEventListener("click", () => showResults("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => showResults("Scissors"));
resetGameBtn.addEventListener("click", resetGame);