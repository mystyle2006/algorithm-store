function solution(n, m, board) {
  const dp = Array.from(Array(n), () => Array.from(Array(m), () => 0));

  let max = 0;
  for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < m; j += 1) {
      if (board[i][j]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j -1], dp[i][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return Math.pow(max, 2);
}

console.log(solution(4, 4, [
  [0,1,0,0],
  [0,1,1,1],
  [1,1,1,0],
  [0,0,1,0],
]));
