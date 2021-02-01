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
var findMedianSortedArrays = function(nums1, nums2) {
  // O(m + n)
  var len1 = nums1.length;
  var len2 = nums2.length;
  var total = len1 + len2;
  var arrs = [];

  while (nums1.length || nums2.length) {
    if (nums1[0] === undefined) {
      arrs.push(nums2.shift());
      continue;
    }
    if (nums2[0] === undefined) {
      arrs.push(nums1.shift());
      continue;
    }

    if (nums1[0] > nums2[0]) {
      arrs.push(nums2.shift());
    } else {
      arrs.push(nums1.shift());
    }
  }

  if (total % 2 === 0) {
    var half1 = arrs[total/2 - 1];
    var half2 = arrs[total/2];
    return (half1 + half2) / 2;
  } else {
    return arrs[(total - 1) / 2];
  }
};
// @lc code=end

