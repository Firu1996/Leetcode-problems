// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    for(let i =0; i< nums.length ; i++){
        if(target === nums[i]){
            return nums.indexOf(target);
        }

        if((target !== nums[i]) && (target < nums[i])){
            return i;
        }else if((target !== nums[i]) && (target > nums[nums.length-1])){
            return nums.length;
        }
            
    }

};
const nums = [1,3,5,6];
const target = 7;
console.log(searchInsert(nums, target))

// Test case #1
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Test case #2
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Test case #3
// Input: nums = [1,3,5,6], target = 7
// Output: 4