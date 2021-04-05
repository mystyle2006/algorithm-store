// https://www.acmicpc.net/problem/2470
function solution(list) {
  list.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = list.length - 1;
  let min = Infinity;
  let v1 = null;
  let v2 = null;
  while(p1 != p2) {
    if (min >= Math.abs(list[p1] + list[p2])) {
      v1 = list[p1];
      v2 = list[p2];
      min = Math.abs(list[p1] + list[p2]);
    }

    if (list[p1] + list[p2] > 0) p2 -= 1;
    else p1 += 1;
  }

  console.log(v1, v2);
}

solution([-2, 4, -99, -1, 98])
