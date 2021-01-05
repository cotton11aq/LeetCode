/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split('').reverse().join('').split(' ').reverse().join(' ');
  // s.split('')["L","e","t","'"...].reverse()["t","s","e","t",...].join('')"tset..."

  // // reverse string word by word
  // return s
  //   .split(" ") // ["Let's","take","LeetCode","contest"]
  //   .reduce((pre, cur) => {
  //     pre.push(cur.split("").reverse().join("")); //初期値[]に、Let'sを配列にして、["L","e","t","'","s"]、リバースして["s","'","t","e","L"]、文字列に戻して"s'teL" pushする。["s'teL"]
  //     return pre; //次の値を返す
  //   }, []) //初期値 配列の中に入れる ["s'teL","ekat","edoCteeL","tsetno"]
  //   .join(" "); // スペース区切りで文字列に変換 // "s'teL ekat edoCteeL tsetnoc"
};

// pre[].push(cur["Let's"].split("")["L","e","t","'","s"].reverse()["s","'","t","e","L"].join("")"s,'teL")を最後まで繰り返す。["s'teL","ekat","edoCteeL","tsetno"]
// join(" ")"s'teL ekat edoCteeL tsetnoc"