// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial of a negative number is not defined.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Exporting the functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factorial,
};