//https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function (sentence) {
  let answer = {};
  for (const char of sentence) {
    answer[char] = ++answer[char] || 1; //add one to hashmap or if there is no value, make it 1
  }
  if (Object.entries(answer).length < 26) {
    //check if the hashmap length is less that 26 letters
    return false;
  } else {
    return true;
  }
};
