const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = null;
let M = null;
let start = null;
let cnt = 0;
let node = [];
let checked = [];
let result = [];

function dfs(current) {
  if (checked[current]) return;
  else {
    checked[current] = true;
    result.push(current);

    node[current].forEach(value => {
      dfs(value);
    });
  }
}

function bfs(current) {
  let q = [current];
  while(q.length) {
    const c = q.shift();
    if (checked[c]) continue;
    checked[c] = true;
    result.push(c);

    node[c].forEach(value => {
      q.push(value);
    });
  }
}

rl.on("line", function(line) {
  if (!N && !M && !start) {
    const [_N, _M, _start] = line.split(' ');
    N = +_N;
    M = +_M;
    start = +_start;
  } else {
    node.push(line.split(' '));
    cnt += 1;
  }

  if (cnt === M) {
    rl.close();
  }
}).on("close", function() {
  node = node.reduce((acc, cur) => {
    const [start, end] = cur;
    return {
      ...acc,
      [+start]: acc[start] ? new Set([...acc[start].add(+end)].sort()) : new Set([+end]),
      [+end]: acc[end] ? new Set([...acc[end].add(+start)].sort()) : new Set([+start]),
    }
  }, {});

  checked = Array.from(Array(N + 1), () => false);
  result = [];
  dfs(start);
  console.log(result.join(' '));

  checked = Array.from(Array(N + 1), () => false);
  result = [];
  bfs(start);
  console.log(result.join(' '));
  process.exit(0);
});
