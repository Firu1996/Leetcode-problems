// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for(let i =0; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            if(nums[i] == nums[j]){
                    nums.splice(i, 1)
                    i--;
            }
        }
    }
    return nums.length;

};

const nums = [1,1,2];
console.log(removeDuplicates(nums));

// Test case #1
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Test case #2 
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]