let weekDay = parseInt(process.argv[2],10);

if(isNaN(weekDay)||weekDay<1||weekDay>7){
    console.log("Invalid Week Day");
}

else{
    let weekDays;

switch(weekDay){
    case 1 : weekDays = "Sunday";
    break;
    case 2 : weekDays = "Monday";
    break;
    case 3 : weekDays = "Tuesday";
    break;
    case 4 : weekDays = "Wednesday";
    break;
    case 5 : weekDays = "Thursday";
    break;
    case 6 : weekDays = "Friday";
    break;
    case 7 : weekDays = "Saturday";
    break;
    default : "Invalid Week-Day";
}

console.log("Week - Day is :" , weekDays);
}
