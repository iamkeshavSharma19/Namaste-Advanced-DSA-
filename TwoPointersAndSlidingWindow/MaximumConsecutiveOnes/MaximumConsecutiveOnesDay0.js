/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (arr, k) {
  let i = (j = maxWS = 0);
  let map = {};
  map[arr[j]] = 1;

  while (j < arr.length) {
    if (isWindowValid(map, k)) {
      maxWS = Math.max(maxWS, j - i + 1);
      ++j;
      map[arr[j]] = map[arr[j]] ? map[arr[j]] + 1 : 1;
    } else {
      --map[arr[i]];
      ++i;
    }
  }
  return maxWS;
};

function isWindowValid(map, k) {
  let totalCount = 0;
  let onesCount = 0;
  Object.keys(map).forEach((key) => {
    totalCount += map[key];
    if (key === "1") {
      onesCount += map[key];
    }
  });
  return totalCount - onesCount <= k;
}
