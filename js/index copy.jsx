function main(input) {
  var args = input.split("\n").map((n) => n.split(" "));
  var n = args[0][0];
  var x = args[0][1];
  var v = args.slice(1, n + 1).map((n) => parseInt(n[0], 10));
  var p = args.slice(1, n + 1).map((n) => parseInt(n[1], 10));
  
  console.log(args);
  console.log(n);
  console.log(x);
  console.log(v);
  console.log(p);

  var sum = 0;
  var count = 0;
  var bool = false;
  for (let i = 0; i < n; i++) {
    if (sum <= x) {
      sum += v[i] * (p[i] / 100);
      count++;
    } else {
      break;
    }
  }
  if (sum > x) {
    console.log(count);
  } else {
    console.log(-1);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
