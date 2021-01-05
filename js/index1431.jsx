/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let hoge = Math.max(...candies);
  let fuga = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= hoge) {
      fuga.push(true);
    } else {
      fuga.push(false);
    }
  }
  return fuga;
};
