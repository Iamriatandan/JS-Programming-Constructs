// Read the number from command line
let num = parseInt(process.argv[2], 10);

// Check for valid input
if (isNaN(num) || num <= 0) {
    console.log("Invalid input. Please enter numbers like 1, 10, 100, 1000, etc.");
} else {
    let unit;
    
    switch (num) {
        case 1: unit = "Unit"; break;
        case 10: unit = "Ten"; break;
        case 100: unit = "Hundred"; break;
        case 1000: unit = "Thousand"; break;
        case 10000: unit = "Ten Thousand"; break;
        case 100000: unit = "Lakh"; break;
        case 1000000: unit = "Ten Lakh"; break;
        case 10000000: unit = "Crore"; break;
        default: unit = "Invalid Input";
    }

    console.log(unit);
}
it