const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = null;
let M = null;
let check = [];
let list = [];
let memo = new Set;

function solution(cnt) {
  if (cnt === M) {
    let temp = [];
    for (let i = 0; i < M; i++) {
      temp.push(list[i]);
    }

    memo.add(temp.sort((a, b) => a - b).join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!check[i]) {
      check[i] = true;
      list[cnt] = i;
      solution(cnt + 1);
      check[i] = false;
    }
  }
}

rl.on("line", function(line) {
  const [_N, _M] = line.split(' ');
  N = +_N;
  M = +_M;
  check = Array.from(Array(N), () => false);
  list = Array.from(Array(N), () => 0);

  rl.close();
}).on("close", function() {
  solution(0);
  memo.forEach(i => {
    console.log(i);
  });
  process.exit(0);
});
