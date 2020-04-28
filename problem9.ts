//ピタゴラスの三重項とは、a < b < c の自然数の3つの集合のことです。
//a2 + b2 = c2
//a + b + c = 1000となるピタゴラスの三重項は1つだけ存在する。
//積abcを求めよ。

console.log(getPythagoreanTriplet(1000));

function getPythagoreanTriplet(numSum: number) {
  for (let numCnt1 = 1; numCnt1 < Math.sqrt(numSum); numCnt1++) {
    for (let numCnt2 = 1; numCnt2 < Math.sqrt(numSum); numCnt2++) {
      const numA = Math.pow(numCnt1, 2) - Math.pow(numCnt2, 2);
      const numB = 2 * numCnt1 * numCnt2;
      const numC = Math.pow(numCnt1, 2) + Math.pow(numCnt2, 2);
      if (Math.pow(numA, 2) + Math.pow(numB, 2) === Math.pow(numC, 2) && numA + numB + numC === numSum) {
        return numA * numB * numC;
      }
    }
  }
}
