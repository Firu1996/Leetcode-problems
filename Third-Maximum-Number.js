// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let arr = [...new Set(nums)]
    arr.sort((a, b) => a - b);
    if(arr.length < 3){
      return Math.max(...arr)
    }else{
        console.log(arr)
      return arr[arr.length-3] 
    }
    
};

const nums = [3,2,1];
console.log(thirdMax(nums));

// Test case #1
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Test case #2
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Test case #3
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.