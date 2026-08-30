/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //?By Following
  let i = (j = 0);
  let map = {};
  let maxWs = 0;
  for (j = 0; j < s.length; j++) {
    // is my element there in the map
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }
    map[s[j]] = j;
    currWs = j - i + 1;
    maxWs = Math.max(maxWs, currWs);
  }

  return maxWs;
};
