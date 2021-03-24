// https://www.acmicpc.net/problem/11722
// dp[i] = A[i - 1] > A[i] ? dp[i - 1] + 1 : dp[i - 1]
function solution(A) {
  let dp = Array.from(Array(A.length), () => 0);
  dp[0] = 1;

  for (let i = 1; i < A.length; i += 1) {
    dp[i] = A[i - 1] > A[i] ? dp[i - 1] + 1 : dp[i - 1];
  }

  return Math.max(...dp);
}

console.log(solution([10, 30, 10, 20, 20, 10]))
