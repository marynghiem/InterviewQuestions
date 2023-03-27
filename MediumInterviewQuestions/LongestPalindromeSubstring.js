//incorrect answer because time limit was exceeded

var longestPalindrome = function (s) {
  let highestCount = 0;
  let hash = {};
  let arrOfCom = possibleCombinations(s);
  for (let i = 0; i < arrOfCom.length; i++) {
    if (isPalindrome(arrOfCom[i]) === true) {
      hash[arrOfCom[i]] = arrOfCom[i].length;
    }
  }

  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
};
let possibleCombinations = (str) => {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
};

var isPalindrome = function (s) {
  let newS = s;
  newS = newS.replace(/[^0-9a-zA-Z]/g, "");
  newS = newS.toLowerCase();
  let reversed = newS.split("").reverse().join("");
  if (newS === reversed) {
    return true;
  } else {
    return false;
  }
};

//correct solution

var longestPalindrome = function (s) {
  //condition that the string has to be longer than 2 letters
  if (s.length < 2) return s;
  //max is the final answer
  let max = "";
  for (let i = 0; i < s.length; i++) {
    //created a helper function
    let left = helper(i, i, s);
    let right = helper(i, i + 1, s);
    //this is the current max for this loop
    let currMax = left.length >= right.length ? left : right;
    //but if the current max is higher than the biggest max, replace it
    max = currMax.length > max.length ? currMax : max;
  }

  return max;
};

function helper(left, right, s) {
  let curr = "";
  //given the left, right and s, checking if the numbers are within limits and if it is a palidrome
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    curr = s.substring(left, right + 1);
    left -= 1;
    right += 1;
  }
  //returning the string that is a palidrome
  return curr;
}
