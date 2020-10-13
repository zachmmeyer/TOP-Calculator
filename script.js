const displayedNumber = document.querySelector(".calcDisplay");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function combineValue(currentNumber, inputNumber) {
  if (currentNumber === 0) {
    return inputNumber;
  }
  combinedValue = Number(currentNumber.toString() + inputNumber);
  return Number.isSafeInteger(combinedValue) ? combinedValue : currentNumber;
}

function calculator() {
  displayedNumber.textContent = "Hello";

  let currentNumber = 0;
  displayedNumber.textContent = currentNumber;

  window.addEventListener("keydown", function (e) {
    if (Number(e.key) >= 0 || (Number(e.key) <= 9 && e.key != " ")) {
      currentNumber = combineValue(currentNumber, e.key);
      displayedNumber.textContent = currentNumber;
      console.log(currentNumber);
      console.log(displayedNumber);
    }
  });
}

calculator();

//TODO Make function to add number to string or array
