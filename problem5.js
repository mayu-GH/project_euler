//1-20までのすべての数で割り切れる最小の数は？(1-20の最小公倍数)
//最大公約数を出してから最小公倍数を出す
'use strict';
function scm(numMax, numMin) {
  //配列
  const arrayNum = new Array();
  for (let i = numMax; i >= numMin; i--) {
    arrayNum.push(i);
  }

  //最小公倍数
  return arrayNum.reduce((accumulator, currentValue) => {
    const gcdResult = gcd(accumulator, currentValue);
    return (accumulator * currentValue) / gcdResult;
  });

  //最大公約数
  function gcd(accumulator, currentValue) {
    if (currentValue === 0) {
      return accumulator;
    } else {
      return gcd(currentValue, accumulator % currentValue);
    }
  }
}

console.log(scm(20, 1));
