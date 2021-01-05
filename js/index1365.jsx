/**
 * @param {number[]} nums //[8, 1, 2, 2, 3]
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sorted = Array.from(nums).sort((a, b) => b - a);
  const map = new Map(
    sorted.map((num, index) => [num, nums.length - 1 - index])
  );
  return nums.map((num) => map.get(num));
};

// 元の配列は崩したくないから、
// numsから新たな配列を作成し、大きい順に並べる [8,3,2,2,1]
// new mapは、let myMap = new Map([  [1, 'one'],  [2, 'two'],  [3, 'three'],])のような["キー","値"]ものを作り出す
// 並び替えた配列のキーに値を追加していく ["8",4], ["3",3], ["2",1], ["2",1], ["1",0]
// numsからnumを受け取って、numに対応するvalueを取得する。[4,0,1,1,3]

//https://qiita.com/chihiro/items/9965cd7eca0380cf288c めちゃくちゃわかりやすい