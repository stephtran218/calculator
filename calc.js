let numButtons = document.querySelectorAll("button");
let clear = document.getElementById("clearBtn");
let display = document.getElementById("numDisplay");

function appearNumbers(event){
    const buttonValue = 
}

function appearNumbers(event){
    const buttonValue = event.target.dataset.value;
    updateDisplay(buttonValue);
}

function addBtn(){
    const currentInput = display.textContent;

}

function updateDisplay(value) {
    const currentInput = display.textContent;

    if (currentInput === '0' || isNaN(parseFloat(currentInput))) {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", appearNumbers);
}

clear.addEventListener("click", function () {
    display.textContent = '0';
});