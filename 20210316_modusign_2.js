// N 개의 원소 수열 i-j 합이 S가 되는 쌍의 개수
// 입력: [1, 1, 1, 1] 3
// 출력: 2

function solution(list, k) {
  let answer = 0;
  for (let i = 0; i < list.length; i += 1) {
    let sum = 0;
    for(let j = i; j < list.length; j += 1) {
      sum += list[j];
      if (sum === k) answer += 1;
    }
  }

  return answer;
}

console.log(solution([1, 1, 1, 1], 3));
