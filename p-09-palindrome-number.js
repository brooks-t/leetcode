// 9. Palindrome Number
num = 123456789;

var isPalindrome = function(x) {
    if(x < 0) return false; // negative numbers are not palindrome
    let reverse = 0;
    let temp = x;
    while(temp > 0) {
        reverse = reverse * 10 + temp % 10; // reverse the number
        temp = Math.floor(temp / 10); // remove the last digit from the number
    }
    return reverse === x;
}

// see how each part works below
console.log(isPalindrome(num));
console.log(num/10);
console.log(num%10);
console.log(Math.floor(num/10));

