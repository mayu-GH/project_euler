//ピタゴラスの三重項とは、a < b < c の自然数の3つの集合のことです。
//a2 + b2 = c2
//a + b + c = 1000となるピタゴラスの三重項は1つだけ存在する。
//積abcを求めよ。

console.log(getPythagoreanTriplet(1000));

function getPythagoreanTriplet(sum: number) {
  for (let i = 1; i < Math.sqrt(sum); i++) {
    for (let j = 1; i > j; j++) {
      const a = Math.pow(i, 2) - Math.pow(j, 2);
      const b = 2 * i * j;
      const c = Math.pow(i, 2) + Math.pow(j, 2);
      if (a + b + c === sum) {
        return a * b * c;
      }
    }
  }
}
