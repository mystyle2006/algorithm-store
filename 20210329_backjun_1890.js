const dx = [1, 0];
const dy = [0, 1];
function solution(n, board) {
  let answer = 0;
  function dfs(y, x) {
    if (board[y][x] === 0) answer += 1;
    else {
      const d = board[x][y];
      for (let i = 0; i < 2; i += 1) {
        const nextX = x + dx[i] * d;
        const nextY = y + dy[i] * d;
        if (nextX >= n || nextY >= n) continue;
        dfs(nextY, nextX);
      }
    }
  };
  dfs(0, 0);

  return answer;
}

console.log(solution(4, [
  [2, 3, 3, 1],
  [1, 2, 1, 3],
  [1, 2, 3, 1],
  [3, 1, 1, 0],
]))