// https://www.acmicpc.net/problem/17406
function solution(n, m, board, rotation) {
  let queue = [];

  function right(si, sj, ej) {
    for (let i = sj + 1; i <= ej; i += 1) {
      queue.push(board[si][i]);
      board[si][i] = queue.shift();
    }
  }

  function left(ei, sj, ej) {
    for (let i = ej - 1; i >= sj; i -= 1) {
      queue.push(board[ei][i]);
      board[ei][i] = queue.shift();
    }
  }

  function bottom(ej, si, ei) {
    for (let i = si + 1; i <= ei; i += 1) {
      queue.push(board[i][ej]);
      board[i][ej] = queue.shift();
    }
  }

  function top(sj, si, ei) {
    for (let i = ei - 1; i >= si; i -= 1) {
      queue.push(board[i][sj]);
      board[i][sj] = queue.shift();
    }
  }


  function dfs(si, sj, ei, ej) {
    if (si === ei && sj === ej) return;
    else {
      queue = [board[si][sj]];
      board[si][sj] = 0;
      for(let i = 0; i < 4; i += 1) {
        switch (i) {
          case 0:
            right(si, sj, ej);
            break;
          case 1:
            bottom(ej, si, ei);
            break;
          case 2:
            left(ei, sj, ej);
            break;
          case 3:
            top(sj, si, ei);
            break;
        }
      }
      dfs(si + 1, sj + 1, ei -1, ej - 1);
    }
  }

  rotation.forEach(([i, j, v]) => {
    dfs(i - v - 1, j - v - 1, i + v - 1, j + v - 1);
  });

  let answer = Infinity;
  board.forEach(row => {
    const sum = row.reduce((acc, cur) => acc + cur, 0);
    answer = Math.min(answer, sum);
  });
  return answer;
};

console.log(solution(5, 6, [
  [1 ,2 ,3 ,2 ,5 ,6],
  [3 ,8 ,7 ,2 ,1 ,3],
  [8 ,2 ,3 ,1 ,4 ,5],
  [3 ,4 ,5 ,1 ,1 ,1],
  [9 ,3 ,2 ,1 ,4 ,3],
], [
  [3, 4, 2],
  [4, 2, 1],
]));