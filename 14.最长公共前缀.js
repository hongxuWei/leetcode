/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (39.26%)
 * Likes:    1495
 * Dislikes: 0
 * Total Accepted:    464.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * strs[i] 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = strs.length;
  let base = strs[0] || "";

  for (let i = 1; i < len; i++) {
    const str = strs[i];
    const strLen = str.length;
    const matchLen = Math.min(strLen, base);
    let prefixLen = 0;

    for (let j = 0; j < strLen; j++) {
      const matchChar = base.charAt(j);
      const sChar = str.charAt(j);
      if (matchChar !== sChar) {
        break;
      } else {
        prefixLen++;
      }
    }

    if (prefixLen < base.length) {
      base = base.substr(0, prefixLen);
    }
  }
  return base;
};
// @lc code=end

