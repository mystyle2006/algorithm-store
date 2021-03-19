const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\r\n');
// const input = fs.readFileSync('./test.js').toString().split('\r\n');

const n = parseInt(input[0]);

function solution() {
  if (n <= 10) {
    console.log(1);
    return;
  }

  let k = 2;
  for (let i = 11; true; i = i * 10 + 1) {
    if (n >= i && n <= i * 10) {
      console.log(k);
      break;
    }
    k += 1;
  }
}

solution();
