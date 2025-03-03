// Taking input of date and month from user
let month = parseInt(process.argv[2], 10);
let date = parseInt(process.argv[3], 10);

console.log("Enter Month:", month);
console.log("Enter Date:", date);

// Check if date is valid: March 20 to June 20
let isValid = (month === 3 && date >= 20) || // March 20 to March 31
              (month > 3 && month < 6) ||    // April & May (full months)
              (month === 6 && date <= 20);   // June 1 to June 20

console.log("Is Valid Date:", isValid);
