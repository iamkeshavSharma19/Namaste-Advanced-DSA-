/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (arr, k) {
  //? we will write it's code later on
  let i = 0;
  let j = 0;
  let map = {};
  map[arr[j]] = 1;
  let maxWS = 0;

  while (j < arr.length) {
    if (isWindowValid(map, k)) {
      let currWS = j - i + 1;
      maxWS = Math.max(currWS, maxWS);
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
  let maxCount = 0;
  Object.keys(map).forEach((key) => {
    totalCount = totalCount + map[key];
    maxCount = Math.max(map[key], maxCount);
  });
  return totalCount - maxCount <= k ? true : false;
}
