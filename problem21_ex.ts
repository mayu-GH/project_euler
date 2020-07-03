//10000以下のすべての友愛数の和を求める

console.log(calcSumOfAmicableNumbers(10000));

//指定の数以下の全ての友愛数の和を求める
function calcSumOfAmicableNumbers(max: number): number {
  const arraySumOfDivisor = new Map<number, number>();

  //数値とその約数の和を配列に入れる
  for (let i = max; 0 < i; i--) {
    arraySumOfDivisor.set(i, calcSumOfProperDivisor(i));
  }

  let sum = 0;

  //友愛数を見つける
  for (const element of arraySumOfDivisor) {
    if (element[0] == arraySumOfDivisor.get(element[1]) && element[0] !== element[1]) {
      sum += element[0];
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
