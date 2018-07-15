/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.data = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.data.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    this.data.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.data[this.data.length-1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.data.length ===0){
        return false;
    }else{
        return true;
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var min = new MyStack();
min.push(10);
min.push(11);
min.push(100);
min.push(11);
console.log(min);
min.pop();
console.log(min);

console.log(min.top());

console.log(min.empty());