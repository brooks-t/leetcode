// 20. Valid Parentheses: https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

let str = "()[]{}";
let str2 = "([)]";
let str3 = "({[]})";

const isValid = (s) => {
    const stack = [];
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (let i of s) {
        if (map[i]) {
            stack.push(map[i]);
        } else if (stack.length > 0 && stack[stack.length - 1] === i) {
            stack.pop();
        } else {
            return false;
        }   
    }
    return stack.length === 0;
};

console.log(isValid(str));
console.log(isValid(str2));
console.log(isValid(str3));