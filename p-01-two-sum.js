// 1. Two Sum: https://leetcode.com/problems/two-sum/
// Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to target.
// const problemTitle = document.getElementById('problemTitle');
// problemTitle.innerHTML = '1. Two Sum';

console.log("----------my solution---------");
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([10,7,2,15], 9));

// refactored solution via chatGPT
console.log("----------refactored solution via chatGPT---------");
const twoSumRefactor = function (nums, target) {
	const numMap = new Map();
	console.log(numMap);
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (numMap.has(complement)) {
			return [numMap.get(complement), i];
		}

		numMap.set(nums[i], i);
	}

	return [];
};

console.log(twoSumRefactor([10, 7, 2, 15], 9));