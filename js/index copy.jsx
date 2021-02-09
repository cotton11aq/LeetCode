const { func } = require("prop-types");

function main(input) {
  var args = input.split(" ");
  var n = parseInt(args[0], 10);
  var a = parseInt(args[1], 10);
  var b = parseInt(args[2], 10);

  $(function () {
    $("#q10").click(function () {
      $(this).toggleClass("bbb");
    });
  });
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));