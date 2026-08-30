/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //? Day 0
  let i = 0;
  let map = {};
  let maxSlidingWindowSize = 0;

  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      //?duplicate character
      i = map[s[j]] + 1;
    }
    map[s[j]] = j;
    let currSlidingWindowSize = j - i + 1;
    maxSlidingWindowSize = Math.max(
      maxSlidingWindowSize,
      currSlidingWindowSize,
    );
  }

  return maxSlidingWindowSize;
};
