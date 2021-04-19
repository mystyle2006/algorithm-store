const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = null;
let cnt = 0;
let input = [];
let dp = Array.from(Array(41), () => null);

function solution(n) {
  if (n === 0) {
    dp[0] = [1, 0];
    return 0;
  } else if (n === 1) {
    dp[1] = [0, 1];
    return 1;
  } else {
    if (!dp[n]) {
      solution(n - 1) + solution(n - 2)
      dp[n] = [dp[n - 1][0] + dp[n - 2][0], dp[n - 1][1] + dp[n - 2][1]];
    }
  }
}

rl.on("line", function(line) {
  if (!N) {
    N = +line;
  } else {
    solution(+line);
    input.push(+line);
    cnt += 1;
  }

  if (cnt === N) {
    rl.close();
  }
}).on("close", function() {
  input.forEach(i => {
    console.log(dp[i].join(' '))
  })
  process.exit(0);
});
