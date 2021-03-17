// R * C 흑백 이미지 검정 0 흰새 1 흰색 배경 몇개?
// 입력: [1, 1, 1, 1] 3
// 출력: 2

function solution(board, r, c) {
  const checked = Array.from(Array(c), () => Array.from(Array(r), () => 0));
  const white = 1;
  let _board = 0;
  let cnt = 0;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= c || j >= r || checked[i][j] || board[i][j] !== white) return 0;
    else {
      checked[i][j] = 1;
      const left = dfs(i - 1, j);
      const right = dfs(i + 1, j);
      const top = dfs(i, j - 1);
      const bottom = dfs(i, j + 1);
      return 1 + left + right + top + bottom;
    }
  };

  for (let i = 0; i < c; i += 1) {
    for (let j = 0; j < r; j += 1) {
      if (!checked[i][j] && board[i][j] === white) {
        const _cnt = dfs(i, j);
        cnt = Math.max(cnt, _cnt);
        _board += 1;
      }
    }
  }

  return [_board, cnt];
}

console.log(solution([[1, 1, 0, 1, 1], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 1, 1], [1, 0, 1, 1, 1], [1, 0, 1, 1, 1]], 5, 6));
