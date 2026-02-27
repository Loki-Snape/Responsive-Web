const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const originalText = textInput.value;

    if (originalText === "") {
        alert("Please input a value");
        return;
    }

    const cleanText = originalText.replace(/[^a-z0-9]/gi, "").toLowerCase();
    
    const reversedText = cleanText.split("").reverse().join("");

    if (cleanText === reversedText) {
        resultDiv.innerText = `${originalText} is a palindrome.`;
    } else {
        resultDiv.innerText = `${originalText} is not a palindrome.`;
    }
});