//https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/

//bloomDay = [1,10,3,10,2], m = 3, k = 1
//output: 3
var minDays = function (bloomDay, m, k) {
  //check if the bloom day length was long enough
  if (bloomDay.length < m * k) {
    return -1;
  }

  const feasible = (days) => {
    let bouquet = 0;
    let flowers = 0;

    for (let i = 0; i < bloomDay.length; i++) {
      //loop through the length of binary search
      if (bloomDay[i] > days) {
        //if bloom at i is greater than the middle of if bloom day
        flowers = i + 1; // reset start of current bouquet
      } else {
        // flower is in bloom and is usable
        if (i - flowers + 1 == k) {
          bouquet++;
          flowers = i + 1;
        }
      }
    }
    return bouquet >= m;
  };

  //regular binary search
  let left = 1,
    right = Math.max(...bloomDay);
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    //mid = 5,3,2
    console.log(feasible(mid));
    if (feasible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
