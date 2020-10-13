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

displayedNumber.textContent = "Hello";

window.addEventListener("keydown", function (e) {
  if (Number(e.key) >= 0 || Number(e.key) <= 9) {
    displayedNumber.textContent = e.key;
  }
});

//TODO Make function to add number to string or array
