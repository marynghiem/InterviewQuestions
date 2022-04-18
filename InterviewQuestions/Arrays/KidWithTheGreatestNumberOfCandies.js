//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  let answer = [];
  let maxLength = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxLength) {
      maxLength = candies[i];
    }
  }
  for (let j = 0; j < candies.length; j++) {
    let moreCandies = candies[j] + extraCandies;
    console.log(moreCandies);
    if (moreCandies >= maxLength) {
      answer.push(true);
    } else if (moreCandies < maxLength) {
      answer.push(false);
    }
  }

  return answer;
};
