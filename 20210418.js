function solution(p, s) {
  let min = Infinity;
  let dp = {};

  function match(s) {
    const pLength = p.length;
    if (s.length % pLength !== 0) return false;
    const _p = Array.from(Array(Math.floor(s.length / pLength)), () => p).join('');
    if (s === _p) return true;
    else return false;
  }

  // str: 새로운 문자열, index: 현재 문자 위치, rc: 삭제된 횟수
  function bf(str, index, rc) {
    if (str && match(str)) min = Math.min(min, rc);
    if (!str.length) return;
    if (str.length <= index) return;
    const newStr = str.slice(0, index) + str.slice(index + 1)
    bf(newStr, index, rc + 1);
    bf(str, index + 1, rc);
  }

  bf(s, 0, 0);

  return min === Infinity ? -1 : min;
}

console.log(solution('101', '10100010101101100'))