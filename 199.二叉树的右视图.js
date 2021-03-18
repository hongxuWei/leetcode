/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (65.03%)
 * Likes:    427
 * Dislikes: 0
 * Total Accepted:    91.7K
 * Total Submissions: 141.1K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 示例:
 * 
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 * 
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result = [];
  if (root === null) return result;

  result.push(root.val);

  let stack = [root];
  let nextStack = [];

  while (stack.length > 0) {
    const current = stack.shift();
    if (current.left) nextStack.push(current.left);
    if (current.right) nextStack.push(current.right);
    if (stack.length === 0) {
      const nextLen = nextStack.length;
      if (nextLen > 0) {
        result.push(nextStack[nextLen - 1].val);
        stack = nextStack;
        nextStack = [];
      }
    }
  }
  return result;
};
// @lc code=end

