// Get the input from command line
let coinStatus = parseInt(process.argv[2], 10);

// Validate input (only 0 or 1 allowed)
if (coinStatus !== 0 && coinStatus !== 1) {
    console.log("Not a valid answer. Enter 0 for Heads or 1 for Tails.");
} else {
    let heads = coinStatus === 0; // Heads if 0
    console.log(coinStatus, "is", heads ? "Heads" : "Tails");
}
