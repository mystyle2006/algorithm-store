// https://www.acmicpc.net/problem/1743\
// 음식물 피하기

function solution(trashLocation, X, Y) {
  const board = Array.from(Array(X), () => Array.from(Array(Y), () => 0));
  const checked = Array.from(Array(X), () => Array.from(Array(Y), () => 0));
  let maxTrash = 0;
  trashLocation.forEach(([from, to]) => {
    board[from - 1][to - 1] = 'T';
  });

  const dfs = (i, j, flag) => {
    if (i < 0 || j < 0 || i >= X || j >= Y || checked[i][j] || checked[i][j] === undefined || board[i][j] !== 'T') return 0;
    else {
      checked[i][j] = 1;
      const right = dfs(i + 1, j, flag);
      const bottom = dfs(i, j + 1, flag);
      const left = dfs(i - 1, j, flag);
      const top = dfs(i,j - 1, flag);
      return 1 + right + bottom + left + top;
    }
  };

  for(let i = 0; i < X; i += 1) {
    for (let j = 0; j < Y; j += 1) {
      if (!checked[i][j]) {
        maxTrash = Math.max(maxTrash, dfs(i, j));
      }
    }
  }

  return maxTrash;
}

console.log(solution([
  [3, 2],
  [2, 2],
  [3, 1],
  [2, 3],
  [1, 1],
], 3, 4));
