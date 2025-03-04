//taking input
let number = parseInt(process.argv[2],10);

function prime(number){
    let count =0;
    for(let i =1;i*i<=number;i++){
        if(number%i ==0){
            count++;
        }
    }
    if(count ===2){
        console.log(`${number}`)
    }
}

if(isNaN(number)||number<1){
    console.log("Not a valid number");
}
else{
    for(let i =number;i>0;i--){
        if(prime(i)){
            console.log(i);
        }
    }
}
