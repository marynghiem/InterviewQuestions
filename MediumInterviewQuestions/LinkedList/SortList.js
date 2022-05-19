//https://leetcode.com/problems/sort-list/submissions/

//First solution
//cheat method
var sortList = function (head) {
  let nums = [];
  let current = head;
  while (current) {
    nums.push(current.val);
    current = current.next;
  }
  nums.sort((a, b) => a - b);
  console.log(nums);
  let newList = new ListNode(0);
  let result = newList;

  for (let i = 0; i < nums.length; i++) {
    newList.next = new ListNode(nums[i]);
    newList = newList.next;
  }
  return result.next;
};

//correct solution
var sortList = function (head) {
  //base case for recursion
  if (head === null || head.next === null) return head;
  //getting the middle by calling a seperate function called getMid
  let mid = getMid(head);
  //the head of the middle
  let nhead = mid.next;
  //making it into two seperate linked list
  mid.next = null;
  //recursion
  let l1 = sortList(head);
  let l2 = sortList(nhead);
  //called another function
  return merge(l1, l2);
};

//function to get the middle
function getMid(head) {
  //slow and fast method
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

//function to merge two list
function merge(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  //new ListNode was created by leetcode, would not work outside of leetcode.
  let dummy = new ListNode(-1);
  let tail = dummy;
  //starting with while loop
  while (l1 != null && l2 != null) {
    //if the value of linked list 1 is less than value of linked list 2
    if (l1.val <= l2.val) {
      //add on linked list 1 onto to tail
      tail.next = l1;
      //increment tail
      tail = tail.next;
      //increment linked list val
      l1 = l1.next;
    } else {
      //same thing with the second linked list if this val is smaller
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next;
    }
  }
  //add on the remaining
  if (l1 === null) tail.next = l2;
  else tail.next = l1;
  return dummy.next;
}

//second attempt at sort list
var sortList = function (head) {
  if ((head = null)) {
    // this should be double equals not single equal bc single is assignment
    // forgot || head.next == null
    return head;
  }
  let middle = getMiddle(head);
  let nMiddle = middle.next;
  middle.next = null;
  let l1 = sortList(head);
  let l2 = sortList(nMiddle);
  return Merge(l1, l2);
};

const getMiddle = (head) => {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    //fast.next !== null && fast.next.next !== null
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const Merge = (l1, l2) => {
  //do not capitalize names of functions
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let tail = new listNode(0);
  let dummy = tail;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      //tail =tail.next;
      l1 = l1.next;
    } else {
      tail.next = l2;
      //tail = tail.next;
      l2 = l2.next;
    }
  }
  if (l1 === null) {
    tail.next = l2;
  } else if (l2 === null) {
    tail.next = l1;
  }
  return dummy.next;
};
