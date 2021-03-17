// link : https://www.acmicpc.net/problem/10539

function solution(list) {
  const answer = [];
  list.forEach((i, index) => {
    if (index === 0) answer.push(i);
    else {
      const sum = answer.reduce((acc, cur) => acc + cur, 0);
      const next = i * (index + 1) - sum;
      answer.push(next);
    }
  });

  return answer;
};

console.log(solution([2]));
console.log(solution([3, 2, 3, 5]));
console.log(solution([1, 2, 2, 3, 4]));