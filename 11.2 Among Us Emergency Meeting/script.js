const poll = new Map();
const votingButtonsContainer = document.getElementById('voting-buttons');
const messageBoard = document.getElementById('message-board');
const resultsDisplay = document.getElementById('results-display');
const voterInput = document.getElementById('voter-id');

function showMessage(msg) {
    messageBoard.textContent = msg;
}

function renderButtons() {
    votingButtonsContainer.innerHTML = '';
    for (let option of poll.keys()) {
        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.textContent = `Vote ${option}`;
        btn.onclick = () => castVote(option);
        votingButtonsContainer.appendChild(btn);
    }
}

function addOption(option) {
    if (!option) {
        showMessage("Suspect name cannot be empty.");
        return;
    }
    if (poll.has(option)) {
        showMessage(`Suspect "${option}" is already on the radar.`);
        return;
    }
    poll.set(option, new Set());
    showMessage(`Suspect "${option}" added to the tracker.`);
    renderButtons();
}

function castVote(option) {
    const voterId = voterInput.value.trim();
    if (!voterId) {
        showMessage("Please enter your Crewmate ID first!");
        return;
    }
    if (!poll.has(option)) {
        showMessage(`Suspect "${option}" does not exist.`);
        return;
    }
    const voters = poll.get(option);
    if (voters.has(voterId)) {
        showMessage(`Crewmate ${voterId} has already voted for "${option}".`);
        return;
    }
    voters.add(voterId);
    showMessage(`Crewmate ${voterId} voted for "${option}".`);
}

function displayResults() {
    let results = ["VOTING RESULTS:"];
    for (let [option, voters] of poll) {
        results.push(`${option}: ${voters.size} votes`);
    }
    resultsDisplay.textContent = results.join('\n');
    resultsDisplay.style.display = 'block';
}

document.getElementById('add-btn').onclick = () => {
    const input = document.getElementById('new-suspect');
    addOption(input.value.trim());
    input.value = '';
};

document.getElementById('results-btn').onclick = displayResults;

addOption("Red");
addOption("Cyan");
addOption("Black");