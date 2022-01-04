// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n === 1){
       return true;
    }else if(n === 0){
       return false;
    }
    
    while(n !== 1){
        if(n%3 !== 0){
           return false;
        }
        n/=3;
    }
    return true;
};

const n = 27;
console.log(isPowerOfThree(n));

// Test case #1
// Input: n = 27
// Output: true

// Test case #2
// Input: n = 0
// Output: false

// Test case #3
// Input: n = 9
// Output: true