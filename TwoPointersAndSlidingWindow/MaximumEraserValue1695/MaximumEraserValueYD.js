/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (arr) {
  let i = 0;
  let maxSum = 0;
  let currSum = 0;
  let map = {};

  for (let j = 0; j < arr.length; j++) {
    if (map[arr[j]] !== undefined && map[arr[j]] >= i) {
      let prevI = i;
      i = map[arr[j]] + 1;
      for (let k = i - 1; k >= prevI; k--) {
        currSum = currSum - arr[k];
      }
    }
    map[arr[j]] = j;
    currSum = currSum + arr[j];
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};
