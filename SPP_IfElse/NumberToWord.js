//Input a single digit number
let number = parseInt(process.argv[2],10);

if(isNaN(number)||number<0||number>10){
    console.log("Invalid One-Digit number");
}
else{
    let numberToWord;
}

switch(number){
case 0 : numberToWord = "Zero"; 
break;
case 1 : numberToWord = "One"; 
break;
case 2 : numberToWord = "Two"; 
break;
case 3 : numberToWord = "Three"; 
break;
case 4 : numberToWord = "Four"; 
break;
case 5 : numberToWord = "Five"; 
break;
case 6 : numberToWord = "Six"; 
break;
case 7 : numberToWord = "Seven"; 
break;
case 8 : numberToWord = "Eight"; 
break;
case 9 : numberToWord = "Nine"; 
break;

default : "Invalid Input";
}

console.log(number ,"is",numberToWord);

