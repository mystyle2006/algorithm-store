function solution(n, m, lengs) {
  // dp[i][j] : 공책의 i열(i위치)에 j번째 순서의 사람 이름을 쓸 때 최솟값
  const dp = Array.from(Array(1000), () => Array.from(Array(1000), () => -1));

  function func(col, cur) {
    if (cur === n) return 0;
    if (dp[col][cur] !== -1) return dp[col][cur];

    console.log(`dp[${col}][${cur}] = func(${lengs[cur] + 1}, ${cur + 1}) + Math.pow(${m - col + 1}, 2)`)
    dp[col][cur] = func(lengs[cur] + 1, cur + 1) + Math.pow(m - col + 1, 2);
    if (col + lengs[cur] <= m) {
      dp[col][cur] = Math.min(dp[col][cur], func(col + lengs[cur] + 1, cur + 1));
    }

    return dp[col][cur];
  }

  return func(lengs[0] + 1, 1);
}

console.log(solution(11, 20, [
  7,
  4,
  2,
  3,
  2,
  5,
  1,
  12,
  7,
  5,
  6,
]));