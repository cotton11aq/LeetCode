function main(input) {
  var args = input.split("\n");
  var n = parseInt(args[0], 10);
  var a = args[1].split(" ").map((n) => parseInt(n, 10));

  var sum = 0;
  while (a.every((n) => n % 2 === 0)) {
    a = a.map((n) => (n /= 2));
    sum++;
  }

  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));