//https://leetcode.com/problems/add-binary/submissions/
//Buggy solution because of the parseInt will not allow to add big numbers
var addBinary = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

const addBinary = (A, B) => {
  let sum = "";
  let i = A.length - 1;
  let j = B.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let a = A[i];
    let b = B[j];
    sum = String(a ^ b ^ carry) + sum;
    if (a === b && a !== String(carry)) {
      carry = Number(!carry);
    }
    i--;
    j--;
  }
  // if (carry){
  //   sum = String(carry) + sum;
  // }
  return carry ? String(carry) + sum : sum;
};

//truth table
/*
  XOR (^) - same: 0, diff: 1
  
  a b c = s c
  0 0 0 = 0 0
  0 0 1 = 1 0 <-flip carry
  1 0 0 = 1 0
  1 0 1 = 0 1
  1 1 0 = 0 1<- flip carry
  1 1 1 = 1 1
  */
