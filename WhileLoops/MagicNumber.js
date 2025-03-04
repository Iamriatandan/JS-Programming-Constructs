const readline = require("readline-sync");

console.log("Think of a number between 1 and 100.");
console.log("I will try to guess it!");

let low = 1, high = 100;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let response = readline.question(`Is your number greater than ${mid}? (yes/no/equal): `).trim().toLowerCase(); // ✅ FIXED

    if (response === "equal") {
        console.log(`Your magic number is ${mid}! `);
        break; 
    } 
    else if (response === "yes") {
        low = mid + 1;
    } 
    else if (response === "no") {
        high = mid - 1;
    } 
    else {
        console.log(" Invalid input. Please enter 'yes', 'no', or 'equal'.");
    }
}
