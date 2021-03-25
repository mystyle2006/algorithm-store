// https://www.acmicpc.net/problem/11049

function solution(n, matrix) {
  const dp = Array.from(Array(n + 1), () => Array.from(Array(n + 1), () => 0));
  for (let d = 1; d < n; d += 1) {
    for (let start = 1; start + d <= n; start += 1) {
      const end = start + d;

      dp[start][end] = Infinity;
      console.log(dp);
      for (let mid = start; mid < end; mid += 1) {
        console.log(`dp[${start}][${end}] = Math.min(dp[${start}][${end}], dp[${start}][${mid}] + dp[${mid + 1}][${end}] + matrix[${start}][0] * matrix[${mid}][1] * matrix[${end}][1])`, Math.min(dp[start][end], dp[start][mid] + dp[mid + 1][end] + matrix[start][0] * matrix[mid][1] * matrix[end][1]));
        dp[start][end] = Math.min(dp[start][end], dp[start][mid] + dp[mid + 1][end] + matrix[start][0] * matrix[mid][1] * matrix[end][1]);
      }
    }
  }
  console.log(dp);
  return dp[1][n];
}

console.log(solution(3, [
  [],
  [5, 3],
  [3, 2],
  [2, 6],
]));
