// link : https://www.acmicpc.net/problem/16768

function solution(N, S, board) {
  const COL = 10;
  let checked = Array.from(Array(N), () => Array.from(Array(COL), () => 0));

  function remove(i, j) {
    if (checked[i][j] === 0 || checked[i][j] === undefined) return;
    else {
      board[i][j] = -1;
      checked[i][j] = 0;

      if (i + 1 < N) remove(i + 1, j);
      if (i - 1 >= 0) remove(i - 1, j);
      if (j + 1 < COL) remove(i, j + 1);
      if (j - 1 >= 0) remove(i, j - 1);
    }
  }

  function dfs(i, j, flag) {
    if (checked[i][j] || board[i][j] === undefined || board[i][j] !== flag) return 0;
    else {
      checked[i][j] = 1;

      const right =  (i + 1 < N) ? dfs(i + 1, j, flag) : 0;
      const left =  (i - 1 >= 0) ? dfs(i - 1, j, flag) : 0;
      const bottom =  (j + 1 < COL) ? dfs(i, j + 1, flag) : 0;
      const top = (j - 1 >= 0) ? dfs(i, j - 1, flag) : 0;
      return 1 + right + left + bottom + top;
    }
  }

  function down(current, col) {
    if (current < 0) return;
    if (board[current][col] !== -1) down(current - 1, col);
    else {
      let valueOnTop = board[current - 1][col];
      if (valueOnTop === undefined || valueOnTop === 0) {
        board[current][col] = 0;
        return;
      }

      if (valueOnTop === -1) {
        down(current - 1, col);
        valueOnTop = board[current - 1][col];
      }

      board[current][col] = valueOnTop;
      board[current - 1][col] = -1;
      down(current - 1, col);
    }
  }

  while(true) {
    let exist = false;

    for(let i = N - 1; i >= 0; i -= 1) {
      for (let j = 0; j < COL; j++) {
        if (![0, -1].includes(board[i][j]) && !checked[i][j]) {
          const cnt = dfs(i, j, board[i][j]);
          if (cnt < S) continue;
          remove(i, j);
          exist = true;
        }
      }
    }

    if (!exist) {
      break;
    }

    for (let k = 0; k < COL; k += 1) {
      down(N - 1, k);
    }
  }

  return board;
};

console.log(solution(6, 3, [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,0,0],
  [0,0,5,4,0,0,0,3,0,0],
  [1,0,5,4,5,0,2,2,3,0],
  [2,2,1,1,1,2,2,2,2,0],
  [1,1,1,1,1,1,1,2,2,3],
]));
