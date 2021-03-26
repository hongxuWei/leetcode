/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.99%)
 * Likes:    2571
 * Dislikes: 0
 * Total Accepted:    600.1K
 * Total Submissions: 1.7M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNagative = x < 0;
  let number = isNagative ? Math.abs(x) : x;
  const MAX = isNagative ? Math.pow(2, 31) : Math.pow(2, 31) - 1;
  let result = 0;
  // 提取所有数
  while (number) {
    const lastN = number % 10;

    result *= 10;
    result += lastN;
    if (result > MAX) return 0;

    number -= lastN;
    number /= 10;
  }

  return isNagative ? -result : result;
};
// @lc code=end

