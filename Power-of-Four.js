// https://leetcode.com/problems/power-of-four/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    if(n === 1){
        return true;
    }else if(n === 0){
        return false;     
    }
    
    while(n !== 1){
         if(n%4 !== 0){
            return false;
         }
        n/=4;
    }
    return true;
};
const n = 5;
console.log(isPowerOfFour(n));

// Test case #1
// Input: n = 16
// Output: true

// Test case #2
// Input: n = 5
// Output: false

// Test case #3
// Input: n = 1
// Output: true