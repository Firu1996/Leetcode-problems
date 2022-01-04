// https://leetcode.com/problems/day-of-the-week/

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
 var dayOfTheWeek = function(day, month, year) {
    let s = `${year}-${month}-${day}`
    let d = new Date(s)
    
    let result = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return result[d.getDay()];
};
const day = 31;
const month = 8;
const year = 2019;
console.log(dayOfTheWeek(day, month, year));

// Test case #1
// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"

// Test case #2
// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"

// Test case #3
// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"