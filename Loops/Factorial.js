//input number
let number = parseInt(process.argv[2],10);

// Function to compute prime factors
function primeFactorization(N) {
    if (isNaN(number) || number <= 1) {
        console.log("Enter a valid number greater than 1.");
        return;
    }

    console.log(`Prime factors of ${number}:`);

//Remove factors of 2
    while ( number% 2 === 0) {
        console.log(2);
        number = number / 2;
    }

    //  odd factors from 3 to square-root
    for (let i = 3; i * i <= N; i += 2) {
        while (number % i === 0) {
            console.log(i);
            number = number / i;
        }
    }

    //  If N is still greater than 2, it's a prime number
    if (number > 2) {
        console.log(number);
    }
}
primeFactorization(number);
