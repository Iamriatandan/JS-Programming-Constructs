function isPalindrome(num) {
    let originalNum = num.toString();
    let reversedNum = originalNum.split('').reverse().join('');
    return originalNum === reversedNum;
}

function checkTwoPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is a palindrome.`);
    }
}

let num1 = parseInt(process.argv[2],10);
let num2 = parseInt(process.argv[3],10);

if(isNaN(num1)||isNaN(num2)){
    console.log("Invalid number , enter valid numbers");
}
else{
    checkTwoPalindromes(num1,num2);
}