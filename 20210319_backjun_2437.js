const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\r\n');
// const input = fs.readFileSync('./test.js').toString().split('\r\n');
const n = input[0];
const weights = input[1];

function solution() {
  const _weights = weights.split(' ').map(i => Number(i)).sort((a, b) => a - b);
  let min = _weights[0];
  for (let i = 1; i < n; i += 1) {
    if ((min + 1) < (_weights[i])) {
      min += 1;
      break;
    }

    min += _weights[i];
  }
  console.log(min);
  return;
}

solution();
