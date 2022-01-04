// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let split = [] ;
    split = s.split(" ");
    split = split.filter(word => word);
    return split[split.length-1].length;
};

const s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));

// Test case #1
// Input: s = "Hello World"
// Output: 5

// Test case #2
// Input: s = "   fly me   to   the moon  "
// Output: 4

// Test case #3
// Input: s = "luffy is still joyboy"
// Output: 6