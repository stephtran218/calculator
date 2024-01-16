let numButtons = document.querySelectorAll(".button");
let divBtn = document.getElementById("divBtn");
let multBtn = document.getElementById("multBtn");
let subBtn = document.getElementById("subBtn");
let addBtn = document.getElementById("addBtn");
let equalBtn = document.getElementById("equalBtn");
let clear = document.getElementById("clearBtn");
let decimalBtn = document.getElementById("decimalBtn");
let display = document.getElementById("numDisplay");

let startingInput = 0;
let currentInput = "";
let secondInput = "";
let operator = "";

function appearNumbers(event) {
    let buttonClicked = event.target;
    currentInput += buttonClicked.innerText;
    display.innerText = currentInput;
}

function handleNumberClick(number) {
    currentInput += number;
    appearNumbers();
}

function addNumbers() {
    if (currentInput !== "") {
        secondInput = parseFloat(currentInput);
        if (!isNaN(secondInput)) {
            operator = "+";
            currentInput = "";
            display.innerText = startingInput;
        } else {
            display.innerText = "Error";
        }
    }
}

function subNumbers() {
    if (currentInput !== "") {
        secondInput = parseFloat(currentInput);
        if (!isNaN(secondInput)) {
            operator = "-";
            currentInput = "";
            display.innerText = startingInput;
        } else {
            display.innerText = "Error";
        }
    }
}

function multNumbers() {
    if (currentInput !== "") {
        secondInput = parseFloat(currentInput);
        if (!isNaN(secondInput)) {
            operator = "*";
            currentInput = "";
            display.innerText = startingInput;
        } else {
            display.innerText = "Error";
        }
    }
}

function divNumbers() {
    if (currentInput !== "") {
        secondInput = parseFloat(currentInput);
        if (!isNaN(secondInput)) {
            operator = "/";
            currentInput = "";
            display.innerText = startingInput;
        } else {
            display.innerText = "Error";
        }
    }
}

function calculateResult() {
    if (currentInput !== "") {
        let result = parseFloat(currentInput);
        if (!isNaN(result)) {
            if (operator === "+") {
                startingInput += result;
            } else if (operator === "-") {
                startingInput -= result;
            } else if (operator === "*") {
                startingInput *= result;
            } else if (operator === "/") {
                startingInput /= result;
            }

            currentInput = "";
            operator = ""; // Reset the operator after calculation
            display.innerText = startingInput;
        } else {
            display.innerText = "Error";
        }
    }
}

function clearDisplay() {
    startingInput = 0;
    currentInput = "";
    secondInput = "";
    operator = "";
    display.innerText = "0";
}

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", appearNumbers);
}

addBtn.addEventListener("click", addNumbers);
subBtn.addEventListener("click", subNumbers);
multBtn.addEventListener("click", multNumbers);
divBtn.addEventListener("click", divNumbers);

equalBtn.addEventListener("click", calculateResult);
clear.addEventListener("click", clearDisplay);
