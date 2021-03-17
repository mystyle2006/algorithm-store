// N 개의 원소 수열 i-j 합이 S가 되는 쌍의 개수
// 입력: [1, 1, 1, 1] 3
// 출력: 2

function solution(list, k) {
  let answer = 0;
  const dfs = (i, sum, _paths) => {
    if (i === list.length) {
      const result = _paths.reduce((acc, cur) => (acc + cur), 0);
      if (result === k) answer += 1;
      return;
    }

    dfs(i + 1, sum + list[i], [..._paths, sum + list[i]]);
    dfs(i + 1, sum, [..._paths, sum]);
  }

  dfs(0, 0, []);
  return k === 0 ? answer - 1 : answer;
}

console.log(solution([1, 1, 1, 1], 3));