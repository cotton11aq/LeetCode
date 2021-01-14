function main(input) {
  var args = input.split("\n");
  var c = args[0].split(" ").map((n) => parseInt(n, 10));
  var a = args[1].split(" ");

  var sum = 0;
  for (let i = 0; i < args[0].length; i++) {
    if (a[i] === "Alice") sum += c[i];
  }

  console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));