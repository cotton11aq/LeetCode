// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortArrayByParity = function (A) {
//   let hoge = [];
//   A.forEach((a) => (a % 2 == 0 ? hoge.unshift(a) : hoge.push(a)));
//   return hoge;
// };

// var sortArrayByParity = function (A) {
//   [...A.filter((a) => a % 2 == 0), ...A.filter((a) => a % 2 != 0)];
// };