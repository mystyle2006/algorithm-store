const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = null;
let list = [];
let cnt = 0;
let conference = 0;

function solution() {
  list.sort((a, b) => {
    if (a[1] === b[1]) {
      return +a[0] - +b[1];
    }

    return +a[1] - +b[1];
  });

  let endTime = list[0][1];
  conference += 1;

  for (let i = 1; i < N; i += 1) {
    if (+list[i][0] >= +endTime) {
      conference += 1;
      endTime = list[i][1];
    }
  }
}

rl.on("line", function(line) {
  if (!N) {
    N = +line;
  } else {
    list.push(line.split(' '));
    cnt += 1;
  }

  if (N === cnt) {
    rl.close();
  }
}).on("close", function() {
  solution();
  console.log(conference);
  process.exit(0);
});
