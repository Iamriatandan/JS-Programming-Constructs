//take input number
let number = parseInt(process.argv[2],10);

//function to check prime
function primeNumber(number){
    let count =0;
    for(let i=1; i <= number; i++){
        if(number%i == 0){
          count++;
        }
    }
    if(count === 2){
        console.log(`${number}`);
    }
}

if(isNaN(number)||number<0){
    console.log("Enter a valid number.");
}
else{
    for(let i =0;i<= number;i++){
        if(primeNumber(i)){
            console.log(i);
        }
    }    
}