//take input number
let number = parseInt(process.argv[2],10);

if(isNaN(number)||number<0){
    console.log("Enter a valid number.");
}
else{
    let count =0;
    for(let i=2; i <= number; i++){
        if(number%i == 0){
          count++;
        }
    }
    if(count === 2){
        console.log(`${number} is prime`);
    }
    else{
        console.log(`${number} is not prime`);
    }
}