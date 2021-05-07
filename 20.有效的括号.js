/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.03%)
 * Likes:    2379
 * Dislikes: 0
 * Total Accepted:    623.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "([)]"
 * 输出：false
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const left = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    const matched = left[char];
    if (matched) {
      stack.push(char);
    } else {
      const leftChar = stack.pop();
      if (char !== left[leftChar]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

