let numButtons = document.querySelectorAll("button");
let clear = document.getElementById("clearBtn");
let display = document.getElementById("numDisplay");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let multBtn = document.getElementById("multBtn");
let divBtn = document.getElementById("divBtn");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let button4 = document.getElementById("button-4");
let button5 = document.getElementById("button-5");
let button6 = document.getElementById("button-6");
let button7 = document.getElementById("button-7");
let button8 = document.getElementById("button-8");
let button9 = document.getElementById("button-9");

let currentInput = 0;

//This function will make the buttons's values the user clicked to display on screen
function appearNumbers(event) {
    const buttonValue = event.target.textContent;
    updateDisplay(buttonValue);
}

function updateDisplay(buttonValue) {
    const currentInput = display.innerText;

    if (currentInput === '0' || isNaN(parseFloat(currentInput))) {
        display.innerText = buttonValue;
    } else {
        display.innerText += buttonValue;
    }
}

function resetValue() {
    display.innerText = '0';
    currentOperator = null;
    firstOperand = null;
}

function setOperator(operator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(display.innerText);
        currentOperator = operator;
        display.innerText = '0';
    } else {
        calcExpression();
        currentOperator = operator;
    }
}

function calcExpression() {
    const secondOperand = parseFloat(display.innerText);

    if (!isNaN(firstOperand) && !isNaN(secondOperand) && currentOperator !== null) {
        let result;

        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                break;
        }

        display.innerText = result.toString();
        currentOperator = null;
        firstOperand = result;
    }
}

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", appearNumbers);
}

addBtn.addEventListener("click", () => setOperator('+'));
subBtn.addEventListener("click", () => setOperator('-'));
multBtn.addEventListener("click", () => setOperator('*'));
divBtn.addEventListener("click", () => setOperator('/'));

document.getElementById("equalBtn").addEventListener("click", calcExpression);

clear.addEventListener("click", resetValue);
