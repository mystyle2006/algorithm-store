// https://www.acmicpc.net/problem/2606
function solution (N, network) {
  const checked = Array.from(Array(N + 1), () => false);
  const answer = [];
  function dfs(index) {
    checked[index] = true;
    answer.push(index);

    network.map(([from ,to]) => {
      if (from === index && !checked[to]) {
        dfs(to);
      }
    });
  }

  dfs(1);
  return answer.length - 1;
}

console.log(solution(7, [
  [1, 2],
  [2, 3],
  [1, 5],
  [5, 2],
  [5, 6],
  [4, 7],
]));
