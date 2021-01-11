function main(input) {
  // 数字とスペースのみの場合
  // a b
  // (ex)
  // 3 4
  const args = input.split(" ");
  const a = parseInt(args[0], 10); //
  const b = parseInt(args[1], 10); //

  console.log(args); //  [ '3', '4' ]
  console.log(a); // 3
  console.log(b); // 4

  // NとA1~Anの場合
  // N
  // A1 A2 A3 ... An
  // (ex)
  // 4
  // 2 1 4 8
  const args = input.split("\n");
  const a = parseInt(args[0], 10);
  const b = args[1].split(" ").map((n) => parseInt(n, 10));
  console.log(args); //  [ '4', '2 1 4 8' ]
  console.log(a); // 4
  console.log(b); // [ 2, 1, 4, 8 ]

  // 縦に並んだ物の場合
  // A
  // B
  // C
  // X
  // (ex)
  // 5
  // 1
  // 0
  // 150
  const args = input.split("\n");
  const A = parseInt(args[0], 10);
  const B = parseInt(args[1], 10);
  const C = parseInt(args[2], 10);
  const X = parseInt(args[3], 10);
  console.log(A); // 5
  console.log(B); // 1
  console.log(C); // 0
  console.log(X); // 150

  // 縦に並んだ物の場合（N個）
  // N
  // a1
  // an
  // (ex)
  // 4
  // 10
  // 8
  // 8
  // 6
  const args = input.split("\n");
  const N = args[0];
  const nums = args.slice(1, args.length);
  console.log(args); // ["4", "10", "8", "8", "6"]
  console.log(N); // 4
  console.log(nums); // ["10", "8", "8", "6"]
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
