let displayValue = '';

// Function to handle keyboard events
function handleKeyPress(event) {
    const keyValue = event.key;

    // If the key pressed is a number, append it to the display
    if (!isNaN(parseInt(keyValue))) {
        appendNumber(parseInt(keyValue));
    } 
    // If the key pressed is an operator, append it to the display
    else if (['+', '-', '*', '/', '.'].includes(keyValue)) {
        appendOperator(keyValue);
    }
    // If the key pressed is "Enter", calculate the result
    else if (keyValue === 'Enter') {
        calculate();
    }
    // If the key pressed is "Backspace", delete the last character
    else if (keyValue === 'Backspace') {
        deleteLastCharacter();
    }
    // If the key pressed is "Escape" or "Delete", clear the display
    else if (['Escape', 'Delete'].includes(keyValue)) {
        clearDisplay();
    }
}

// Add event listener for keydown event
document.addEventListener('keydown', handleKeyPress);

// Rest of your functions remain the same...
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
    } catch (error) {
        // Do nothing or handle the error as needed
    }
    updateDisplay();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
