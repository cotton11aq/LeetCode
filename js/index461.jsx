/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y)
    .toString(2)
    .split("")
    .filter((n) => n == 1).length;
};

// ハミング距離=要素（文字列、2進数、配列など）間の同じ位置での不一致の数

// 20および26は、実施例
// 1 0 1 0 0
// 1 1 0 1 0
// ↥↥↥ミスマッチ3

// ハミング距離は3です

// 以下のコードは次のこと
// を行います。1。-不一致の数を取得するためのXOR1
// 0 1 0 0 = 20
// 1 1 0 1 0 = 26
// XOR = 14

// toString（2）は、2進表現の数値を変換します '0 1 1 1 0'
// split（ ""）は配列を作成します['0'、 '1'、 '1'、 '1'、 '0']　引数に長さ0の文字列("")を指定した場合は、空の配列、つまり要素とデータのない配列を返します。
// filter（n => n == 1）は、前の配列['1'、 '1'、 '1']にあるものだけの配列を返します。
// 最後に、その配列の長さを返します
// var hammingDistance = function(x, y) {
//     return  (x^y).toString(2).split("").filter(n => n == 1).length
// };
