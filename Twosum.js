// https://leetcode.com/problems/two-sum/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let sumIndex = [];
    for(let i =0 ; i< nums.length; i++){
        for(let j=i+1; j < nums.length ; j++){
            let ans = nums[i] + nums[j]
            if(sumIndex.length < 2){
                if(target == ans){
                    sumIndex.push(i)
                    sumIndex.push(j)
                }
            }    
        }
    }
    return sumIndex;
};

const nums = [2,7,11,15];
console.log(twoSum(nums, 9));

// Test case #1
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

// Test case  #2
//Input: nums = [3,2,4], target = 6
//Output: [1,2]

// Test case #3 
//Input: nums = [3,3], target = 6
//Output: [0,1]