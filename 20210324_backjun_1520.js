// https://www.acmicpc.net/problem/1520
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
function solution(n, m, map) {
  let dp = Array.from(Array(n), () => Array.from(Array(m), () => 0));
  function dfs(y, x) {
    if (dp[y][x]) return dp[y][x];
    if (x === m - 1 && y === x - 1) {
      dp[y][x] = 1;
      return 1;
    } else {
      for (let i = 0; i < 4; i += 1) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];
        try {
          if (map[y][x] > map[nextY][nextX]) {
            dp[y][x] += dfs(nextY, nextX);
          }
        } catch (error) {
        }
      }

      return dp[y][x];
    }
  }

  const result = dfs(0, 0);
  return result;
}

console.log(solution(4, 5, [
  [50 ,45 ,37 ,32 ,30],
  [35 ,50 ,40 ,20 ,25],
  [30 ,30 ,25 ,17 ,28],
  [27 ,24 ,22 ,15 ,10],
]));
