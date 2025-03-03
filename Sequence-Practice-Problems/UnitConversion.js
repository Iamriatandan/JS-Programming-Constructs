//Convert inches to feet
let inches =42;
let feet = inches/12;
console.log("42 inches is " , feet , "feet");

//Rectangular Plot dimensions from feet to meters
let length = 60;
let breadth = 40;

let lengthMeters = 60* 0.3048;
let breadthMeters = 60* 0.3048;

let area = lengthMeters*breadthMeters;

//area of 25 plots
let totalArea = area*25;
//area in acres
let areaAcres = totalArea/4046.86;

console.log("Area in Acres : " , areaAcres);