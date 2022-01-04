// https://leetcode.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    let checkLower = word.toLowerCase();
    let checkUpper = word.toUpperCase();
    if(word.length === 1){
       return true;
    }
    
    if(checkLower === word){
        return true;
    }
    
    let count =0;
    if(checkUpper === word){
       return true;
    }else {
       for(let i =0; i< word.length ; i++){
        if(checkUpper.charAt(i) === word.charAt(i)){
           count++;
        }
    }
    }
    
 
    
   if(count === 1 && checkUpper.charAt(0) === word.charAt(0)){
       return true;
    }else{
       return false;
    }
    
};
const word = "USA";
console.log(detectCapitalUse(word));

// Test case #1
// Input: word = "USA"
// Output: true

// Test case #2
// Input: word = "FlaG"
// Output: false