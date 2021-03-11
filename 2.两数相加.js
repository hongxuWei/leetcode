/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var STEP = 10;
  var l1Point = l1;
  var l2Point = l2;
  var newList = new ListNode(0, null);
  var point = newList;
  var flag = false;

  while (l1Point || l2Point) {
    var l1Val = l1Point ? l1Point.val : 0;
    var l2Val = l2Point ? l2Point.val : 0;
    var total = l1Val + l2Val;
    if (flag) total += 1;

    flag = total >= STEP;
    point.val = flag ? total - STEP : total;

    if (l1Point) l1Point = l1Point.next;
    if (l2Point) l2Point = l2Point.next;

    point.next = new ListNode(0, null);
    if (l1Point || l2Point) {
      point = point.next;
    }
  }

  if (flag) {
    point.next.val = 1;
  } else {
    point.next = null;
  }

  return newList;
};
// @lc code=end