// https://www.acmicpc.net/problem/2644
function solution (people, from, to, relations) {
  const checked = Array.from(Array(people + 1), () => false);
  let answer = -1;

  function dfs(index, cnt) {
    if (index === to) answer = cnt;
    else {
      checked[index] = true;
      relations.forEach(relation => {
        if (relation[0] === index && !checked[relation[1]]) {
          dfs(relation[1], cnt + 1);
        }

        if (relation[1] === index && !checked[relation[0]]) {
          dfs(relation[0], cnt + 1);
        }
      });
    }
  };

  dfs(from, 0);

  return answer;
}

console.log(solution(9, 7, 3,[
  [1, 2],
  [1, 3],
  [2, 7],
  [2, 8],
  [2, 9],
  [4, 5],
  [4, 6],
]));
