const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Display conversion options
console.log("Unit Conversion Options:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Get user choice
let choice = parseInt(prompt("Enter your choice (1-4): "), 10);

// Get the value to convert
let value = parseFloat(prompt("Enter the value to convert: "));

let convertedValue;

// Perform unit conversion based on the user's choice
switch (choice) {
    case 1:
        convertedValue = value * 12; // 1 Foot = 12 Inches
        console.log(`${value} Feet = ${convertedValue} Inches`);
        break;
    case 2:
        convertedValue = value * 0.3048; // 1 Foot = 0.3048 Meters
        console.log(`${value} Feet = ${convertedValue.toFixed(4)} Meters`);
        break;
    case 3:
        convertedValue = value / 12; // 1 Inch = 1/12 Feet
        console.log(`${value} Inches = ${convertedValue.toFixed(4)} Feet`);
        break;
    case 4:
        convertedValue = value / 0.3048; // 1 Meter = 1/0.3048 Feet
        console.log(`${value} Meters = ${convertedValue.toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
