/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (40.77%)
 * Likes:    1053
 * Dislikes: 0
 * Total Accepted:    125.5K
 * Total Submissions: 307.3K
 * Testcase Example:  '[1,2,0]'
 *
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 
 * 
 * 
 * 进阶：你可以实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,0]
 * 输出：3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -2^31 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length;
  // 交换位置，角标就是对应的数字 + 1; 如 idx = 0 -> nums[i] = 1;
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  // 遍历找到空置的
  for(let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return len + 1;
};
// @lc code=end

