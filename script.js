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

function buttonPress(keyParam) {
  const evt = new KeyboardEvent("keydown", { key: keyParam });
  window.dispatchEvent(evt);
}

function combineValue(currentNumber, inputNumber) {
  if (currentNumber === 0) {
    return inputNumber;
  }
  combinedValue = Number(currentNumber.toString() + inputNumber);
  return Number.isSafeInteger(combinedValue) ? combinedValue : currentNumber;
}

function calculator() {
  const currentNumberDisplay = document.querySelector(".calcDisplay");
  const queuedNumberDisplay = document.querySelector(".calcQueue");

  let currentNumber = 0;
  let queuedNumber = 0;
  let operatorValue = "";
  let operatorBool = false;
  let equationDone = false;
  currentNumberDisplay.textContent = currentNumber;

  window.addEventListener("keydown", function (e) {
    if (equationDone === false) {
      if (Number(e.key) >= 0 || (Number(e.key) <= 9 && e.key != " ")) {
        currentNumber = combineValue(currentNumber, e.key);
        currentNumberDisplay.textContent = currentNumber;
      } else if (operatorBool === false) {
        if (e.key === "*" || e.key === "/" || e.key === "+" || e.key === "-") {
          operatorBool = true;
          operatorValue = e.key;
          queuedNumber = currentNumber;
          queuedNumberDisplay.textContent =
            currentNumberDisplay.textContent + " " + operatorValue;
          currentNumber = 0;
        }
      }
      if (e.key === "Enter" && operatorBool === true) {
        //queuedNumberDisplay.textContent += " " + currentNumberDisplay.textContent;
        queuedNumberDisplay.textContent +=
          " " + currentNumberDisplay.textContent;
        switch (operatorValue) {
          case "*":
            currentNumber = multiply(currentNumber, queuedNumber);
            break;
          case "/":
            currentNumber = divide(currentNumber, queuedNumber);
            break;
          case "+":
            currentNumber = add(currentNumber, queuedNumber);
            break;
          case "-":
            currentNumber = subtract(currentNumber, queuedNumber);
            break;
        }
        currentNumberDisplay.textContent = currentNumber;
        equationDone = true;
      }
    }
    if (e.key === "Escape") {
      currentNumber = 0;
      queuedNumber = 0;
      operatorValue = "";
      currentNumberDisplay.textContent = 0;
      queuedNumberDisplay.textContent = "";
      operatorBool = false;
      equationDone = false;
    }
  });
}

calculator();
