function Main(input) {
  let args = input.split("\n");
  let n = parseInt(args[0], 10);
  let num = args.slice(1, n + 1).map((n) => n.split(" "));
  let a = num.map((n) => parseInt(n[0], 10));
  let b = num.map((n) => parseInt(n[1], 10));

  let min = a[0] + b[0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let summin = 0;
      if (i === j) {
        summin = a[i] + b[j];
      } else {
        summin = Math.max(a[i], b[j]);
      }
      min = Math.min(min, summin);
    }
  }

  console.log(min);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
