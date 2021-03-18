// https://www.acmicpc.net/problem/2606
function solution (N, complex) {
  const checked = Array.from(Array(N), () => Array.from(Array(N), () => false));
  const APARTMENT = 1;

  function dfs(i, j) {
    if (checked[i][j] || complex[i][j] !== APARTMENT) return 0;
    else {
      checked[i][j] = true;
      const left = i - 1 < 0 ? 0 : dfs(i - 1, j);
      const right = i + 1 >= N ? 0 : dfs(i + 1, j);
      const bottom = j + 1 >= N ? 0 : dfs(i, j + 1);
      const top = j - 1 < 0 ? 0 : dfs(i, j - 1);
      return 1 + left + right + bottom + top;
    }
  }

  const complexCount = [];

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (!checked[i][j] && complex[i][j] === APARTMENT) {
        complexCount.push(dfs(i, j));
      }
    }
  }

  return {
    count: complexCount.length,
    complexCount: complexCount.sort(),
  };
}

console.log(solution(7, [
  [0,1,1,0,1,0,0],
  [0,1,1,0,1,0,1],
  [1,1,1,0,1,0,1],
  [0,0,0,0,1,1,1],
  [0,1,0,0,0,0,0],
  [0,1,1,1,1,1,0],
  [0,1,1,1,0,0,0],
]));
