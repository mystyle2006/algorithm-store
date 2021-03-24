// https://www.acmicpc.net/problem/12849
// 0 : 정보과학관
// 1 : 전산관
// 2 : 신앙관
// 3 : 미래관
// 4 : 진리관
// 5 : 환경직기념관
// 6 : 학생회관
// 7 : 형남공학관
// 현재 위치로 오는 경우는, 현재 위치와 연결된 위치들의 이전에 방문한 횟수들을 더한 값이다.
function solution(n) {
  let dp = [1, 0, 0, 0, 0, 0, 0, 0]; // n = 0

  while (n) {
    let temp = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 8; i += 1) {
      temp[0] = dp[1] + dp[3];
      temp[1] = dp[0] + dp[2] + dp[3];
      temp[2] = dp[1] + dp[3] + dp[4] + dp[5];
      temp[3] = dp[0] + dp[1] + dp[2] + dp[5];
      temp[4] = dp[2] + dp[5] + dp[6];
      temp[5] = dp[3] + dp[2] + dp[4] + dp[7];
      temp[6] = dp[4] + dp[7];
      temp[7] = dp[5] + dp[6];
    }

    for (let i = 0; i < 8; i += 1) {
      dp[i] = temp[i] % 1000000007;
    }

    n -= 1;
  }

  return dp[0];
}

console.log(solution(10))