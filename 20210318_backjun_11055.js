function solution(n, list) {
  const dp = Array.from(Array(n), (_, index) => list[index]);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (dp[j] > list[i]) continue;
      dp[i] = Math.max(dp[j] + list[i], dp[i]);
    }
  }


  return Math.max(...dp);
}

console.log(solution(10, [1, 100, 2, 50, 60, 3, 5, 6, 7, 8]))