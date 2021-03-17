// 1차원 직선 상에서 두 점의 연결 정보를 나타내는 리스트 paths
//
// 1(start)-2-3-4(end)-5-6(end)-7-8(start)
//
// 입력: [[1,2], [2,3], [3, 4], [8, 7], [7, 6]]
// 출력: [1,4, 8, 6];

function solution(paths) {
  let answer = [];
  let prev = null;
  paths.forEach((path, index) => {
    if (index === paths.length - 1) {
      answer.push(path[1]);
      return;
    }
    if (!prev) {
      answer.push(path[0]);
      prev = path[1];
    } else if (prev !== path[0]) {
      answer.push(prev);
      prev = null;
    }
  });

  return answer;
}

solution([[1,2], [2,3], [3, 4], [8, 7], [7, 6]]);
