// https://leetcode.com/problems/powx-n/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    return Math.pow(x,n)
};
const x = 2.00000;
const n = 10;
console.log(myPow(x, n))

// Test case #1
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Test case #2
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Test case #3
// Input: x = 2.00000, n = -2
// Output: 0.25000