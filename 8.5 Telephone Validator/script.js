const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Regex logic:
// ^(1\s?)?            : Matches optional '1' followed by an optional space at the beginning.
// (\(\d{3}\)|\d{3})  : Matches either (555) OR 555 for the area code.
// [\s\-]?            : Matches an optional space or hyphen.
// \d{3}              : Matches exactly 3 digits.
// [\s\-]?            : Matches an optional space or hyphen.
// \d{4}$             : Matches exactly 4 digits at the end of the string.
const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

const validatePhoneNumber = () => {
  const number = userInput.value;

  // Requirement: Check for empty input and trigger an alert
  if (number === '') {
    alert('Please provide a phone number');
    return;
  }

  // Create the resulting HTML paragraph
  const resultElement = document.createElement('p');
  
  // Test the input against the Regex
  if (phoneRegex.test(number)) {
    resultElement.className = 'valid-text';
    resultElement.innerText = `Valid US number: ${number}`;
  } else {
    resultElement.className = 'invalid-text';
    resultElement.innerText = `Invalid US number: ${number}`;
  }

  // Append the result to the div
  resultsDiv.appendChild(resultElement);
  
  // Optional: clear the input field after checking for a better UI experience
  // userInput.value = ''; 
};

// Event listener for the Check button (Veritas)
checkBtn.addEventListener('click', validatePhoneNumber);

// Allow pressing 'Enter' on the keyboard to check the number
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validatePhoneNumber();
  }
});

// Event listener for the Clear button (Evanesco)
clearBtn.addEventListener('click', () => {
  resultsDiv.innerText = '';
  userInput.value = '';
});