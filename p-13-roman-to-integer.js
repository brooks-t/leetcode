// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
console.log('13. Roman to Integer');

const problem = document.getElementById('problem');
problem.textContent = `13. Roman to Integer`;

const romanNums = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M':1000
};

const romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanNums[s[i]] < romanNums[s[i + 1]]) {
            sum -= romanNums[s[i]];
        } else {
            sum += romanNums[s[i]];
        }
    }
    return sum;
}

console.log(romanToInt('MCMXCIV'));