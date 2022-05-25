//https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

//Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
//Output: 15
var shipWithinDays = function (weights, D) {
  //create another function inside
  const feasible = (capacity) => {
    let days = 1,
      total = 0;
    for (const weight of weights) {
      total += weight; //adding the weight to total
      if (total > capacity) {
        //if total is greater than capacity
        total = weight; //reassign the total to the current weight
        days += 1; //add a day
        if (days > D) {
          //if the amount of current days is greater than the days that are given
          return false; //return false;
        }
      }
    }
    return true; //else return true
  };

  //second part
  let left = Math.max(...weights), //left = biggest number in the array
    right = weights.reduce(function (a, b) {
      return a + b;
    }, 0); //right =  equal to the sum of the whole array
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    //32,21, 15, 12, 14

    if (feasible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
