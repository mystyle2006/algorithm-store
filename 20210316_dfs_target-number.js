// Quiz LinK: https://programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  const dfs = (x, value) => {
    if (x < numbers.length) return dfs(x + 1, value + numbers[x]) + dfs(x + 1, value - numbers[x]);
    else if (value === target) return 1;
    else return 0;
  };

  return dfs(0, 0);
}

console.log(solution([1, 1, 1, 1, 1], 3));
