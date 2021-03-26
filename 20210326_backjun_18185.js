// https://www.acmicpc.net/problem/18185

function solution(n, list) {
  let answer = 0;
  function three(k){
    while(list[k] && list[k+1] && list[k+2]){
      list[k]--;
      list[k+1]--;
      list[k+2]--;
      answer += 7;
    }
  }

  function two(k){
    while(list[k] && list[k+1]){
      list[k]--;
      list[k+1]--;
      answer += 5;
    }
  }

  function one(k){
    answer += 3 * list[k];
  }

  for (let i = 0; i < n; i += 1) {
    if (list[i + 1] > list[i + 2]) {
      const k = Math.min(list[i] , list[i+1] - list[i+2]);
      list[i] -= k;
      list[i + 1] -= k;
      answer += 5 * k;

      three(i);
      one(i);
    } else {
      three(i);
      two(i);
      one(i);
    }
  }

  return answer;
};

console.log(solution(3, [1, 0, 1]));
console.log(solution(5, [1, 1 ,1, 0 ,2]))
