// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let num = x;
    let isPalindrome = num.toString();
    let temp = isPalindrome.split('');
    temp.reverse();
    isPalindrome = temp.join('');
    isPalindrome = parseInt(isPalindrome)
    if(num === isPalindrome){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome(-121));

// Test case #1
// Input: x = 121
// Output: true

// Test case #2
// Input: x = -121
// Output: false

// Test case #2
// Input: x = 10
// Output: false