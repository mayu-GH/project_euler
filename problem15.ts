// 20×20のグリッドを左上から右下に移動するルートは何通り？
//2x2 : 4!/2!2! = 6

console.log(getHowManyRoutes(20));

function getHowManyRoutes(grid: number): number {
  const numerator = calcPermutation(grid);
  const denominator = calcPermutation(grid * 2);
  return denominator / (numerator * numerator);
}

function calcPermutation(grid: number): number {
  let result = 1;
  for (let i = 1; i <= grid; i++) {
    result *= i;
  }
  return result;
}
