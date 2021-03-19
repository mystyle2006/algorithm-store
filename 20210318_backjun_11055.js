function solution(n, list) {
  const dp = Array.from(Array(n), (_, index) => list[index]);
  const _dp = Array.from(Array(n), (_, index) => Array.from(Array()));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (list[j] > list[i]) continue;

      _dp[i].push(j);
      dp[i] = Math.max(dp[j] + list[i], dp[i]);
    }
    _dp[i].push(i);
  }

  const max = Math.max(...dp);
  const maxIndex = dp.findIndex(v => v === max);
  return {
    max: Math.max(...dp),
    set: _dp[maxIndex],
  };
}

console.log(solution(10, [1, 100, 2, 50, 60, 3, 5, 6, 7, 8]))
