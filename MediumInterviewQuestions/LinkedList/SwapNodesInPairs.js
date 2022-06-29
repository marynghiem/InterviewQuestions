//https://leetcode.com/problems/swap-nodes-in-pairs/

//Input: head = [1,2,3,4]
//Output: [2,1,4,3]

var swapPairs = function (head) {
  let dummy = new ListNode(); // start a new listnode
  dummy.next = head; // let the second value be the head

  let prev = dummy; //start with a prev

  while (head && head.next) {
    let n1 = head; //set first node
    let n2 = head.next; //set second node

    //swap
    prev.next = n2; //set the beginning as the n2
    n1.next = n2.next; //make the next number in n1 be the next number for n2 (n1 skips n2)
    n2.next = n1; //make n2, n1

    //assign
    prev = n1; //make prev n1
    head = n1.next; // move head next
  }
  return dummy.next; //return answer
};
