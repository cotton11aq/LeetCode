function main(input) {
  var args = input.split("\n");
  var n = parseInt(args[0], 10);
  var d = args.slice(1, args.length - 1).map((n) => parseInt(n, 10)).sort((a, b) => a - b);

  var sum = 1;
  for (let i = 1; i < n; i++) {
    if (d[i - 1] < d[i]) sum++;
  }
  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));