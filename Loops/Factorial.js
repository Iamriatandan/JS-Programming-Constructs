//input number
let number = parseInt(process.argv[2],10);
let result =1;
if(isNaN(number)||number<0){
    console.log("Invalid Number");
}
else{
    for(let i = number;i>0;i--){
        result *=i;
    }
}
console.log(`Factorial of ${number} is  ${result} `)