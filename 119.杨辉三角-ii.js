/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (65.13%)
 * Likes:    279
 * Dislikes: 0
 * Total Accepted:    112.1K
 * Total Submissions: 171.9K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = new Array(rowIndex + 1);

  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0) {
      result[i] = 1;
      continue;
    }
    let prev = 1;
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[j] = 1;
      } else {
        const temp = prev;
        prev = result[j];
        result[j] = temp + result[j];
      }
    }
  }
  return result;
};
// @lc code=end

