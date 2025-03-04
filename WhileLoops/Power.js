//taking input
let n = parseInt(process.argv[2],10);

if(isNaN(n)||n<1){
    console.log("Invalid Number");
}
else{
    console.log(`Power of 2 upto 2^${n} , till power >= 256`);
    let i =0;
    let power =1;

    while(i<=n && power <=256){
        console.log(`2^${i} = ${power}`);
        i++;
        power*=2;
    }
}