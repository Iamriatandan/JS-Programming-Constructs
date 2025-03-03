//Function to generate a Random Two digit number
function RandomNumber(){
    return Math.floor(Math.random()*90) + 10;
}

//Generate an array of 5 random digit numbers from above function 
let array = Array.from({length:5}, RandomNumber);

//Calculate sum
let sum = array.reduce((acc, num) => acc + num, 0);

//Calculate average
let average = sum/array.length;

//Displaying values
console.log("Generated Numbers : " , array);
console.log("Sum of numbers : " , sum);
console.log("Average of numbers : " , average);
