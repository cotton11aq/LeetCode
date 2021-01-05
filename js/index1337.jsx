/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  return mat
    .map((row, idx) => [idx, row.reduce((pre, cur) => pre + cur)]) // [[0,2],[1,4],[2,1],[3,2],[4,5]]
    .sort((a, b) => a[1] - b[1]) // a[1] - b[1] = [0,2]の2 - [1,4]の4 つまり、小さい順 [[2,1],[0,2],[3,2],[1,4],[4,5]]
    .slice(0, k) // [[2,1],[0,2],[3,2]]
    .map((pair) => pair[0]); // [2,0,3]
};