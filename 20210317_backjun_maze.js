// https://www.acmicpc.net/problem/2178

const dx = [1, -1,0, 0];
const dy = [0, 0, 1, -1];

function solution (n, m, maze) {
  const checked = Array.from(Array(n), () => Array.from(Array(m), () => 0));
  const printed = Array.from(Array(n), () => Array.from(Array(m), () => 0));
  let queue = [];
  const block = 0;

  const bfs = () => {
    queue.push([0, 0, 0]);

    while(queue.length) {
      const [from, to, print] = queue.shift();
      printed[from][to] = print;
      checked[from][to] = 1;

      for (let i = 0; i < 4; i++) {
        const nextX = from + dx[i];
        const nextY = to + dy[i];
        if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && !checked[nextX][nextY]) {
          const next = maze[nextX][nextY];
          if (next === 1) queue.push([nextX, nextY, print + 1]);
        }
      }
    }
  };

  bfs();
  console.log(printed);
  return printed[n - 1][m - 1] + 1;
}

console.log(solution(4, 6, [
  [1,0,1,1,1,1],
  [1,0,1,0,1,0],
  [1,0,1,0,1,1],
  [1,1,1,0,1,1],
]))
