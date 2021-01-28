/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var n =  nums[i];
    var left = target - n;
    var mapIndex = map[left];
    if (typeof mapIndex !== "number") {
      map[n] = i;
    } else {
      return [mapIndex, i];
    }
  }
};
// @lc code=end

