//https://leetcode.com/problems/jewels-and-stones/description/

var numJewelsInStones = function (jewels, stones) {
  let singleJewels = jewels.split("");
  let singleStones = stones.split("");
  let answer = 0;
  for (let i = 0; i < singleJewels.length; i++) {
    for (let j = 0; j < singleStones.length; j++) {
      if (singleJewels[i] === singleStones[j]) {
        answer++;
      }
    }
  }
  return answer;
};
