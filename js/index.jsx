function main(input) {
  const args = input.split("\n");
  const a = parseInt(args[0], 10);
  const b = parseInt(args[1], 10);

  // let sum = 0;
  // for (let i = 0; i < 6; i++) {
  //   if (b[i] == "Alice") {
  //     sum += a[i];
  //   }
  // }

  console.log(a);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
