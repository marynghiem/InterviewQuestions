//https://leetcode.com/problems/bulls-and-cows/

//my solution, ask joseph how to do it better
var getHint = function (secret, guess) {
  let secretSplit = secret.split("");
  let guessSplit = guess.split("");
  let answer = "";
  let bullCount = 0;
  let cowCount = 0;
  let correctIndex = [];

  //count how many bulls
  for (let i = 0; i < secret.length; i++) {
    if (secretSplit[i] === guessSplit[i]) {
      bullCount++;
      correctIndex.push(i);
    }
    //remove bulls from array
  }
  for (let i = correctIndex.length - 1; i >= 0; i--) {
    secretSplit.splice(correctIndex[i], 1);
    guessSplit.splice(correctIndex[i], 1);
  }
  //check for cows
  let secretPointer = 0;
  let guessPointer = 0;

  while (secretPointer < secretSplit.length) {
    console.log(1);
    if (secretSplit[secretPointer] === guessSplit[guessPointer]) {
      cowCount++;
      secretSplit.splice(secretPointer, 1);
      guessSplit.splice(guessPointer, 1);
      secretPointer = 0;
      guessPointer = 0;
    } else {
      guessPointer++;
      if (guessPointer > guessSplit.length) {
        guessPointer = 0;
        secretPointer++;
      }
    }
  }

  answer = bullCount + "A" + cowCount + "B";
  return answer;
};

//correct answer
var getHint = function (secret, guess) {
  var map = {};
  var A = 0;
  var B = 0;
  for (var i = 0; i < 10; i++) map[i] = 0;
  for (i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) A++;
    else {
      map[secret[i]]++;
      B += map[secret[i]] <= 0 ? 1 : 0;
      map[guess[i]]--;
      B += map[guess[i]] >= 0 ? 1 : 0;
    }
  }
  return A + "A" + B + "B";
};
