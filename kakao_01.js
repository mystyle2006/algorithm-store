const PEOPLE = 'P';
const TABLE = 'O';
const N = 5;
const VALID = 1;
const INVALID = 0;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function solution(list) {
  // 문자열을 배열 형태로 변환
  const _list = list.map(p => p.map(i => i.split('')));

  function answer(places) {
    // 테이블이 있을 경우 상하좌우를 체크하는 함수
    function checkTable(i, j, x, y) {
      for (let z = 0; z < 4; z += 1) {
        // 기준이 되는 사람일 경우 체크하지 않는다.
        if (x + dy[z] === i && y + dx[z] === j) continue;

        // 테이블 근처 상하좌우에 새로운 사람이 있을 경우 유효하지 않음으로 처리
        if (places[x + dy[z]][y + dx[z]] === PEOPLE) return INVALID;
      }

      return VALID;
    }

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < N; j += 1) {
        if (places[i][j] === PEOPLE) {
          for (let z = 0; z < 4; z += 1) {
            if (!places[i + dy[z]] || !places[i + dy[z]][j + dx[z]]) continue;

            // 상하좌우에 사람이 있을 경우 유효하지 않음으로 처리
            if (places[i + dy[z]][j + dx[z]] === PEOPLE) return INVALID;
            // 테이블일 경우 테이블 주변을 체크
            if (places[i + dy[z]][j + dx[z]] === TABLE) return checkTable(i, j, i + dy[z], j + dx[z]);
          }
        }
      }
    }

    return VALID;
  }

  return _list.map(p => answer(p));
}

const list = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOPX', 'OXPXX', 'OXXXP', 'POOXX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
]
console.log(solution(list));