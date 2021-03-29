function solution(n) {
  let answer = 1;

  function check(num) {
    let temp = -1;

    while(num !== 0) {
      const a = Math.floor(num / 10);
      const b = num % 10;
      if (temp >= b) return false;
      temp = b;
      num = a;
    }
    return true;
  }

  for (let i = 1; i <= Math.pow(10, n); i += 1) {
    answer += check(i) ? 1 : 0;
  }

  return answer;
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


[6];
