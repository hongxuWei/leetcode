/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (65.94%)
 * Likes:    1695
 * Dislikes: 0
 * Total Accepted:    557.9K
 * Total Submissions: 846K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 
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
var mergeTwoLists = function(l1, l2) {
  let l1Point = l1;
  let l2Point = l2;

  // 选一个链表作为根
  let root = new ListNode();
  let rootPoint = root;

  while (l1Point && l2Point) {
    rootPoint.next = new ListNode();
    rootPoint = rootPoint.next;

    const l1IsMin = l1Point.val < l2Point.val;
    rootPoint.val = l1IsMin ? l1Point.val : l2Point.val;

    if (l1IsMin) {
      l1Point = l1Point.next;
    } else {
      l2Point = l2Point.next;
    }
  }

  if (l1Point) {
    rootPoint.next = l1Point;
  }

  if (l2Point) {
    rootPoint.next = l2Point;
  }

  return root.next;
};
// @lc code=end

