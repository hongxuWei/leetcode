/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (41.03%)
 * Likes:    1268
 * Dislikes: 0
 * Total Accepted:    245.9K
 * Total Submissions: 599.4K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 ）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ...,
 * nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如，
 * [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的索引，否则返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * nums 中的每个值都 独一无二
 * nums 肯定会在某个点上旋转
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (nums[mid] === target) return mid;
    // 有序
    if (nums[0] <= nums[mid]) {
      // 在 [0, mid) 里
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1;
      } else { // 在 (mid, len - 1] 里
        left = mid + 1;
      }
    } else { // 无序
      // 在 (mid, len - 1] 里
      if (nums[mid] < target && target <= nums[len - 1]) {
        left = mid + 1;
      } else { // [0, mid) 里
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end