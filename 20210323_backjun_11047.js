function solution(n, k, coins) {
  let answers = 0;

  for (let i = coins.length - 1; i >= 0; i -= 1) {
    const share = parseInt(k / coins[i]);
    const remainder = k % coins[i];
    k = remainder;

    if (share > 0) {
      answers += share;
    }

    if (remainder === 0) {
      break;
    }
  }

  return answers;
}

console.log(solution(10, 4200, [
  1,
  5,
  10,
  50,
  100,
  500,
  1000,
  5000,
  10000,
  50000,
]))

console.log(solution(10, 4790, [
  1,
  5,
  10,
  50,
  100,
  500,
  1000,
  5000,
  10000,
  50000,
]))
