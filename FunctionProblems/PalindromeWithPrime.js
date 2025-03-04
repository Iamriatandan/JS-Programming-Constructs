// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Function to check if a number is prime and its palindrome is also prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindrome = getPalindrome(num);
        if (isPrime(palindrome)) {
            console.log(`${num} is a prime number and its palindrome ${palindrome} is also prime.`);
        } else {
            console.log(`${num} is a prime number but its palindrome ${palindrome} is not prime.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// Taking input from command line
let num = parseInt(process.argv[2], 10);

// Ensure input is valid before checking
if (isNaN(num) || num < 0) {
    console.log("Please enter a valid positive number.");
} else {
    checkPrimeAndPalindrome(num);
}
