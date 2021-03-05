/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // O(log(m + n))
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  var m = nums1.length; // len 小的那个
  var n = nums2.length;
  var left = 0;
  var right = m;
  // median1：前一部分的最大值
  // median2：后一部分的最小值
  var median1 = 0;
  var median2 = 0;

  while (left <= right) {
    // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
    // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
    var i = ((left + right) / 2) ^ 0;
    var j = ((m + n + 1) / 2 - i) ^ 0;

    // nums_im1, nums_i, nums_jm1, nums_j 分别表示 nums1[i-1], nums1[i], nums2[j-1], nums2[j]
    var nums_im1 = (i == 0 ? -Infinity : nums1[i - 1]);
    var nums_i = (i == m ? Infinity : nums1[i]);
    var nums_jm1 = (j == 0 ? -Infinity : nums2[j - 1]);
    var nums_j = (j == n ? Infinity : nums2[j]);

    if (nums_im1 <= nums_j) {
      median1 = Math.max(nums_im1, nums_jm1);
      median2 = Math.min(nums_i, nums_j);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
};
// @lc code=end