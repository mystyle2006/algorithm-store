function solution(n, list) {
  let answer = 0;
  function dfs (index, sum) {
    if (index === n - 1) {
      if (sum === list[index]) answer += 1;
    } else {
      if (sum + list[index] >= 0 && sum + list[index] <= 20) dfs(index + 1, sum + list[index]);
      if (sum - list[index] >= 0 && sum - list[index] <= 20) dfs(index + 1, sum - list[index]);
    }
  }

  dfs(1, list[0]);
  return answer;
}

console.log(solution(11, [8, 3, 2, 4, 8, 7, 2, 4, 0, 8, 8]))