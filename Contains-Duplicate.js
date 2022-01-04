// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
   let check =0;
   for(let i = 0; i< nums.length ; i++){
       for(let j =i+1 ; j < nums.length ; j++){
           if(nums[i] === nums[j]){
               check++;
               break;
           }
       }  
   }
   if(check > 0){
       return true;
   }else {
       return false;
   }
};

const nums = [1,2,3,4];
console.log(containsDuplicate(nums));


// Test case #1
// Input: nums = [1,2,3,1]
// Output: true

// Test case #2
// Input: nums = [1,2,3,4]
// Output: false

// Test case #3
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true