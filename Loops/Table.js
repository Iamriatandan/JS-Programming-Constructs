//taking input
let numbers = parseInt(process.argv[2],10);

if(isNaN(numbers)||numbers<0){
    console.log("Enter Valid number");
}
else{
console.log(`Power of 2 till 2${numbers} : `);
for(let i=0;i<numbers;i++){
    console.log(`2^${i} = ${Math.pow(2,i)}`);
}
}