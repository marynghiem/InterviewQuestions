/*
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 


*/

// time O(n^2) space O(1)
var sumOddLengthSubarrays = function (arr) {
  let oddLength = 1;
  let sum = 0;

  while (arr.length >= oddLength) {
    for (let i = 0; i < arr.length - oddLength + 1; i++) {
      for (let j = i; j < oddLength + i; j++) {
        sum += arr[j];
      }
    }

    oddLength += 2;
  }

  return sum;
};
// Using Sliding Window
// time O(N^2) space O(N)
const sumOddLengthSubarrays = (arr) => {
  //start at an odd number and only increment by 2
  let oddLength = 1;
  //answer that is going to be returned
  let sum = 0;

  //while loop
  while (oddLength <= arr.length) {
    //current sum
    let currentSum = 0;
    //adding all the numbers up to current odd index
    for (let i = 0; i < oddLength; i++) {
      currentSum += arr[i];
    }
    //add the current sum to main sum
    sum += currentSum;

    //sliding window, where you add the next number and subtract the next.
    for (let i = oddLength; i < arr.length; i++) {
      currentSum = currentSum + arr[i] - arr[i - oddLength];
      sum += currentSum;
    }
    //only increment by 2
    oddLength += 2;
  }
  // return sum
  return sum;
};
