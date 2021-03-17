// https://www.acmicpc.net/problem/1303
// 적군
function solution(battle, X, Y) {
  const checked = Array.from(Array(X), () => Array.from(Array(Y), () => 0));
  let friendPower = 0;
  let enemyPower = 0;

  const dfs = (i, j, flag) => {
    if (i < 0 || j < 0 || i >= X || j >= Y || checked[i][j] || checked[i][j] === undefined || battle[i][j] !== flag) return 0;
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
        const military = dfs(i, j, battle[i][j]);
        if (battle[i][j] === 'W') {
          friendPower += Math.pow(military, 2);
        } else {
          enemyPower += Math.pow(military, 2);
        }
      }
    }
  }

  console.log(friendPower, enemyPower);
}

solution([
  ['W', 'B', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
], 5, 5);
