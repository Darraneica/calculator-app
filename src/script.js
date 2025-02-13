let currentInput = "";
const display = document.getElementById("display");

// add a number

function addNum(num){
    currentInput += num; // add clicked num to input string
    display.value = currentInput; // update the display
}

// add operator 

function addOperator(operator){
    if (currentInput !== "" && !isNaN(currentInput[currentInput.length - 1])){
    currentInput += operator; // add operator only if last character is a number.
    display.value = currentInput;
    }
}

// divide operator

function divOperator(operator){
    if (currentInput !== "" && !isNaN(currentInput[currentInput.length - 1])){
        currentInput += "/";
        display.value = currentInput;
    }
}

// add a decimal

function addDot(){
    if (currentInput == "" || isNaN(currentInput[currentInput.length - 1])){
        currentInput += "0."; // if input is empty or ends in an operator -- start with "0".
    } else if (!currentInput.includes(".")){
        currentInput += "."; // add a decimal only if it doesn't exist.
    }
    display.value = currentInput;
}

// clear display

function clearDisplay(){
    currentInput = ""; // reset the stored input
    display.value = ""; // clear the screen
}

// compute

function calculate(){
    try{
        currentInput = eval(currentInput).toString(); // evaluate the math expression
        display.value = currentInput; // show the result
    } catch (error) {
        display.value = "Error"; // show error if there is a mistake
        currentInput = ""; //reset
    }  
}

// backspace function

function backspace(){
    currentInput = currentInput.slice(0, -1); // remove last character
    display.value = currentInput;

}

// add event listener

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        const value = this.textContent;

        if (!isNaN(value)){
            addNum(value);
        } else if (value === "="){
            calculate();
        } else if (value === "C") {
            clearDisplay();
        } else if (value === ".") {
            addDot()
        }
    });
});

// keyboard support

document.addEventListener("keydown", function(event){
    const key = event.key;

    if (!isNaN(key)){
        addNum(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        addOperator(key);
    } else if (key == ".") {
        addDot();
    } else if (key == "Enter") {
        calculate();
    } else if (key == "Backspace") {
        backspace();
    } else if (key == "Escape") {
        clearDisplay();
    }
});