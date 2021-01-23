function main(input) {
  var args = input.split("\n");
  var n = parseInt(args[0], 10);
  var a = args[1].split(" ").map((n) => parseInt(n, 10));

  var hoge = a.sort((a, b) => a - b);

  var ans = 0;
  for (let i = 0; i < n; i++) {
    var sum = 0;
    for (let j = 0; j < n; j++) {
      if (a[i] <= a[j]) {
        sum += a[i];
      }
    }
    ans = Math.max(ans, sum);
  }
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
