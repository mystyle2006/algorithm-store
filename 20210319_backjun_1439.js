function solution(str) {
  let countA = 0;
  let countB = 0;
  let current = str[0];

  if (current === '1') countA += 1;
  else countB += 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === current) continue;

    current = str[i];
    if (current === '1') countA += 1;
    else countB += 1;
  }

  return Math.min(countA, countB);
}

console.log(solution('0001100'));
