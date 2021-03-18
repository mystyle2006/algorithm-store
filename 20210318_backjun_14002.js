function solution(n, list) {
  const dp = Array.from(Array(n), (_, index) => 0);
  const set = [];
  let max = 0;
  for (let i = 0; i < n; i += 1) {
    dp[i] = 1;
    for (let j = 0; j < i; j += 1) {
      if (list[j] > list[i] || dp[i] > dp[j] + 1) continue;
      dp[i] = dp[j] + 1;
    }

    if (max < dp[i]) {
      set.push(i);
      max = dp[i];
    }
  }

  return {
    max,
    set,
    dp,
  };
}

console.log(solution(6, [10, 20, 10, 30, 20, 50]))