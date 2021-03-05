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
  const dp = new Array(slen).fill(0).map(() => new Array(slen).fill(0));
  let ans = "";

  for (let len = 0; len < slen; ++len) {
    for (let i = 0; i + len < slen; ++i) {
      const j = i + len;
      // ans.length = len + 1
      const ansLen = len + 1;

      if (ansLen === 1) { // 比较 s[i] === s[j]
        dp[i][j] = true;
      } else if (ansLen === 2) { // 比较 s[i] === s[i + 1]
        dp[i][j] = (s[i] === s[j]);
      } else { // 比较 s[i] === s[j] 以及 dp[i + 1][j - 1] 是否是回文
        dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
      }

      if (dp[i][j] && ansLen > ans.length) { // 是回文且长度比现在结果长度大
        ans = s.substring(i, i + ansLen);
      }
    }
  }
  return ans;
};
// @lc code=end

