// https://www.acmicpc.net/problem/7569

const di = [1, -1,0, 0, 0, 0];
const dj = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];
function solution(x, y, h, box) {
  const EMPTY = -1;
  const GOOD = 1;
  const BAD = 0;
  let day = 0;

  function bfs(z, i, j) {
    const queue = [[z, i, j, 0]];
    while(queue.length) {
      const current = queue.shift();
      box[current[0]][current[1]][current[2]] = GOOD;
      day = Math.max(day, current[3]);
      for(let i = 0; i < 6; i += 1) {
        const nextZ = current[0] + dz[i];
        const nextI = current[1] + di[i];
        const nextJ = current[2] + dj[i];

        if (nextZ >= h || nextZ < 0) continue;
        if (nextI >= y || nextI < 0) continue;
        if (nextJ >= x || nextJ < 0) continue;
        const target = box[nextZ][nextI][nextJ];

        if (target === BAD) {
          queue.push([nextZ, nextI, nextJ, current[3] + 1]);
        }
      }
    }
  }

  for(let z = 0; z < h; z += 1) {
    for(let i = 0; i < y; i += 1) {
      for (let j = 0; j < x; j += 1) {
        if (![EMPTY, BAD].includes(box[z][i][j])) {
          bfs(z, i, j);
        }
      }
    }
  }

  for(let z = 0; z < h; z += 1) {
    for(let i = 0; i < y; i += 1) {
      for (let j = 0; j < x; j += 1) {
        if (box[z][i][j] === BAD) {
          day = -1;
          break;
        }
      }
    }
  }

  console.log(day);
};

console.log(solution(4, 3, 2, [
  [
    [1 ,1 ,1 ,1],
    [1 ,1 ,1 ,1],
    [1 ,1 ,1 ,1],
  ],
  [
    [1, 1, 1, 1],
    [-1, -1, -1, -1],
    [1, 1, 1, -1],
  ],
]));