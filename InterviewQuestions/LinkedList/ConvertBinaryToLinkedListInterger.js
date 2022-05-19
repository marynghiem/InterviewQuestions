//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

//their solution
var getDecimalValue = function (head) {
  let num = head.val;
  while (head.next !== null) {
    num = num * 2 + head.next.val; //have to remember this when converting binary to whole numbers
    head = head.next;
  }
  return num;
};
