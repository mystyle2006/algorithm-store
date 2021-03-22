function solution(n, m) {
  let answer = [];
  console.time('s');
  for (let i = 0; i < 100000000; i += 1) {
    if (i % n === 0 && i % m !== 0) {
      answer.push(i);
    }
  }
  console.timeEnd('s');

  return answer;
};

console.log(solution(3, 4));
