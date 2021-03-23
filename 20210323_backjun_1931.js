function solution(n, timeTable) {
  timeTable.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  let count = 0;
  let startTime = 0;
  for (let i = 0; i < timeTable.length; i += 1) {
    const [start, end] = timeTable[i];
    if (end >= startTime && startTime <= start) {
      count += 1;
      startTime = end;
    }
  }

  return count;
}

console.log(solution(11, [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6 ,10],
  [8 ,11],
  [8 ,12],
  [2 ,13],
  [12 ,14],
]));