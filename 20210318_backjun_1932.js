function solution(n, board) {
  // dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + a[i][j]
  const dp = Array.from(Array(n), () => Array.from(Array(n), () => -1));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const leftValue = (i - 1) < 0 || (j - 1) < 0 ? 0 : dp[i - 1][j - 1];
      const rightValue = (i - 1) < 0 ? 0 : dp[i - 1][j];
      const current = board[i][j];
      dp[i][j] = Math.max(leftValue, rightValue) + current;
    }
  }

  return Math.max(...dp[n - 1]);
}

console.log(solution(5, [
  [7 , 0, 0, 0, 0],
  [3 ,8 , 0, 0, 0],
  [8 ,1 , 0, 0, 0],
  [2 ,7 ,4 ,4 , 0],
  [4 ,5 ,2 ,6 ,5],
]));