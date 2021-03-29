function solution(n, k, list) {
  // dp[i][j] = i번째까지의 아이템 j 무게 까지 가치
  const dp = Array.from(Array(n + 1), () => Array.from(Array(k + 1), () => 0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      const weight = list[i-1][0];
      const value = list[i-1][1];

      if (weight > j) dp[i][j] = dp[i - 1][j]; // 넣을 수 없을 경우 직전의 가치와 같다
      else {
        dp[i][j] = Math.max(dp[i - 1][j], value + dp[i - 1][j - weight]);
        //넣을 수 있을 경우 직전의 가치 vs 넣으려는 물건의 가치에 넣으려는 물건의 무게를 뺏을 때의 총가치를 더한 값
      }
    }
  }

  return dp[n][k];
}

console.log(solution(4, 7, [
  [6, 13],
  [4, 8],
  [3, 6],
  [5, 12],
]))