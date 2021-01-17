function main(input) {
  input = input.trim().split("\n");
  var n = parseInt(input[0], 10);

  var list = [[0, 0, 0]];
  for (var i = 1; i <= n; i++) {
    var t = Number(input[i].split(" ")[0]);
    var x = Number(input[i].split(" ")[1]);
    var y = Number(input[i].split(" ")[2]);
    list.push([t, x, y]);
  }
  for (var i = 0; i < n; i++) {
    dt = list[i + 1][0] - list[i][0];
    dx = Math.abs(list[i + 1][1] - list[i][1]);
    dy = Math.abs(list[i + 1][2] - list[i][2]);

    dis = dx + dy;
    if (dis > dt || dt % 2 != dis % 2) {
      console.log("No");
      return false;
    }
  }
  console.log("Yes");
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
