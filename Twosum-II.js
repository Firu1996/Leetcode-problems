// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let index =[];
    for(let i=0; i<numbers.length;i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i]+numbers[j] === target){
                index.push(i+1);
                index.push(j+1);
                return index;
            }
        }
    }
};
const numbers = [2,7,11,15];
const target = 9;
console.log(twoSum(numbers, target))

// Test case #1
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Test case #2
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].