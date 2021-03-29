function solution(n, list) {
  // dp[i][j]: i번 계산했을 때 j값이 나올 수 있는 경수의 수
  // j - list[i] >= 0, dp[i][j - list[i]] += dp[i - 1][j]
  // j + list[i] <= 20, dp[i][j + list[i]] += dp[i - 1][j]
  // dp[1][8] = 1
  // dp[2][8] = 0
  // dp[2][5] = 1
  const dp = Array.from(Array(n + 1), () => Array.from(Array(21), () => 0));

  dp[1][list[0]] = 1;
  for (let i = 2; i <= n; i += 1) {
    for (let j = 0; j <= 20; j += 1) {
      if (j - list[i - 1] >= 0) dp[i][j - list[i - 1]] += dp[i - 1][j];
      if (j + list[i - 1] <= 20) dp[i][j + list[i - 1]] += dp[i - 1][j];
    }
  }

  console.log(dp);

  return dp[n - 1][list[n - 1]];
}

console.log(solution(11, [8, 3, 2, 4, 8, 7, 2, 4, 0, 8, 8]))