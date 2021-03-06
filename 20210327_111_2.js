function solution(n) {
  if (n === 0) return 1;
  // DP[i][j] : 자릿수가 i이고, 첫 글자가 j로 시작하는 내림수의 개수
  // dp[i][j] = dp[i - 1][j - 1] ... dp[0][0]

  // dp[3][2] = dp[2][1] + dp[1][0]
  const dp = Array.from(Array(n + 1), () => Array.from(Array(10), () => 0));
  dp[0][0] = 1;
  // 1자릿수 시작하는 내림수 하나
  for (let i = 0; i <= 9; i += 1 ) {
    dp[1][i] = 1;
  }

  let i = 2;
  while(i <= n) {
    for (let j = 1; j <= 9; j += 1) {
      for (let k = j - 1; k >= 0; k -= 1) {
        dp[i][j] += dp[i - 1][k];
      }
    }
    i += 1;
  }

  console.log(dp);
  return dp.reduce((acc, cur) => {
    const sum = cur.reduce((acc2, cur2) => acc2 + cur2, 0);
    return sum + acc;
  }, -1);
}

console.log(solution(10));

// 문제 설명
// 문제
// 숫자 중에는 앞자리가 뒷자리보다 항상 큰 수가 있습니다.
//   그런 숫자들을 우리는 내림수 라고 부르겠습니다.
//
//   아래와 같은 예시로 내림수 의 이해를 도울 수 있겠습니다.
//
// 1) 1534   --> (X)
// 2) 800    --> (X)
// 3) 111    --> (X)
// 4) 57     --> (X)
//
// 5) 9876   --> (O)
// 6) 321    --> (O)
// 7) 95     --> (O)
// 8) 1      --> (O)
// 숫자 범위 가 주어졌을 때, 내림수 의 개수를 구하시오.
//
//   입력
// 하나의 정수 n이 주어집니다. 단, 범위는 0 ≤ n ≤ 10 입니다.
//
//   숫자 범위 : 1 ~ 10n
// 출력
// 주어진 범위의 모든 숫자 중에, 내림수 의 개수를 출력합니다.
//
//   입/출력 예시
// 1) 입력 : 0 -> 출력 : 1
// 2) 입력 : 1 -> 출력 : 10
// 3) 입력 : 2 -> 출력 : 55