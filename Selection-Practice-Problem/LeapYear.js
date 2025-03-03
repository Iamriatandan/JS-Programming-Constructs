//Taking input for year
let year = parseInt(process.argv[2],10);
console.log("Year : ", year );

if(isNaN(year)||year<1000||year>9999){
    console.log("Please enter a valid year");
}
else{
let isValid = (year % 4 === 0 && year % 100 != 0 )|| (year % 400 === 0);

console.log(year, "is" , isValid ? "Is a Leap Year":"not a leap Year");
}


