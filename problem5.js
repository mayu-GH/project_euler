'use strict';
function scm(numMax, numMin) {
  //配列
  let arrayNum = new Array();
  for (let i = numMax; i >= numMin; i--) {
    arrayNum.push(i);
  }

  //最小公倍数
  return arrayNum.reduce((accumulator, currentValue) => {
    let gcdResult = gcd(accumulator, currentValue);
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
