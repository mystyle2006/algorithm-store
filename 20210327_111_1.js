const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function solution(r, d, xArr, yArr)
{
  const checked = Array.from(Array(Math.max(...yArr) + r + 1), () => Array.from(Array(Math.max(...xArr) + r + 1), () => 0));
  function go(x, y) {
    for (let i = 0; i < xArr.length; i += 1) {
      const _x = xArr[i];
      const _y = yArr[i];

      if (x >= _x && y >= _y && x <= _x + r && y <= _y + r) {
        return true;
      }
    }

    return false;
  }

  let max = 0;

  function dfs(x, y) {
    max = Math.max(x + y, max);
    if (checked[y][x]) return;
    else {
      checked[y][x] = 1;
      for (let i = 0; i < 4; i += 1) {
        const nextX = x + dx[i] * d;
        const nextY = y + dy[i] * d;
        if (go(nextX, nextY)) dfs(nextX, nextY);
      }
    }
  }

  dfs(xArr[0], yArr[0]);

  return max;
};

console.log(solution(3, 1, [0, 1, 5, 6, 10, 10, 14, 18], [0, 4, 5, 1, 4, 0, 0, 0]));

// 연못에는 연꽃잎이 떠있고, 개구리는 연꽃잎 사이를 뛰어넘어 이동할 수 있습니다.
//
//   연못은 x, y 좌표로 표현되고, 연꽃잎은 한 변의 길이가 r인 정사각형으로 표현됩니다. (그림1)
// 모든 연꽃잎의 크기는 동일하고 서로 겹치지 않는다고 가정합시다.
//
//   스크린샷 2021-01-04 오후 9.28.40.png
//
// 좌표 (0, 0)을 포함하는 연꽃잎은 항상 존재하고, 개구리는 처음에 이 연꽃잎 위에 놓여있습니다.
//
//   개구리는 한 번의 점프로 최대 거리 d 만큼 이동할 수 있습니다. 다만, 동, 서, 남, 북으로만 점프할 수 있습니다.
//   따라서, 개구리가 점프할 수 있는 영역은 (그림2,3)에 어두운 영역과 같습니다.
// 또한 (그림3)과 같이 개구리 점프 영역에 테두리가 닿아 있는 경우도 점프할 수 있다고 가정합니다.
//
//   스크린샷 2021-01-04 오후 9.28.53.png
//
// 개구리가 (0, 0) 좌표의 연꽃잎에서 시작하고, 연꽃잎 위를 이동하거나 다른 연꽃잎으로 점프를 해서 어떤 연꽃잎 위의 좌표(a, b)인 위치로 이동가능할 때,
//   (0, 0)으로 부터 개구리가 이동 가능한 가장 먼 좌표(a, b)를 찾고 그 거리를 구하시오.
//
//   입력
// 연꽃잎의 크기 r, 개구리의 점프 최대 거리 d가 주어집니다.
//
// 1 ≥ r ≥ 10000
// 1 ≥ d ≥ 1000000
// 다음은 각 연꽃잎의 왼쪽 아래 꼭지점의 좌표(x, y)를 나타내는 좌표가 각각 배열의 형태로 주어집니다.
//
// 1 ≥ x, y ≥ 10000000
// 출력
// 개구리가 (0, 0)으로부터 이동 가능한 가장 먼 좌표(a, b)까지의 거리를 출력합니다. 좌표(a, b)의 거리는 a + b로 계산합니다.