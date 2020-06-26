//100の階乗の各桁の合計を算出する

console.log(calcFactorialDigitSum(100));

function calcFactorialDigitSum(startNumber: number): number {
  let factorial = 1;
  //階乗の計算
  for (let i = startNumber; 0 < i; i--) {
    factorial = factorial * i;
    //桁あふれするかも
  }

  //各桁を配列に入れる
  const digitArray: number[] = factorial
    .toString()
    .split('')
    .map((value) => parseInt(value, 10));

  //各桁の合計
  let sum = 0;
  for (let j = 0; j < digitArray.length; j++) {
    sum += digitArray[j];
  }
  return sum;
}

//階乗の計算
function calcFactorial(startNumber: number) {
  let digitArray: number[] = [1];
  let factorial = 1;
  //階乗の計算
  for (let i = startNumber; 0 < i; i--) {
    factorial = factorial * i;
    //桁あふれするかも
  }
}
