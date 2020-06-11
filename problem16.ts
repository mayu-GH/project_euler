//console.log('合計' + getSumOfDigits(2, 15));
console.log('calcPower' + calcPower(2, 15));
//console.log('Math.pow' + Math.pow(2, 15));

//各桁の合計
function getSumOfDigits(value: number, power: number) {
  const digitsArray: number[] = calcPower(value, power);
  let sum = 0;
  for (let i = 0; i < digitsArray.length; i++) {
    sum += digitsArray[i];
  }
  return sum;
}

//累乗の計算
function calcPower(value: number, power: number): number[] {
  let result: number[] = [1];
  for (let i = 1; i <= power; i++) {
    const tmpArray: number[] = [0];
    for (let j = 0; j < result.length; j++) {
      //各桁と掛け算
      let tmp = result[j] * value + tmpArray[j];
      //掛け算
      if (tmp < 10) {
        tmpArray[j] = tmp;
      } else {
        //繰り上がり
        let k = j;
        while (tmp > 10) {
          tmpArray[k] = tmp % 10;
          if (isNaN(tmpArray[k + 1])) {
            tmpArray[k + 1] = 0;
          }
          tmpArray[k + 1] += Math.floor(tmp / 10);
          tmp = tmpArray[k + 1];
          k++;
        }
      }
    }
    result = tmpArray;
  }
  return result;
}
