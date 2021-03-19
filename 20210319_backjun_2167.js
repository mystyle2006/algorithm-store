// https://www.acmicpc.net/problem/2167
function solution(n, m, array, _case) {
  const dp = Array.from(Array(n), () => Array.from(Array(m), () => 0));
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (i === 0 && j === 0) {
        dp[i][j] = array[i][j];
      }

      if (j === 0 && i !== 0) {
        dp[i][0] = dp[i - 1][0] + array[i][0];
      }

      if (i === 0 && j !== 0) {
        dp[0][j] = dp[0][j - 1] + array[0][j];
      }

      if (i !== 0 && j !== 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + array[i][j];
      }
    }
  }

  let answer = [];
  _case
    .map(([i, j, x, y]) => [i - 1, j - 1, x - 1, y - 1])
    .forEach(([i, j, x, y]) => {
      if (i === 0 && j === 0) answer.push(dp[x][y]);
      if (i === 0 && j !== 0) answer.push(dp[x][y] - dp[x][j - 1]);
      if (i !== 0 && j === 0) answer.push(dp[x][y] - dp[i - 1][y]);
      if (i !== 0 && j !== 0) answer.push(dp[x - 1][y - 1] - dp[i - 1][y] - dp[x][j - 1] + dp[i - 1][j - 1]);
    });

  return answer;
}

console.log(solution(2, 3, [
  [1, 2, 4],
  [8 ,16, 32],
], [
  [1, 1, 2, 3],
  [1, 2, 1, 2],
  [1, 3, 2, 3],
]));
