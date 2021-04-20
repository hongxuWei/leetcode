/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (67.25%)
 * Likes:    741
 * Dislikes: 0
 * Total Accepted:    142.2K
 * Total Submissions: 211.1K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1
 * 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * 输出：11
 * 解释：如下面简图所示：
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：triangle = [[-10]]
 * 输出：-10
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const height = triangle.length;
  if (height === 0) return 0;
  let pathCost = triangle[0];

  for (let i = 1; i < height; i++) {
    // 当前层级花费
    const currentLayoutCost = triangle[i];
    const layoutLen = currentLayoutCost.length;
    for (let j = 0; j < layoutLen; j++) {
      // 最左
      if (j === 0) {
        currentLayoutCost[j] += pathCost[0];
        continue;
      }
      // 最右
      if (j === layoutLen - 1) {
        currentLayoutCost[j] += pathCost[pathCost.length - 1];
        continue;
      }
      // 中间的
      currentLayoutCost[j] += Math.min(pathCost[j - 1], pathCost[j]);
    }
    pathCost = currentLayoutCost;
  }
  return Math.min.apply(this, pathCost)
};
// @lc code=end

