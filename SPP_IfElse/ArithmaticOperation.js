// Read 3 numbers from command line
let a = parseInt(process.argv[2], 10);
let b = parseInt(process.argv[3], 10);
let c = parseInt(process.argv[4], 10);

// Perform arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Print results
console.log("Results:");
console.log("1. a + b * c =", result1);
console.log("2. a % b + c =", result2);
console.log("3. c + a / b =", result3);
console.log("4. a * b + c =", result4);

// Finding Maximum Value using if-else
let max = result1;

if (result2 > max) {
    max = result2;
}
if (result3 > max) {
    max = result3;
}
if (result4 > max) {
    max = result4;
}

// Finding Minimum Value using if-else
let min = result1;

if (result2 < min) {
    min = result2;
}
if (result3 < min) {
    min = result3;
}
if (result4 < min) {
    min = result4;
}

// Print Maximum and Minimum
console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
