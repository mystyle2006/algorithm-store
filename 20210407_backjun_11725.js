// https://www.acmicpc.net/problem/11725

function solution(n, list) {
  const checked = Array.from(Array(n + 1), () => false);
  const nodes = Array.from(Array(n + 1), () => []);
  const answer = Array.from(Array(n + 1), () => null);

  for (let i = 0; i < n - 1; i += 1) {
    const [a, b] = list[i];
    nodes[a].push(b);
    nodes[b].push(a);
  }

  function dfs(current) {
    checked[current] = true;
    for (let i = 0; i < nodes[current].length; i += 1) {
      const next = nodes[current][i];
      if (!checked[next]) {
        answer[next] = current;
        dfs(next);
      }
    }
  }

  dfs(1);
  return answer;
}

console.log(solution(7, [
  [1, 6],
  [6, 3],
  [3, 5],
  [4, 1],
  [2, 4],
  [4, 7],
]));
