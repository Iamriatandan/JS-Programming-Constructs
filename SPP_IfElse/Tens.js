let number = parseInt(process.argv[2],10);
//declaring object
const unitMaps = {
    1 : "Unit",
    10 : "Ten",
    100 : "Hundred",
    1000 : "Thousand",
    10000 : "Ten-Thousand",
    100000 : "One-Lakh",
    1000000 : "Ten-Lakhs",
    10000000 : "Crore",
    100000000 : "Ten-Crore"
}

console.log(unitMaps[number]);