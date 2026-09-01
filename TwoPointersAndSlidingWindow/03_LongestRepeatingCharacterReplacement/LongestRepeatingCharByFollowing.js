/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = {};
  map[s[0]] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      ++j;
      map[s[j]] = map[s[j]] ? ++map[s[j]] : 1;
    } else {
      --map[s[i]];
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
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      totalCount = totalCount + map[char];
      maxCount = Math.max(maxCount, map[char]);
    }
  }

  return totalCount - maxCount <= k;
};
