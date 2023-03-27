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
