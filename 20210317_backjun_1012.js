// link : https://www.acmicpc.net/problem/1012

function solution(M, N, cabbages) {
  const ground = Array.from(Array(M), () => Array.from(Array(N), () => 0));
  cabbages.forEach(([from, to]) => {
    ground[from][to] = 1;
  });

  const checked = Array.from(Array(M), () => Array.from(Array(N), () => false));
  let cnt = 0;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= M || j >= N || checked[i][j] || ground[i][j] === undefined || ground[i][j] === 0) return;
    else {
      checked[i][j] = true;
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  }

  for(let i = 0; i < M; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (!checked[i][j] && ground[i][j] === 1) {
        dfs(i, j);
        cnt += 1;
      }
    }
  }

  return cnt;
};

console.log(solution(10, 8, [
  [0, 0],
  [1, 0],
  [1, 1],
  [4, 2],
  [4, 3],
  [4, 5],
  [2, 4],
  [3, 4],
  [7, 4],
  [8, 4],
  [9, 4],
  [7, 5],
  [8, 5],
  [9, 5],
  [7, 6],
  [8, 6],
  [9, 6],
]));

console.log(solution(10, 10, [
  [5, 5],
]));

console.log(solution(5, 3, [
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [4, 0],
]));