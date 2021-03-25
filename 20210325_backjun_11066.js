// https://www.acmicpc.net/problem/11066
// dp[i][j] = dp[i][k] + dp[k + 1][j] + sum[j]
function solution(n, list) {
  let sum = Array.from(Array(n), () => 0);
  let dp = Array.from(Array(n + 1), () => Array.from(Array(n + 1), () => 0));

  for (let i = 1; i <= n; i += 1) {
    sum[i] = sum[i - 1] + list[i - 1];
  }

  for (let d = 1; d < n; d += 1) {
    for (let start = 1; start + d <= n; start += 1) {
      let end = start + d;

      dp[start][end] = Infinity;
      for (let mid = start; mid < end; mid += 1) {
        try {
          dp[start][end] = Math.min(dp[start][end], dp[start][mid] + dp[mid + 1][end] + sum[end] - sum[start - 1])
        } catch (error) {}
      }
    }
  }

  console.log(sum);
  console.log(dp);

  return dp[1][n];
}

console.log(solution(4, [40, 30, 30, 50]));
console.log(solution(15, [1, 21, 3, 4, 5, 35, 5, 4, 3, 5, 98, 21, 14, 17, 32]));

// 2
// 4
// 40 30 30 50
// 15
// 1 21 3 4 5 35 5 4 3 5 98 21 14 17 32

// 40 { 30, 30, 50}
// 40 { 30 {30, 50}}
// 40 { { 30 30 } 50 }
// {40, 30 } { 30, 50}
// {40, 30, 30} {50}
