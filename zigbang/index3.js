function calcAvgHeight(data) {
  const length = Object.values(data).length;
  if (length === 0) return null;

  const sumOfHeights = Object.values(data).reduce((acc, cur) => acc + cur.height, 0);
  return sumOfHeights / length;
}
//
// interface Person {
//   height: number;
//   weight: number;
// }

let avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
console.log(avgHeight);