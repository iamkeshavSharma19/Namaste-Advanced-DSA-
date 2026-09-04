/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (arr) {
  let i = (j = maxWS = 0);
  let map = {};
  map[arr[j]] = 1;

  while (j < arr.length) {
    if (isWindowValid(map)) {
      maxWS = Math.max(maxWS, j - i);
      ++j;
      map[arr[j]] = map[arr[j]] ? map[arr[j]] + 1 : 1;
    } else {
      --map[arr[i]];
      ++i;
    }
  }

  return maxWS;
};

function isWindowValid(map) {
  let totalCount = 0;
  let onesCount = 0;
  Object.keys(map).forEach((key) => {
    totalCount += map[key];
    if (key === "1") {
      onesCount += map[key];
    }
  });

  return totalCount - onesCount <= 1;
}
