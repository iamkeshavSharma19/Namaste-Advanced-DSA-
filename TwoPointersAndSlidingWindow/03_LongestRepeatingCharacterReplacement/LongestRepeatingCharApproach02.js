/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = Array(26).fill(0);
  map[s[0].charCodeAt(0) - 65] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      ++j;
      ++map[s.charCodeAt(j) - 65];
    } else {
      --map[s.charCodeAt(i) - 65];
      ++i;
    }
  }

  return maxWindow;
};

var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    // 65 - A, 66 - B

    totalCount = totalCount + map[i];
    maxCount = Math.max(maxCount, map[i]);
  }

  return totalCount - maxCount <= k;
};

