//1000以下のすべての友愛数の和を求める

console.log(calcSumofAmicableNumbers(300));

//指定の数以下の全ての友愛数の和を求める
function calcSumofAmicableNumbers(max: number): number {
  let arrayCheck: number[][] = [];
  let j = 0;

  //数値のその約数の和を配列に入れる
  for (let i = max; 0 < i; i--) {
    arrayCheck[j] = [i, calcSumOfProperDivisor(i)];
    j++;
  }

  let sum = 0;

  for (let j = 0; j < arrayCheck.length; j++) {
    for (let k = 0; k < arrayCheck.length; k++) {
      if (j !== k) {
        if (arrayCheck[k][1] === arrayCheck[j][0] && arrayCheck[k][0] === arrayCheck[j][1]) {
          //友愛数
          sum += arrayCheck[j][0] + arrayCheck[j][1];
          console.log(arrayCheck[j][0], arrayCheck[j][1]);
          break;
        }
      }
    }
  }
  return sum;
}

//自分自身を除いた約数とその和を求める
function calcSumOfProperDivisor(value: number): number {
  const max = Math.floor(Math.sqrt(value));
  let sum = 1;
  for (let i = 2; i <= max; i++) {
    if (value % i === 0) {
      sum += i + value / i;
    }
  }
  return sum;
}
