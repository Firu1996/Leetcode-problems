// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    return (Math.trunc(Math.sqrt(x)))
};

const x = 4;
console.log(mySqrt(x));

// Test case #1
// Input: x = 4
// Output: 2

// Test case #2
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

