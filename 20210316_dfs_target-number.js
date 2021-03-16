// Quiz LinK: https://programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  let answer = 0;
  const dfs = (x, value) => {
    if (x < numbers.length) {
      dfs(x + 1, value + numbers[x]);
      dfs(x + 1, value - numbers[x]);
    } else if (value === target) answer += 1;
  };
  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
