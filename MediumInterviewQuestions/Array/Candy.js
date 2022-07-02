//https://leetcode.com/problems/candy/

var candy = function (ratings) {
  let len = ratings.length; //initialize len as ratings length
  let forward = new Array(len); //create an array forward
  let backward = new Array(len); //create an array backward

  forward[0] = 1; //the first one is 1
  backward[len - 1] = 1; //the last one is 1
  for (var i = 1; i < len; i++) {
    //for loop
    //if the next rating is bigger than the one before
    //set forward to plus one
    if (ratings[i] > ratings[i - 1]) forward[i] = forward[i - 1] + 1;
    else forward[i] = 1; //else if the next rating is not bigger, set to 1
  }

  //another forward to do the same thing but backwards
  for (var i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) backward[i] = backward[i + 1] + 1;
    else backward[i] = 1;
  }
  //add up the bigger one between the two arrays
  var sum = 0;
  for (var i = 0; i < len; i++) {
    sum += Math.max(forward[i], backward[i]);
  }
  return sum;
};
