//input number
let number = parseInt(process.argv[2],10);
if(isNaN(number)||number<0){
    console.log("Enter Valid Number");
}
else{
    let harmonicaNumber =0;
    for(let i =1;i<=number;i++){
        harmonicaNumber = harmonicaNumber + 1/i;
    }

    console.log(`The ${number}th harmonica Number (H_${number}) is: ${harmonicaNumber}`);
}