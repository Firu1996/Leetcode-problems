// https://leetcode.com/problems/min-stack/

var MinStack = function() {
    this.items = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(item) {
    this.items.push(item);
    if(this.min.length === 0 || item <= this.min[this.min.length - 1]){
        this.min.push(item);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let x = this.items.pop();
    if(x === this.min[this.min.length-1]){
         this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length -1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Test case #1

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2