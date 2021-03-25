function solution(base, target) {
  const _target = target.split('');
  const _base = base.split('');
  const dp = Array.from(Array(_target.length + 1), () => Array.from(Array(_base.length + 1), () => 0));
  for (let i = 1; i <= _target.length; i += 1) {
    for (let j = 1; j <= _base.length; j += 1) {
      if (_target[i - 1] === _base[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = _target.length;
  let j = _base.length;
  const lcs = [];

  while(dp[i][j] !== 0) {
    if (dp[i][j] === dp[i][j - 1]) j -= 1;
    else if (dp[i][j] === dp[i - 1][j]) i -= 1;
    else if (dp[i][j] - 1 === dp[i - 1][j - 1]) {
      lcs.push(_target[i - 1]);
      j -= 1;
      i -= 1;
    }
  }

  return {
    count: dp[_target.length][_base.length],
    lcs,
  };
}

console.log(solution('ACAYKP', 'CAPCAK'));
