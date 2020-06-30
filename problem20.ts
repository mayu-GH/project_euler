//100の階乗の各桁の合計を算出する

console.log(calcDigitSum(100));

//格桁の合計
function calcDigitSum(startNumber: number): number {
  //階乗の計算
  const digitArray: number[] = calcFactorial(startNumber);
  //合計
  let sum = 0;
  for (let j = 0; j < digitArray.length; j++) {
    sum += digitArray[j];
  }
  return sum;
}

//階乗の計算
function calcFactorial(startNumber: number): number[] {
  let result: number[] = [1];
  for (let i = startNumber; i > 0; i--) {
    const tmpArray: number[] = [];
    for (let j = 0; j < result.length; j++) {
      //各桁と掛け算
      let tmp = result[j] * i + (tmpArray[j] ?? 0);
      if (tmp < 10) {
        tmpArray[j] = tmp;
      } else {
        //繰り上がり
        let k = j;
        while (tmp >= 10) {
          tmpArray[k] = tmp % 10;
          tmpArray[k + 1] = Math.floor(tmp / 10) + (tmpArray[k + 1] ?? 0);
          tmp = tmpArray[k + 1];
          k++;
        }
      }
    }
    result = tmpArray;
  }
  return result.reverse();
}
