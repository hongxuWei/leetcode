/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (36.63%)
 * Likes:    1033
 * Dislikes: 0
 * Total Accepted:    149.8K
 * Total Submissions: 408.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 27852
 * 28257
 * 154321
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length;
  if (len < 2) return nums;
  function reverse(left, right = len - 1) {
    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
  let i = len - 1;
  let j = len - 1;

  // 找到非升序 idx
  while (i) {
    if (nums[i] > nums[i - 1]) {
      break;
    }
    i--;
  }
  // 置换数字
  while (j > i - 1) {
    if (nums[j] > nums[i - 1]) {
      const temp = nums[j];
      nums[j] = nums[i - 1];
      nums[i - 1] = temp;
      break;
    }
    j--;
  }

  reverse(i);
  return nums;
};
// @lc code=end

