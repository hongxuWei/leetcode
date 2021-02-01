/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if (len < 2) return len; 
  var p1 = -1;
  var max = 0;
  var charMap = {};

  for (var i = 0; i < len; i++ ) {
    var char = s[i];
    var charIndedx = charMap[char];
    if (charIndedx === undefined) {
      charMap[char] = i;
    } else {
      if (charIndedx > p1) p1 = charIndedx;
      charMap[char] = i;
    }

    var nextMax = i - p1;
    if (nextMax > max) max = nextMax;
  }
  return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end