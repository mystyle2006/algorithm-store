function solution(n, m, a, b) {
  function flip(start, end) {
    for (let i = start; i < start + 3; i += 1) {
      for (let j = end; j < end + 3; j += 1) {
        a[i][j] = a[i][j] === 0 ? 1 : 0;
      }
    }
  }

  let cnt = 1;
  for (let i = 0; i <= n - 3; i += 1) {
    for (let j = 0; j <= m - 3; j += 1) {
      if (a[i][j] !== b[i][j]) {
        flip(i, j);
        cnt += 1;
      }
    }
  }

  let isEqual = false;
  for (let i = 0; i <= n - 3; i += 1) {
    for (let j = 0; j <= m - 3; j += 1) {
      if (a[i][j] !== b[i][j]) isEqual = false;
    }
  }

  return isEqual ? cnt : -1;
}

console.log(solution(3, 4, [
  [0,0,0,0],
  [0,0,1,0],
  [0,0,0,0],
], [
  [1,0,0,1],
  [1,0,1,1],
  [1,0,0,1],
]));
