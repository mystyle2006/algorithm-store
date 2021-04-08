const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cnt = 0;
let N = null;
let M = null;
let list = [];

function solution() {
  let max = 0;

  for (let i = 0; i < N; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      for (let k = j + 1; k < N; k += 1) {
        const sum = list[i] + list[j] + list[k];
        if (sum <= M) max = Math.max(max, sum);
      }
    }
  }

  console.log(max);
}

rl.on("line", function(line) {
  if (!N && !M) {
    const [_N, _M] = line.split(' ');
    N = +_N;
    M = +_M;
  } else {
    list = line.split(' ').map(i => +i);
    cnt += 1;
  }

  if (cnt === 1) {
    rl.close();
  }
}).on("close", function() {
  solution();
  process.exit();
});
