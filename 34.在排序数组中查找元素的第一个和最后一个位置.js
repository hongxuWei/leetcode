/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.35%)
 * Likes:    961
 * Dislikes: 0
 * Total Accepted:    240.4K
 * Total Submissions: 567K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 * 
 * 1,2,3,4,5,6   2
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const len = nums.length;
  const NOT_FOUND = -1;
  if (len === 0) return [NOT_FOUND, NOT_FOUND];
  if (len === 1) return nums[0] === target ? [0, 0] : [NOT_FOUND, NOT_FOUND];
  let left = 0;
  let right = len -1;

  const expends = (idx) => {
    let tLeft = idx;
    let tRight = idx;
    while (tLeft > 0 && nums[tLeft - 1] === target) {
      tLeft--;
    }
    while (tRight < len - 1 && nums[tRight + 1] === target) {
      tRight++;
    }
    return [tLeft, tRight];
  }

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    // 在 [0, mid) 里
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) { // 在 (mid, len - 1] 里
      left = mid + 1;
    } else { // 找到了 target 开始向外扩展边界
      return expends(mid);
    }
  }
  return [NOT_FOUND, NOT_FOUND];
};
// @lc code=end

