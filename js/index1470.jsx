/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let a = [];
  for (i = 0, j = 0; i < n, j < n; i++, j += 2) {
    a[j] = nums[i];
    a[j + 1] = nums[n + i];
  }
  return a;
};