// 26. Remove Duplicates From Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums) => {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates([0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4]));