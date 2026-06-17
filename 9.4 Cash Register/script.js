const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];

const billInput = document.getElementById("bill-amount");
const cashInput = document.getElementById("cash-given");
const calculateBtn = document.getElementById("calculate-btn");
const errorMessage = document.getElementById("error-message");
const outputSection = document.getElementById("output-section");
const totalReturnEl = document.getElementById("total-return");
const notesGrid = document.getElementById("notes-grid");

function hideOutputs() {
  errorMessage.classList.add("hidden");
  outputSection.classList.add("hidden");
}

function showError(msg) {
  hideOutputs();
  errorMessage.innerText = msg;
  errorMessage.classList.remove("hidden");
}

calculateBtn.addEventListener("click", () => {
  const billAmount = Math.round(parseFloat(billInput.value));
  const cashGiven = Math.round(parseFloat(cashInput.value));

  // Input validation
  if (isNaN(billAmount) || isNaN(cashGiven)) {
    showError("Please enter valid numbers in both fields.");
    return;
  }

  if (billAmount <= 0) {
    showError("Bill amount must be greater than zero.");
    return;
  }

  if (cashGiven < billAmount) {
    showError(`Customer is short by ₹${billAmount - cashGiven}`);
    return;
  }

  if (cashGiven === billAmount) {
    showError("No change due. Exact cash provided.");
    errorMessage.style.backgroundColor = "#dcfce7";
    errorMessage.style.color = "#166534";
    return;
  }

  errorMessage.style.backgroundColor = "#fee2e2";
  errorMessage.style.color = "#991b1b";

  let changeNeeded = cashGiven - billAmount;
  totalReturnEl.innerText = `₹${changeNeeded}`;
  
  notesGrid.innerHTML = "";

  for (let i = 0; i < denominations.length; i++) {
    const currentNote = denominations[i];
    
    if (changeNeeded >= currentNote) {
      const numberOfNotes = Math.floor(changeNeeded / currentNote);
      
      changeNeeded = changeNeeded % currentNote;

      const noteCard = document.createElement("div");
      noteCard.classList.add("note-card");
      noteCard.innerHTML = `
        <span class="note-value">₹${currentNote}</span>
        <span class="note-count">${numberOfNotes}</span>
      `;
      notesGrid.appendChild(noteCard);
    }
  }

  errorMessage.classList.add("hidden");
  outputSection.classList.remove("hidden");
});