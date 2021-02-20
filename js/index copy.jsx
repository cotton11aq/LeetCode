function main(input) {
  let fa = input.split("\n");
  let args = fa[0];

  let hoge = [];
  let fuga = [];

  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      hoge.push(args[i]);
    } else {
      fuga.push(args[i]);
    }
  }

  hoge = hoge.join("");
  fuga = fuga.join("");

  const isUpperCase = (c) => {
    return /^[A-Z]+$/g.test(c);
  };

  const isUpperCase02 = (c) => {
    return /^[a-z]+$/g.test(c);
  };
  if (fuga === "" && isUpperCase02(hoge) == true) {
    console.log("Yes");
  } else if (isUpperCase02(hoge) == true && isUpperCase(fuga) == true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));