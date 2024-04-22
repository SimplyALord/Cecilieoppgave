let displayValue = '';

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

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}