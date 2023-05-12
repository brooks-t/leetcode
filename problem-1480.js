console.log('1480. Running Sum of 1d Array');
/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums. */

const nums = [1, 2, 3, 4];

const runningSum = (nums) => {
    let sum = 0;
    return nums.map(num => sum += num);
}

console.log(runningSum(nums));