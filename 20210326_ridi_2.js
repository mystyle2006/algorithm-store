function solution(x, y, r, d, targets) {
  function getDistance(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  }

  function inner(_x, _y, a, b) {
    return _x * a + _y * b;
  }

  const u = getDistance(x, y);
  const result = targets.filter(i => getDistance(i[0], [1]) <= r).filter((i) => {
    const v = getDistance(i[0], i[1]);
    const _inner = inner(x, y, i[0], i[1]);
    const theta = Math.acos(_inner/(u*v)) * 180 / Math.PI;
    console.log(theta);
    return theta <= d;
  });
  return result;
};
// x y	r	d, targets
console.log(solution(-1,	2,	2,	60,	[[0, 1], [-1, 1], [1, 0], [-2, 2]]))
