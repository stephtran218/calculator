//These variables hold info for the buttons 
let numButtons = document.querySelectorAll(".button");
let clear = document.getElementById("clearBtn");
let display = document.getElementById("numDisplay");

//These variables will hold what the user selects into the calculator
let startingInput = "";
let secondInput = "";
let operator = "";

//This function allows the buttons clicked to show its value on the calculator display
function appearNumbers(thing) {
    display.innerText = thing.innerText
}

//Once user clicks on the button, the number displayed will be taken as startingInput. 
function handleClick(event) {
    let buttonClicked = event.target;

    //This checks if the button clicked was a valid number and if it contains a decimal
    if(!isNaN(buttonClicked.innerText) || buttonClicked.innerText === "."){
        appearNumbers(buttonClicked)
    }
    else if(isNaN(buttonClicked.innerText)){
        // When the user clicks on operator, the value on display is taken as startingInput and screen changes to 0 
        if(buttonClicked.innerText === "+"){
            startingInput = display.innerText;
            display.innerText = "0";
            operator = buttonClicked.innerText;
        }
        else if(buttonClicked.innerText === "-"){
            startingInput = display.innerText;
            display.innerText = "0";
            operator = buttonClicked.innerText;
        }
        else if(buttonClicked.innerText === "*"){
            startingInput = display.innerText;
            display.innerText = "0";
            operator = buttonClicked.innerText;
        }
        else if(buttonClicked.innerText === "/"){
            startingInput = display.innerText;
            display.innerText = "0";
            operator = buttonClicked.innerText;
        }
        //If the user clicks the equal button, the secondInput will be the last number displayed on the screen and 
        //it will look at the operator to call the selected function
        else{
            console.log("=")
            secondInput = display.innerText;
            if(operator === "+"){
                addNumbers(startingInput, secondInput)
            }
            else if(operator === "-"){
                subNumbers(startingInput, secondInput)
            }
            else if(operator === "*"){
                multNumbers(startingInput, secondInput)
            }
            else{
                divNumbers(startingInput, secondInput)
            }
        }
    }
}

//This function will add numbers together
function addNumbers(num1, num2) {
    display.innerText = parseInt(num1) + parseInt(num2);
}

//This function will subtract numbers from each other
function subNumbers(num1, num2) {
    display.innerText = parseInt(num1) - parseInt(num2);
}

//This function will multiply numbers together
function multNumbers(num1, num2) {
    display.innerText = parseInt(num1) * parseInt(num2);
}

//This function will divide numbers from each other
function divNumbers(num1, num2) {
    //If division does not work, the 0 might be a problem
    if(num2 === 0){
        display.innerText = "Error";
    }
    display.innerText = parseInt(num1) / parseInt(num2);
}

//This function will clear the display for the user to put in a new expression
function clearDisplay() {
    startingInput = 0;
    secondInput = "";
    operator = "";
    display.innerText = "0";
}

//This for loop allows every single button, including numbers and operators, to handle user's clicks
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", handleClick);
}

//These are the event listeners for the equal and clear buttons
clear.addEventListener("click", clearDisplay);
