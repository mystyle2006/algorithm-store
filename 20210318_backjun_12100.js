// https://www.acmicpc.net/problem/12100

function solution(N, board) {
  const MAX_SHAKE = 5;
  const _board = JSON.parse(JSON.stringify(board));

  function shakeLeft() {
    const queue = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j += 1) {
        if (board[i][j] !== 0) {
          queue.push(board[i][j]);
          board[i][j] = 0;
        }
      }

      let col = 0;
      while(queue.length) {
        const current = queue.shift();

        if (board[i][col] === 0) {
          board[i][col] = current;
        } else if (board[i][col] === current) {
          board[i][col] = board[i][col] * 2;
          col += 1;
        } else {
          col += 1;
          board[i][col] = current;
        }
      }
    }
  }

  function shakeRight() {
    const queue = [];
    for (let i = 0; i < N; i++) {
      for (let j = N - 1; j >= 0; j -= 1) {
        if (board[i][j] !== 0) {
          queue.push(board[i][j]);
          board[i][j] = 0;
        }
      }

      let col = N - 1;
      while(queue.length) {
        const current = queue.shift();

        if (board[i][col] === 0) {
          board[i][col] = current;
        } else if (board[i][col] === current) {
          board[i][col] = board[i][col] * 2;
          col -= 1;
        } else {
          col -= 1;
          board[i][col] = current;
        }
      }
    }
  }

  function shakeBottom() {
    const queue = [];
    for (let i = 0; i < N; i++) {
      for (let j = N - 1; j >= 0; j -= 1) {
        if (board[j][i] !== 0) {
          queue.push(board[j][i]);
          board[j][i] = 0;
        }
      }

      let row = N - 1;
      while(queue.length) {
        const current = queue.shift();

        if (board[row][i] === 0) {
          board[row][i] = current;
        } else if (board[row][i] === current) {
          board[row][i] = board[row][i] * 2;
          row -= 1;
        } else {
          row -= 1;
          board[row][i] = current;
        }
      }
    }
  }

  function shakeTop() {
    const queue = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j += 1) {
        if (board[j][i] !== 0) {
          queue.push(board[j][i]);
          board[j][i] = 0;
        }
      }

      let row = 0;
      while(queue.length) {
        const current = queue.shift();

        if (board[row][i] === 0) {
          board[row][i] = current;
        } else if (board[row][i] === current) {
          board[row][i] = board[row][i] * 2;
          row += 1;
        } else {
          row += 1;
          board[row][i] = current;
        }
      }
    }
  }

  let answer = 0;
  function dfs(depth) {
    if (depth === MAX_SHAKE)  {
      for (let i = 0; i < N; i += 1) {
        for (let j = 0; j < N; j += 1) {
          answer = Math.max(answer, board[i][j]);
        }
      }
    } else {
      for (let i = 0; i < 4; i ++) {
        switch (i) {
          case 0: shakeLeft();
          case 1: shakeRight();
          case 2: shakeBottom();
          case 3: shakeTop();
        }
        dfs(depth + 1);
        board = _board;
      }
    }
  }

  dfs(0);

  return answer;
};

console.log(solution(3, [
  [2, 2, 2],
  [4, 4, 4],
  [8, 8, 8],
]));

