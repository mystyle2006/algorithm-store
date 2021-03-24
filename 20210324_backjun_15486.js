// https://www.acmicpc.net/problem/15486

function solution(n, table) {
  let dp = Array.from(Array(n), () => 0);
  function recur(_d) {
    if (dp[_d]) {
      return dp[_d];
    }
    if (_d > n) return 0;
    const [t, p] = table[_d - 1];
    const b1 = _d + t <= n + 1 ? p + recur(_d + t) : 0;
    const b2 = recur(_d + 1);
    dp[_d] = Math.max(b1, b2);

    return Math.max(b1, b2);
  }

  const max = recur(1);
  return max;
}

function solution2(n, table) {
  let dp = Array.from(Array(n + 100), () => 0);
  let max = 0;
  for (let i = 1; i <= n + 1; i += 1) {
    max = Math.max(max, dp[i]);
    if (i > n) break;
    if ((i + table[i - 1][0]) <= n + 1) {
      dp[i + table[i - 1][0]] = Math.max(dp[i + table[i - 1][0]], max + table[i - 1][1]);
    }
  }
  return max;
}

console.log(solution2(7, [
  [3, 10],
  [5, 20],
  [1, 10],
  [1, 20],
  [2, 15],
  [4, 40],
  [2, 200],
]));

console.log(solution2(10, [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
]));

console.log(solution2(10, [
  [5, 10],
  [5, 9],
  [5, 8],
  [5, 7],
  [5, 6],
  [5, 10],
  [5, 9],
  [5, 8],
  [5, 7],
  [5, 6],
]));

console.log(solution2(10, [
  [5, 50],
  [4, 40],
  [3, 30],
  [2, 20],
  [1, 10],
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
  [5, 50],
]));
