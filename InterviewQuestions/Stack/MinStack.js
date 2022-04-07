//https://leetcode.com/problems/min-stack/

var MinStack = function () {
  this.stack = [];
  this.min = [];
};

//Time: O(1)
MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.min.push(x);
  } else {
    let minimum = Math.min(x, this.min[this.min.length - 1]);
    this.min.push(minimum);
  }
  this.stack.push(x);
};

//Time: O(1)
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min.pop();
};

//Time: O(1)
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

//Time: O(1)
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};
