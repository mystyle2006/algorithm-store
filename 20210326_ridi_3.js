function solution(string, target) {
  const pi = Array.from(Array(string.length), () => 0);
  function fail() {
    let j = 0;
    for (let i = 1; i < string.length; i += 1) {
      while (j > 0 && string[i] !== string[j]) {
        j = pi[j - 1];
      }

      if (string[i] === string[j]) {
        j += 1;
        pi[i] = j;
      }

      let k = i + 1;

    }
  }
  function KMP() {
    let j = 0;
    for (let i = 1; i < string.length; i += 1) {
      while (j > 0 && string[i] !== target[j]) {
        j = pi[j - 1];
      }

      if (string[i] === target[j]) {
        if (j === target.length - 1) {
          j = pi[j];
        } else {
          j += 1;
        }
      }
    }
  }

  fail();
  console.log(pi);
};
// x y	r	d, targets
console.log(solution('abababab', 'ba'));
