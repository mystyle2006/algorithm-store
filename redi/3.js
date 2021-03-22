function solution(s) {
  const _s = s;
  const sList = s.split('');
  const array = [sList.shift()];

  while(sList.length) {
    if (_s.split(array.join('')).find(i => i !== '')) array.push(sList.shift());
    else break;
  }

  return array.length;
}

console.log(solution("abababab"));