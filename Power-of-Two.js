// https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if(n === 1){
        return true;
    }else if(n === 0){
        return false;
    }

    while(n !== 1){
        if(n%2 != 0 ){
            return false;
        }
        n/=2
    }

    return true;
};
const n = 3;
console.log(isPowerOfTwo(n));

// Test case #1
// Input: n = 1
// Output: true

// Test case #2
// Input: n = 16
// Output: true

// Test case #3
// Input: n = 3
// Output: false