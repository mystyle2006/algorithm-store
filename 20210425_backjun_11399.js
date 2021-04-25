const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = null;
let cnt = 0;
let time = [];

function solution() {
  time.sort((a, b) => a.time - b.time);
  let total = 0;
  for (let i = 0; i < time.length; i += 1) {
    let sum = 0;
    for (let j = 0; j <= i; j += 1) {
      sum += time[j].time;
    }
    total += sum;
  }

  return total;
}

rl.on("line", function(line) {
  if (!N) {
    N = +line;
  } else {
    time = line.split(' ').map((time, index) => ({
      index,
      time: +time,
    }));
    cnt += 1;
  }

  if (cnt === 1) {
    rl.close();
  }
}).on("close", function() {
  console.log(solution());
  process.exit(0);
});
