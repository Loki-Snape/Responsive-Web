document.getElementById("convert-btn").addEventListener("click", convertToRoman);

function convertToRoman() {
  const num = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (num === "") {
    output.innerText = "Please enter a valid number";
    return;
  }

  const number = parseInt(num);

  if (isNaN(number)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  if (number < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (number > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";
  let temp = number;

  for (let i = 0; i < romanMap.length; i++) {
    while (temp >= romanMap[i].value) {
      result += romanMap[i].numeral;
      temp -= romanMap[i].value;
    }
  }

  output.innerText = result;
}
