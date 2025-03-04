let start =100;
let win =0;
let bet =0;
let goal = 200;

while(start>0 && start<=goal){
    bet++
    let betStatus = Math.random();
    if(betStatus <0.5){
        start--;
    }
    else{
        start++;
        win++;
    }
}

console.log(`Wins Made ${win}`);
console.log(`Total bets ${bet}`);
console.log(`Total amount made ${goal}`);