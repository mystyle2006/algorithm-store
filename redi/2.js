function solution(card,word) {
  const answer = [];

  const CHECKED = -1;
  while(word.length) {
    const w = word.shift();
    const wList = w.split('');
    const _card = card.map(c => c.split(''));
    const checked = Array.from((card.length), () => 0);

    let isValid = true;
    while(wList.length) {
      const _w = wList.shift();
      let has = false;
      for (let i = 0; i < _card.length; i += 1) {
        for (let j = 0; j < _card[i].length; j += 1) {
          if (_card[i][j] !== CHECKED && _card[i][j] === _w) {
            _card[i][j] = CHECKED;
            checked[i] = 1;
            has = true;
            break;
          }
        }
      }

      if (!has) {
        isValid = false;
        break;
      }
    }

    isValid = isValid && checked.reduce((acc, cur) => acc + cur, 0) === card.length;
    if (isValid) answer.push(w);
  }

  return answer.length ? answer : -1;
}

console.log(solution(["ABACDEFG", "NOPQRSTU", "HIJKLKMM"], ["GPQM", "GPMZ", "EFU", "MMNA"]));