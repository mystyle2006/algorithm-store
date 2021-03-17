// https://www.acmicpc.net/problem/1260
// 기본
function solution(paths, N, V) {
  paths.sort();
  const visited = [];
  const dfs = (target) => {
    if (visited.length === N) return;
    else {
      if (!visited.includes(target)) {
        visited.push(target);
      }

      paths.forEach((path) => {
        if (path[0] === target && !visited.includes(path[1])) {
          dfs(path[1]);
        }

        if (path[1] === target && !visited.includes(path[0])) {
          dfs(path[0]);
        }
      });
    }
  }

  dfs(V);

  return visited;
}

console.log(solution([[1, 2], [1, 3], [1, 4], [2, 4], [3, 4]], 4, 1));
console.log(solution([[5, 4], [5, 2], [1, 2], [3, 4], [3, 1]], 5, 3));
