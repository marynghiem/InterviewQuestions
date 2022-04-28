//https://leetcode.com/problems/shuffle-string/

var restoreString = function (s, indices) {
  let lettersArr = s.split("");
  let answer = [];
  for (let i = 0; i < indices.length; i++) {
    answer.push(lettersArr[indices.indexOf(i)]); // tells me the index of indices
  }
  return answer.join("");
};
