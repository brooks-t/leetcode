// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// https://leetcode.com/problems/longest-common-prefix/

const strs = ["flower","flow","flight"];
const strs2 = ["dog","racecar","car"];

const longestCommonPrefix = strs => {
    let prefix = "";
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== character) return prefix;
        }
        prefix += character;
    }
    return prefix;
}
