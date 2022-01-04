// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
 
    for(let i=0; i< nums.length ; i++){
        if(val === nums[i]){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};
const nums = [0,1,2,2,3,0,4,2];
const val = 2;
console.log(removeElement(nums, val))

// Test case #1
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Test case #2
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

