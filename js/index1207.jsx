/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      //
      obj[arr[i]] = 1; //obj = {1: 1, 2: 1}
    } else {
      obj[arr[i]]++; // obj = {1: 1, 2: 2}... 最終的にobj = {1: 3, 2: 2, 3: 1}
      // obj = {
      //   1: 3,
      //   2: 2,
      //   3: 1,
      // };
      //
      // obj = {
      //   1: 1,
      //   2: 1,
      // };
    }
  }

  return new Set(Object.values(obj)).size === Object.values(obj).length;
  // Object.values(obj) は()に入るオブジェクトを配列にして返す
  // [3, 2, 1] === [3, 2, 1]
  // [1] == [1, 1]だから、false!
};


// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */1
// var uniqueOccurrences = function (arr) {
//   let myMap = new Map();

//   for (let num of arr) {
//     if (myMap.has(num)) {
//       myMap.set(num, myMap.get(num) + 1);
//     } else {
//       myMap.set(num, 1);
//     }
//   }
//   // Mapは２次元配列
//   // {1:'1'}→{2:'1'}→{2:'2'}→{1:'2}→{1:'3'}→{3:'1'} 最終的に[[1, 3],[2, 2],[3, 1]] set()は重複した値を入れないため
//   // set()でキーとバリューを設定する　map.set(1, 3);

//   // Setは重複しないデータ（いろいろなもの）を配列に格納できる
//   // [1, 'one', function (){}, document.body] 
//   let mySet = new Set();
//   for (const val of myMap.values()) {
//     if (mySet.has(val)) return false; // 
//     mySet.add(val); // {3,2,1}
//   }

//   return true;
// };
