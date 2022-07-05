//https://leetcode.com/problems/letter-combinations-of-a-phone-number/~

var letterCombinations = function (digits) {
  let answer = [];
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 0) {
    return answer;
  }
  if (digits.length === 1) {
    return map[digits[0]];
  }
  if (digits.length === 2) {
    for (let i = 0; i < map[digits[0]].length; i++) {
      let string = "";
      string += map[digits[0]][i];
      for (let j = 0; j < map[digits[1]].length; j++) {
        string += map[digits[1]][j];
        answer.push(string);
        string = "" + map[digits[0]][i];
      }
    }
    return answer;
  }
  if (digits.length === 3) {
    for (let i = 0; i < map[digits[0]].length; i++) {
      let string = "";
      string += map[digits[0]][i];
      for (let j = 0; j < map[digits[1]].length; j++) {
        string += map[digits[1]][j];
        for (let k = 0; k < map[digits[2]].length; k++) {
          string += map[digits[2]][k];
          answer.push(string);
          string = "" + map[digits[0]][i] + map[digits[1]][j];
        }
        string = "" + map[digits[0]][i];
      }
    }
    return answer;
  }
  if (digits.length === 4) {
    for (let i = 0; i < map[digits[0]].length; i++) {
      let string = "";
      string += map[digits[0]][i];
      for (let j = 0; j < map[digits[1]].length; j++) {
        string += map[digits[1]][j];
        for (let k = 0; k < map[digits[2]].length; k++) {
          string += map[digits[2]][k];
          for (let l = 0; l < map[digits[3]].length; l++) {
            string += map[digits[3]][l];
            answer.push(string);
            string = "" + map[digits[0]][i] + map[digits[1]][j] + map[digits[2]][k];
          }
          string = "" + map[digits[0]][i] + map[digits[1]][j];
        }
        string = "" + map[digits[0]][i];
      }
    }
    return answer;
  }
};
