/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.89%)
 * Likes:    3180
 * Dislikes: 0
 * Total Accepted:    471.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const slen = s.length;
  if (typeof s !== "string" || slen < 1) return "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < slen && s[left] === s[right]) {
        --left;
        ++right;
    }
    return {
      start: left + 1,
      end: right - 1,
      n: right - left - 2,
    };
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < slen; i++) {
    const rs1 = expandAroundCenter(i, i);
    const rs2 = expandAroundCenter(i, i + 1);
    if (rs1.n > end - start) {
      start = rs1.start;
      end = rs1.end;
    }
    if (rs2.n > end - start) {
      start = rs2.start;
      end = rs2.end;
    }
  }

  return s.substring(start, end + 1);
};
// @lc code=end
