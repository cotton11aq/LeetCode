function main(input) {
  let args = input.split("\n");
  let n = parseInt(args[0], 10);
  let nums = args.slice(1, n + 1).map((n) => n.split(" "));
  let a = nums.map((n) => parseInt(n[0], 10));
  let b = nums.map((n) => parseInt(n[1], 10));

  let min = a[0] + b[0];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      min = Math.min(min, a[i] + b[j]);
    }
  }

  console.log(min);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
