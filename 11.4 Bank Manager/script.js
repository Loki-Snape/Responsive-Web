class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount > 0) {
            this.transactions.push({ type: 'deposit', amount: amount });
            this.balance += amount;
            return `Successfully deposited ${amount} Galleons.`;
        }
        return "Deposit amount must be greater than zero.";
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.transactions.push({ type: 'withdraw', amount: amount });
            this.balance -= amount;
            return `Successfully withdrew ${amount} Galleons.`;
        }
        return "Insufficient Galleons or invalid amount.";
    }

    checkBalance() {
        return `Current Balance: ${this.balance} Galleons`;
    }
}

const vault687 = new BankAccount();
const balanceDisplay = document.getElementById('balance-display');
const amountInput = document.getElementById('amount-input');
const messageBoard = document.getElementById('message-board');
const depositList = document.getElementById('deposit-list');
const withdrawalList = document.getElementById('withdrawal-list');

function updateUI(message) {
    balanceDisplay.textContent = vault687.checkBalance();
    messageBoard.textContent = message;
    amountInput.value = '';
    
    depositList.innerHTML = '';
    withdrawalList.innerHTML = '';
    
    vault687.transactions.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.amount} Galleons`;
        if (t.type === 'deposit') {
            depositList.appendChild(li);
        } else {
            withdrawalList.appendChild(li);
        }
    });
}

document.getElementById('deposit-btn').addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const msg = vault687.deposit(amount);
    updateUI(msg);
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const msg = vault687.withdraw(amount);
    updateUI(msg);
});