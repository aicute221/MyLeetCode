/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var min = Infinity;
    for(var i = 0;i<this.data.length;i++){
        min = Math.min(min,this.data[i]);
    }
    return min;
};


var min = new MinStack();
min.push(10);
min.push(11);
min.push(100);
min.push(11);
console.log(min);

min.pop();
console.log(min);

console.log(min.top());

console.log(min.getMin());