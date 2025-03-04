const prompt = require("prompt-sync")();

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

// Get user choice
console.log("Choose Conversion Type:");
console.log(" Enter 1 for Celsius to Fahrenheit");
console.log("Enter 2 for Fahrenheit to Celsius");
let choice = parseInt(prompt("Enter choice (1 or 2): "), 10);

switch (choice) {
    case 1:
        let degC = parseFloat(prompt("Enter Temperature in Celsius (0C - 100C): "));
        if (degC >= 0 && degC <= 100) {
            console.log(`${degC}C = ${celsiusToFahrenheit(degC).toFixed(2)}F`);
        } else {
            console.log("Invalid input! Temperature should be between 0C and 100C.");
        }
        break;

    case 2:
        let degF = parseFloat(prompt("Enter Temperature in Fahrenheit (32F - 212F): "));
        if (degF >= 32 && degF <= 212) {
            console.log(`${degF}F = ${fahrenheitToCelsius(degF).toFixed(2)}C`);
        } else {
            console.log("Invalid input! Temperature should be between 32F and 212F.");
        }
        break;

    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
