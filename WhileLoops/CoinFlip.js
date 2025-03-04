// Taking input from command line argument
let coinStatus = parseInt(process.argv[2], 10);

if (isNaN(coinStatus) || (coinStatus !== 0 && coinStatus !== 1)) {
    console.log("Invalid Flip");
    process.exit(1); // Exit program
}

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 (Heads) or 1 (Tails)
    
    if (flip === 0) {
        headsCount++;
    } else {
        tailsCount++;
    }
}

// Print the final result
console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
