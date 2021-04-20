/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (70.41%)
 * Likes:    480
 * Dislikes: 0
 * Total Accepted:    165.2K
 * Total Submissions: 233.9K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  const result = new Array(numRows);
  result[0] = [1];
  for (let i = 1; i < numRows; i++) {
    const currentLayout = new Array(i + 1);
    const prevLayout = result[i - 1];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        currentLayout[j] = 1;
        continue;
      }
      currentLayout[j] = prevLayout[j - 1] + prevLayout[j];
    }
    result[i] = currentLayout;
  }
  return result;
};
// @lc code=end

