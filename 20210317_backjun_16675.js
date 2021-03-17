// link : https://www.acmicpc.net/problem/17413

function solution(list) {
  const table = {
    S: 0,
    P: 1,
    R: 2,
  };

  if (list[0] === list[1] && [table[list[2]], table[list[3]]].includes(((table[list[0]] + 2) % 3))) {
    return 'TK';
  }

  if (list[2] === list[3] && [table[list[0]], table[list[1]]].includes(((table[list[2]] + 2) % 3))) {
    return 'MS';
  }

  return '?';
};

console.log(solution(['P', 'P', 'S', 'R']));