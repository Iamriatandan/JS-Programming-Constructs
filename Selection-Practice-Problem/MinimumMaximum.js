//Function to Generate random 3 digit number
function number(){
return Math.floor(Math.random()*900)+100;
}
//Array to generate random numbers 
let array = Array.from({length:5},number );

array.sort(function(a,b){return a-b});

console.log("Generated numbers : " , array);
console.log("Minimum value : " ,array[0]);
console.log("Maximum Value : " ,array[array.length-1]);

