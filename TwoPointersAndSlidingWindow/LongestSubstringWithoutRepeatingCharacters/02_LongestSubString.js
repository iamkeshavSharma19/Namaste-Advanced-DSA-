/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (arr) {
  let i = 0;
  let map = {};
  let maxWS = 0;

  for (let j = 0; j < arr.length; j++) {
    if (map[arr[j]] !== undefined && map[arr[j]] >= i) {
      i = map[arr[j]] + 1;
    }
    map[arr[j]] = j;
    let currWS = j - i + 1;
    maxWS = Math.max(maxWS, currWS);
  }

  return maxWS;
};
